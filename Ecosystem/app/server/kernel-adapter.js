/**
 * 内核接口适配层（可替换接口层）
 *
 * 这是前后端与"庞杂系统内核"之间的唯一边界，按两种模式实现同一套契约：
 *
 *  - mock 模式（当前）：从本地真实 KRS 数据目录扫描元数据 + 内置语义示例，
 *    让展示版立刻可用；问答用确定性的演示逻辑回答。
 *  - kernel 模式（未来）：AnYuanHost 的"接口作为插件装进内核"就绪后，
 *    设置环境变量 KERNEL_ENDPOINT 指向插件暴露的 HTTP 端点即可切换，
 *    前端与路由零改动。
 *
 * 切换方式：set KERNEL_MODE=kernel && set KERNEL_ENDPOINT=http://127.0.0.1:PORT
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ledger = require('./ledger');

const MODE = (process.env.KERNEL_MODE || 'mock').toLowerCase();
const KERNEL_ENDPOINT = process.env.KERNEL_ENDPOINT || '';

// 项目根 = app/ 的上一级
const ROOT = path.join(__dirname, '..', '..');
const KRS_DIR = process.env.KRS_DIR || path.join(ROOT, 'Q_A_Test-master', 'KRS');
const RUNTIME_KRS_DIR = path.join(ROOT, '运行快照', 'Deubg_Test', 'KRS');

/** 已知超索引的语义标注（来自源码与数据实测，见《项目手册.md》第一章） */
const KNOWN_SUPER_INDEX = {
  65576: { label: '解决方案入口', note: 'Execute\\h.cpp\\Main.cpp 中硬编码的解决方案超索引' },
  65540: { label: 'CMD 显示信息', note: '序列化对象内含 "CMD显示信息" 中文标签（实测）' },
};

const startedAt = Date.now();

/**
 * 轻量 TTL 缓存：避免同一批请求反复扫盘（147 个 txt + 递归知识域）。
 * 目录变化会在 TTL（默认 3s）内反映，演示/评审足够。
 * 关闭：环境变量 QA_NO_CACHE=1；调 TTL：QA_CACHE_TTL_MS。
 */
const _cache = new Map();
const CACHE_TTL_MS = Number(process.env.QA_CACHE_TTL_MS || 3000);
const CACHE_OFF = process.env.QA_NO_CACHE === '1';
function ttlCache(key, producer) {
  if (CACHE_OFF) return producer();
  const now = Date.now();
  const hit = _cache.get(key);
  if (hit && now - hit.at < CACHE_TTL_MS) return hit.value;
  const value = producer();
  _cache.set(key, { at: now, value });
  return value;
}

/** KRS 目录最新时间戳 → "Q_A_Test @ YYYY-MM-DD HH:mm"（动态计算，替代原先的硬编码字符串） */
function krsSnapshotLabel() {
  const pad = (n) => String(n).padStart(2, '0');
  try {
    const d = fs.statSync(KRS_DIR).mtime;
    return `Q_A_Test @ ${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  } catch {
    return 'Q_A_Test（未找到 KRS 目录）';
  }
}

/** ---- kernel 模式：转发到内核插件端点 ---- */
async function kernelCall(pathname, init) {
  if (!KERNEL_ENDPOINT) {
    const e = new Error('kernel 模式未配置 KERNEL_ENDPOINT（内核插件接口尚未就绪）');
    e.code = 503;
    throw e;
  }
  const r = await fetch(KERNEL_ENDPOINT.replace(/\/$/, '') + pathname, init);
  if (!r.ok) throw new Error(`kernel responded ${r.status}`);
  return r.json();
}

/** ---- mock 模式工具：扫描真实 KRS 目录 ---- */
function scanKrs(baseDir) {
  const out = [];
  const walk = (dir, depth) => {
    if (depth > 4) return;
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p, depth + 1);
      else {
        let st = null;
        try { st = fs.statSync(p); } catch { /* ignore */ }
        out.push({
          rel: path.relative(baseDir, p).replace(/\\/g, '/'),
          name: e.name,
          size: st ? st.size : 0,
          mtime: st ? st.mtime.toISOString() : null,
        });
      }
    }
  };
  walk(baseDir, 0);
  return out;
}

function listTxtUnits() {
  return ttlCache('units', () => {
    const files = scanKrs(KRS_DIR).filter((f) => f.name.endsWith('.txt'));
    return files
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
  });
}

function readRuntimeInfo() {
  return ttlCache('runtime', () => {
    try {
      fs.statSync(RUNTIME_KRS_DIR);
      const files = scanKrs(RUNTIME_KRS_DIR);
      return {
        present: true,
        lastWrite: files.reduce((m, f) => (f.mtime && f.mtime > m ? f.mtime : m), ''),
        fileCount: files.length,
      };
    } catch {
      return { present: false, lastWrite: null, fileCount: 0 };
    }
  });
}

/** ---- 对外契约 ---- */
const adapter = {
  mode: MODE === 'kernel' ? 'kernel' : 'mock',

  async getStatus() {
    if (adapter.mode === 'kernel') return kernelCall('/api/v1/status');
    const units = listTxtUnits();
    const runtime = readRuntimeInfo();
    return {
      mode: 'mock',
      system: '庞杂系统 Q_A 内核',
      snapshot: krsSnapshotLabel(),
      uptimeSec: Math.round((Date.now() - startedAt) / 1000),
      superIndexCount: units.length,
      solutionEntrypoint: 65576,
      runtimeData: runtime,
      kernelLink: KERNEL_ENDPOINT || null,
      notes: [
        '展示版运行于 mock 模式：数据扫描自本地真实 KRS 目录',
        '内核插件接口就绪后用 KERNEL_MODE=kernel 切换，前端零改动',
      ],
    };
  },

  async listSuperIndex(limit = 50) {
    if (adapter.mode === 'kernel') return kernelCall(`/api/v1/superindex?limit=${limit}`);
    return listTxtUnits().slice(0, Math.max(1, Math.min(limit, 500)));
  },

  async getSuperIndex(id) {
    if (adapter.mode === 'kernel') return kernelCall(`/api/v1/superindex/${id}`);
    const hit = listTxtUnits().find((x) => x.superIndex === id);
    if (!hit) { const e = new Error(`super index ${id} 不存在`); e.code = 404; throw e; }
    // 尝试读取文件头十六进制，作为"序列化对象"的可视化证据
    try {
      const buf = fs.readFileSync(path.join(KRS_DIR, hit.path));
      hit.headerHex = buf.subarray(0, 32).toString('hex').replace(/(..)/g, '$1 ').trim();
      hit.headerAscii = buf.subarray(0, 32).toString('latin1').replace(/[^\x20-\x7e]/g, '.');
    } catch { /* 只读失败不影响元数据展示 */ }
    return hit;
  },

  async listSolutions() {
    if (adapter.mode === 'kernel') return kernelCall('/api/v1/solutions');
    return ttlCache('solutions', () => {
      const dir = path.join(KRS_DIR, 'Data', 'KRS_Solution');
      const out = [];
      try {
        for (const name of fs.readdirSync(dir)) {
          const p = path.join(dir, name);
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
          out.push(item);
        }
      } catch { /* 目录缺失时返回空列表 */ }
      return out;
    });
  },

  /** 轻量健康检查：探活专用，不扫盘（前端 data-source 的 probe 也走这里） */
  async getHealth() {
    return {
      ok: true,
      mode: adapter.mode,
      uptimeSec: Math.round((Date.now() - startedAt) / 1000),
      kernelEndpoint: KERNEL_ENDPOINT || null,
      cache: { enabled: !CACHE_OFF, ttlMs: CACHE_TTL_MS, entries: _cache.size },
    };
  },

  async listDomains() {
    if (adapter.mode === 'kernel') return kernelCall('/api/v1/domains');
    return ttlCache('domains', () => {
      // 中文知识域来自 KRS 的 Obsidian 知识库（喂给内核的词典/知识源），递归收集
      const obsidian = path.join(KRS_DIR, 'Data', 'Obsidian', 'Q_A');
      const out = [];
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
          out.push({ title, file: r, size: st ? st.size : 0, placeholder: st ? st.size === 0 : false });
        }
      };
      walk(obsidian, '');
      return out.sort((a, b) => a.file.localeCompare(b.file, 'zh'));
    });
  },

  async getPollingState() {
    if (adapter.mode === 'kernel') return kernelCall('/api/v1/polling');
    // mock：给出结构化的轮询机视图（语义来自 Doc 文档，数值为演示值）
    return {
      mode: 'mock',
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
      note: '真实轮次需内核接入后上报（插件接口就绪前为静态结构展示）',
    };
  },

  /** 内核案例矩阵：VS2026 对 9 个案例逐个构建+运行的实测结果（tools/run-case-matrix 产出） */
  async getKernelCases() {
    if (adapter.mode === 'kernel') return kernelCall('/api/v1/cases');
    try {
      return JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'case-results.json'), 'utf8'));
    } catch {
      const e = new Error('尚未生成案例矩阵（缺失 server/data/case-results.json）');
      e.code = 404;
      throw e;
    }
  },

  /**
   * 项目问题台账：实时解析《项目手册.md》第五章的问题表格，
   * 让控制台前端能直接展示项目问题状态（评审/接力两用）。
   * 解析逻辑与离线快照共用 ledger.js，口径一致。
   */
  async getIssues() {
    if (adapter.mode === 'kernel') return kernelCall('/api/v1/issues');
    try {
      return ledger.readLedger(path.join(ROOT, '项目手册.md'), '项目手册.md（实时解析）');
    } catch {
      const e = new Error('未找到 项目手册.md');
      e.code = 404;
      throw e;
    }
  },

  async askQuestion(payload) {
    if (adapter.mode === 'kernel') {
      return kernelCall('/api/v1/question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload || {}),
      });
    }
    const text = String((payload && payload.text) || '').trim();
    if (!text) { const e = new Error('缺少问题文本 text'); e.code = 400; throw e; }
    // 演示回答：基于关键词的确定性响应，展示问答流的结构
    const steps = [
      { op: 'Intentionality', desc: '匹配意向性对象，定位相关知识域' },
      { op: 'SolutionMatch', desc: '在解决方案集合中检索可应用的子图替换规则' },
      { op: 'QuestionFlowMap', desc: '生成子问题节点，标记为可执行' },
      { op: 'PollingDriven', desc: '轮询机领取节点并执行，写回 KRS' },
    ];
    return {
      mode: 'mock',
      question: text,
      answer: `【演示回答】内核尚未接入（mock 模式）。问题「${text}」已按问答流图完成一次模拟推演，共 ${steps.length} 步。`,
      steps,
      superIndexUsed: [65576],
      latencyMs: 0,
    };
  },
};

module.exports = adapter;
