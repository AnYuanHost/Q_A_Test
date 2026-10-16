/**
 * 离线数据快照生成器
 *
 * 从真实项目数据（KRS 目录 + 案例矩阵结果）生成 web/js/offline-data.js，
 * 使前端在 file:// 或无后端环境下也能完整演示（数据源层自动降级，见 data-source.js）。
 *
 * 用法：node tools/gen-offline-data.js
 * 输出：web/js/offline-data.js（window.QA_OFFLINE_DATA = {...}）
 */
'use strict';

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..');
const ROOT = path.join(APP_DIR, '..');
const KRS_DIR = path.join(ROOT, 'Q_A_Test-master', 'KRS');
const CASE_JSON = path.join(APP_DIR, 'server', 'data', 'case-results.json');
const OUT = path.join(APP_DIR, 'web', 'js', 'offline-data.js');
const ledger = require(path.join(APP_DIR, 'server', 'ledger.js'));

/** KRS 目录时间戳 → 快照标签（与 kernel-adapter 的 krsSnapshotLabel 同规则，保证 live/offline 一致） */
function krsSnapshotLabel() {
  const pad = (n) => String(n).padStart(2, '0');
  try {
    const d = fs.statSync(KRS_DIR).mtime;
    return `Q_A_Test @ ${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  } catch {
    return 'Q_A_Test';
  }
}

/** 已知超索引的语义标注（与 kernel-adapter.js 保持一致） */
const KNOWN_SUPER_INDEX = {
  65576: { label: '解决方案入口', note: 'Execute\\h.cpp\\Main.cpp 中硬编码的解决方案超索引' },
  65540: { label: 'CMD 显示信息', note: '序列化对象内含 "CMD显示信息" 中文标签（实测）' },
};

/** 递归收集目录下所有文件（相对路径 + 元数据） */
function scanDir(baseDir) {
  const out = [];
  const walk = (dir, rel, depth) => {
    if (depth > 4) return;
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) { walk(p, r, depth + 1); continue; }
      let st = null;
      try { st = fs.statSync(p); } catch { /* ignore */ }
      out.push({ rel: r, name: e.name, size: st ? st.size : 0, mtime: st ? st.mtime.toISOString() : null });
    }
  };
  walk(baseDir, '', 0);
  return out;
}

// ---- 超索引单元 ----
const superIndex = scanDir(KRS_DIR)
  .filter((f) => f.name.endsWith('.txt'))
  .map((f) => {
    const id = Number(path.basename(f.name, '.txt'));
    const known = KNOWN_SUPER_INDEX[id];
    return {
      superIndex: Number.isFinite(id) ? id : null,
      path: f.rel,
      size: f.size,
      modified: f.mtime,
      label: known ? known.label : '知识单元（KRS 序列化对象）',
      note: known ? known.note : '按超索引编号落盘的二进制序列化对象',
    };
  })
  .filter((x) => x.superIndex !== null)
  .sort((a, b) => a.superIndex - b.superIndex);

// ---- 解决方案 ----
const solutions = [];
const solDir = path.join(KRS_DIR, 'Data', 'KRS_Solution');
try {
  for (const name of fs.readdirSync(solDir)) {
    const p = path.join(solDir, name);
    const st = fs.statSync(p);
    const item = { file: name, size: st.size, modified: st.mtime.toISOString() };
    if (name.endsWith('.lan')) {
      item.language = '解决方案语言（Solution Language）';
      item.source = fs.readFileSync(p, 'utf8');
    }
    if (name.endsWith('.pi')) {
      item.language = '解决方案参数（Parameter Info）';
      item.source = fs.readFileSync(p, 'utf8');
    }
    solutions.push(item);
  }
} catch { /* 目录缺失时为空 */ }

// ---- 中文知识域（Obsidian 知识库，递归） ----
const domains = [];
{
  const obsidian = path.join(KRS_DIR, 'Data', 'Obsidian', 'Q_A');
  const walk = (dir, rel) => {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) { walk(p, r); continue; }
      if (!e.name.endsWith('.md')) continue;
      let st = null;
      try { st = fs.statSync(p); } catch { /* ignore */ }
      let title = path.basename(e.name, '.md');
      try {
        const first = fs.readFileSync(p, 'utf8').split(/\r?\n/).find((l) => l.trim());
        if (first && first.startsWith('#')) title = first.replace(/^#+\s*/, '').trim();
      } catch { /* 用文件名兜底 */ }
      domains.push({ title, file: r, size: st ? st.size : 0, placeholder: st ? st.size === 0 : false });
    }
  };
  walk(obsidian, '');
  domains.sort((a, b) => a.file.localeCompare(b.file, 'zh'));
}

// ---- 运行时数据（运行快照\Deubg_Test） ----
const runtimeFiles = scanDir(path.join(ROOT, '运行快照', 'Deubg_Test', 'KRS'));
const runtimeLastWrite = runtimeFiles.reduce((m, f) => (f.mtime && f.mtime > m ? f.mtime : m), '');

// ---- 内核案例矩阵（VS2026 实测结果） ----
let kernelCases = null;
try {
  kernelCases = JSON.parse(fs.readFileSync(CASE_JSON, 'utf8'));
} catch { /* 未跑过矩阵时为 null */ }

// ---- 项目问题台账（解析《项目手册.md》第五章，与 adapter 共用 ledger.js） ----
let issues = { total: 0, open: 0, issues: [], source: '项目手册.md（快照）' };
try {
  issues = ledger.readLedger(path.join(ROOT, '项目手册.md'), '项目手册.md（快照）');
} catch { /* 台账缺失时为空 */ }

const snapshot = {
  generatedAt: new Date().toISOString(),
  source: 'Q_A_Test-master/KRS + 运行快照/Deubg_Test/KRS + case-results.json',
  status: {
    mode: 'offline',
    system: '庞杂系统 Q_A 内核',
    snapshot: krsSnapshotLabel(),
    uptimeSec: 0,
    superIndexCount: superIndex.length,
    solutionEntrypoint: 65576,
    runtimeData: { present: runtimeFiles.length > 0, lastWrite: runtimeLastWrite, fileCount: runtimeFiles.length },
    kernelLink: null,
    notes: [
      '离线快照模式：数据由 tools/gen-offline-data.js 从真实 KRS 目录生成',
      '启动后端（node server/server.js）即可切换为实时扫描模式，页面零改动',
    ],
  },
  superIndex,
  solutions,
  domains,
  polling: {
    mode: 'offline',
    machines: [
      { name: 'KRSPollingDrivenZero', role: '零轮询机 · 智能体根结构', state: 'idle', round: 0 },
      { name: 'PollingDriven_Base', role: '轮询机 · 询问可执行问答节点', state: 'waiting', round: 0 },
      { name: 'PDZ_KRS_Pipe', role: '轮询机 ↔ KRS 数据管道', state: 'linked', round: 0 },
    ],
    questionFlow: [
      { state: '不可执行', count: 0 },
      { state: '可执行', count: 0 },
      { state: '等待', count: 0 },
      { state: '执行完成', count: 0 },
    ],
    note: '静态结构快照（真实轮次需内核插件接入后上报）',
  },
  kernelCases,
  issues,
};

const banner = `/**
 * 庞杂系统 · 内核控制台 — 离线数据快照
 *
 * ⚠️ 本文件由 tools/gen-offline-data.js 自动生成，请勿手工编辑。
 * 重新生成：node tools/gen-offline-data.js
 * 生成时间：${snapshot.generatedAt}
 *
 * 作用：前端在 file:// 直开或后端不可用时的完整降级数据源（见 data-source.js）。
 */
`;
fs.writeFileSync(OUT, banner + 'window.QA_OFFLINE_DATA = ' + JSON.stringify(snapshot, null, 2) + ';\n', 'utf8');

console.log(`[gen-offline-data] 已生成 ${OUT}`);
console.log(`  超索引 ${superIndex.length} 条 | 解决方案 ${solutions.length} 个 | 知识域 ${domains.length} 个 | 案例矩阵 ${kernelCases ? kernelCases.cases.length + ' 条' : '缺失'}`);
