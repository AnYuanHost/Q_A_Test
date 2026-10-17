/**
 * 一键自检（交付 / 发布前跑一次）
 *
 * 覆盖：语法 · 引擎单测 · 引擎同步一致性 · 数据一致性（live vs offline）·
 *       台账解析 · 关键产物存在性。
 *
 * 用法：node app/tools/check-all.js      （退出码 0 = 全通过）
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..', '..');
const APP = path.join(ROOT, 'app');

let pass = 0, fail = 0;
const lines = [];

function record(name, fn) {
  try { const d = fn(); pass++; lines.push(['PASS', name, d || '']); }
  catch (e) { fail++; lines.push(['FAIL', name, e.message]); }
}
async function recordAsync(name, fn) {
  try { const d = await fn(); pass++; lines.push(['PASS', name, d || '']); }
  catch (e) { fail++; lines.push(['FAIL', name, e.message]); }
}
const assert = (cond, msg) => { if (!cond) throw new Error(msg || '断言失败'); };

function walkJs(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'engine'].includes(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkJs(p, out);
    else if (e.name.endsWith('.js')) out.push(p);
  }
  return out;
}

function loadSnapshot() {
  const file = path.join(APP, 'web', 'js', 'offline-data.js');
  const saved = global.window;
  global.window = {};
  delete require.cache[require.resolve(file)];
  require(file);
  const snap = global.window.QA_OFFLINE_DATA;
  global.window = saved;
  return snap;
}

/* ─────────────── 同步检查 ─────────────── */

const syncChecks = [
  ['全部 JS 语法检查', () => {
    const files = [...walkJs(APP), ...walkJs(path.join(ROOT, 'vscode-q_a-lan'))];
    for (const f of files) execFileSync(process.execPath, ['--check', f], { stdio: 'pipe' });
    return `${files.length} 个文件`;
  }],

  ['脚本引擎单测', () => {
    const out = execFileSync(process.execPath, [path.join(APP, 'tools', 'test-lan-toolkit.js')], { encoding: 'utf8' });
    const m = /(\d+) PASS \/ (\d+) FAIL/.exec(out);
    assert(m, '未取得单测结果');
    assert(Number(m[2]) === 0, `存在 ${m[2]} 项失败`);
    return `${m[1]} PASS`;
  }],

  ['引擎同步一致（插件副本 == 源头）', () => {
    const src = fs.readFileSync(path.join(APP, 'web', 'js', 'lan-toolkit.js'), 'utf8').trim();
    const copy = fs.readFileSync(path.join(ROOT, 'vscode-q_a-lan', 'engine', 'lan-toolkit.js'), 'utf8');
    const body = copy.replace(/^\/\*[\s\S]*?\*\/\s*/, '').trim(); // 去掉同步横幅注释
    assert(body === src, '插件内引擎与源头不一致，请跑 node app/tools/sync-engine.js');
    return '一致';
  }],

  ['插件清单可解析', () => {
    const host = require(path.join(APP, 'server', 'plugin-host.js'));
    const list = host.scan();
    assert(list.length >= 6, '插件数量异常（期望 ≥6）');
    for (const m of list) assert(m.id && m.name, '插件清单缺少 id/name');
    return list.map((m) => `${m.id}@${m.version || '0'}`).join(', ');
  }],

  ['文档结构化索引可用', () => {
    const di = require(path.join(APP, 'server', 'doc-index.js'));
    const idx = di.index();
    assert(idx.totals.maps > 100, '映射索引过少：' + idx.totals.maps);
    assert(idx.totals.projects > 3, '项目索引过少：' + idx.totals.projects);
    return `映射 ${idx.totals.maps} · 文档 ${idx.totals.docs} · 项目 ${idx.totals.projects}`;
  }],

  ['问题台账解析', () => {
    const ledger = require(path.join(APP, 'server', 'ledger.js'));
    const r = ledger.readLedger(path.join(ROOT, '项目手册.md'), 'check');
    assert(r.total > 0, '未解析到任何条目');
    return `total=${r.total} open=${r.open}`;
  }],

  ['关键文件/目录存在', () => {
    const must = [
      'README.md', '项目手册.md', 'LICENSE.txt',
      '交付/项目简介.md', '交付/对接说明.md', '交付/项目计划书.md', '交付/项目计划书.docx', '交付/2.1行业背景.docx',
      '参考资料/内核设计参考.md',
      '参考资料/基于C++的知识管理系统与推理引擎.docx', '参考资料/任务书（参考原件）.doc', '参考资料/开题报告（参考原件）.doc',
      'app/web/index.html', 'app/web/js/offline-data.js', 'app/web/js/plugin-host.js',
      'app/web/js/workbench.js', 'app/web/js/ide-panels.js', 'app/web/js/intentionality-editor.js',
      'app/web/js/flow-draw.js', 'app/web/js/workspace-store.js', 'app/web/js/workspace-actions.js',
      'app/web/js/command-palette.js', 'app/server/lan-flow.js',
      'app/server/ledger.js', 'app/server/plugin-host.js',
      'app/plugins/const-manager/plugin.json', 'app/plugins/kbase-manager/plugin.json',
      'app/plugins/intentionality/plugin.json',
      'app/docs/插件/README.md', 'app/docs/插件/通信协议.md',
      'vscode-q_a-lan/engine/lan-toolkit.js',
      'app/server/doc-index.js', 'app/server/files.js',
      'app/docs/术语表.md', 'app/docs/文档索引.md', 'app/docs/能力目录.md', 'app/docs/脚本语言手册.md',
      'CONTRIBUTING.md', 'app/cpp/qaconst.hpp', 'app/cpp/qacomm.hpp',
      'vscode-q_a-lan/data/maps.json',
      'Q_A_Test-master', '运行快照/Deubg_Test',
    ];
    const missing = must.filter((f) => !fs.existsSync(path.join(ROOT, f)));
    assert(missing.length === 0, '缺失：' + missing.join(', '));
    return `${must.length} 项`;
  }],

  ['前端 id 引用一致（app.js ↔ index.html）', () => {
    const html = fs.readFileSync(path.join(APP, 'web', 'index.html'), 'utf8');
    const js = fs.readFileSync(path.join(APP, 'web', 'js', 'app.js'), 'utf8');
    const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
    const refs = new Set([...js.matchAll(/\$\('#([A-Za-z0-9_-]+)'/g)].map((m) => m[1]));
    const missing = [...refs].filter((r) => !ids.has(r));
    assert(missing.length === 0, 'app.js 引用了不存在的 id：' + missing.join(', '));
    return `${refs.size} 个引用全部有效`;
  }],

  ['VSCode 插件 .vsix 已打包', () => {
    const vsix = fs.readdirSync(path.join(ROOT, 'vscode-q_a-lan')).filter((f) => f.endsWith('.vsix'));
    assert(vsix.length > 0, '未找到 .vsix');
    return vsix.join(', ');
  }],
];

/* ─────────────── 异步检查 ─────────────── */

const asyncChecks = [
  ['数据一致性（live vs offline）', async () => {
    const adapter = require(path.join(APP, 'server', 'kernel-adapter.js'));
    const status = await adapter.getStatus();
    const domains = await adapter.listDomains();
    const snap = loadSnapshot();
    assert(snap, '离线快照未加载');
    assert(status.superIndexCount === snap.status.superIndexCount,
      `超索引数不一致 live=${status.superIndexCount} vs offline=${snap.status.superIndexCount}`);
    assert(domains.length === snap.domains.length,
      `知识域数不一致 live=${domains.length} vs offline=${snap.domains.length}`);
    return `超索引 ${status.superIndexCount} · 知识域 ${domains.length}`;
  }],
];

/* ─────────────── 执行 ─────────────── */

(async () => {
  for (const [name, fn] of syncChecks) record(name, fn);
  for (const [name, fn] of asyncChecks) await recordAsync(name, fn);

  console.log('\n================ Q_A 生态自检 ================');
  for (const [s, name, d] of lines) console.log(`  ${s === 'PASS' ? '✓' : '✗'} ${name}${d ? '  —— ' + d : ''}`);
  console.log('---------------------------------------------');
  console.log(`  结果：${pass} PASS / ${fail} FAIL`);
  console.log('=============================================\n');
  process.exit(fail ? 1 : 0);
})();
