/**
 * 庞杂系统 · 内核控制台 — 应用逻辑
 *
 * ── 文件结构 ──────────────────────────────────────────────
 *   1. 常量与视图表
 *   2. DOM / 格式化工具
 *   3. 启动引导动画（boot sequence）
 *   4. 视图切换
 *   5. 各视图渲染器（每个视图一个独立 render 函数，惰性加载 + 只加载一次）
 *   6. 问答推演
 *   7. 初始化
 *
 * ── 数据流 ────────────────────────────────────────────────
 *   所有数据访问走 DataSource（data-source.js）：
 *     live 模式    → /api/v1/*（后端实时扫描 / 未来内核插件）
 *     offline 模式 → offline-data.js 内嵌快照（file:// 直开可用）
 *   本文件不直接 fetch，不感知模式差异。
 *
 * ── 新增视图的步骤 ────────────────────────────────────────
 *   ① index.html 加 <section class="view" id="view-XXX"> 与导航按钮
 *   ② 本文件加 renderXXX() 惰性渲染函数
 *   ③ VIEW_TITLES 登记标题；导航按钮 data-view="XXX" 对应即可
 */
'use strict';

/* ══════════════════════ 1. 常量与视图表 ══════════════════════ */

const API_NOTE = '/api/v1';

/** 视图 id → 中文标题（导航、面包屑共用） */
const VIEW_TITLES = {
  overview: '内核概览',
  superindex: '超索引库',
  solutions: '解决方案',
  domains: '知识域',
  cases: '内核实测',
  script: '工作区',
  ask: '问答推演',
  issues: '项目台账',
  plugins: '插件中心',
};

/** 已完成首次加载的视图（避免重复请求） */
const loadedViews = new Set();

/* ══════════════════════ 2. DOM / 格式化工具 ══════════════════════ */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/** 字节数 → 人类可读 */
function fmtSize(n) {
  if (n == null) return '—';
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

/** ISO 时间 → 本地化时间串 */
function fmtTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? '—' : d.toLocaleString('zh-CN', { hour12: false });
}

/** 数字滚动动画（从上次值缓动到目标值） */
function countUp(el, target) {
  const DURATION_MS = 900;
  const from = Number(el.dataset.count || 0);
  el.dataset.count = target;
  const t0 = performance.now();
  const tick = (t) => {
    const p = Math.min((t - t0) / DURATION_MS, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(from + (target - from) * eased).toLocaleString('en-US');
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/** 构建 <dl> 键值对 */
function renderKV(container, rows) {
  container.innerHTML = '';
  for (const [k, v] of rows) {
    const dt = document.createElement('dt'); dt.textContent = k;
    const dd = document.createElement('dd'); dd.innerHTML = v;
    container.append(dt, dd);
  }
}

/* ══════════════════════ 3. 启动引导动画 ══════════════════════ */

const BOOT_LINES = [
  ['> 初始化问答流图 QuestionFlowMap ......... ', 'ok', 'OK'],
  ['> 挂载知识表示系统 KRS ................... ', 'ok', 'OK'],
  ['> 扫描超索引 SuperIndex 空间 ............. ', 'ok', 'OK'],
  ['> 探测接口适配层 kernel-adapter ......... ', 'amber', '···'],
  ['> 零轮询机 KRSPollingDrivenZero ......... ', 'ok', 'READY'],
];

function runBoot() {
  const log = $('#boot-log');
  const bar = $('#boot-bar-fill');
  let i = 0;
  const step = () => {
    if (i >= BOOT_LINES.length) {
      setTimeout(() => {
        $('#boot').classList.add('is-done');
        $('#shell').classList.add('is-on');
      }, 360);
      return;
    }
    const [text, cls, tag] = BOOT_LINES[i];
    log.insertAdjacentHTML('beforeend', `${text}<span class="${cls}">[${tag}]</span>\n`);
    bar.style.width = `${((i + 1) / BOOT_LINES.length) * 100}%`;
    i += 1;
    setTimeout(step, 240 + Math.random() * 160);
  };
  step();
}

/* ══════════════════════ 4. 视图切换 ══════════════════════ */

const VIEW_RENDERERS = {
  overview: renderOverview,
  superindex: renderSuperIndex,
  solutions: renderSolutions,
  domains: renderDomains,
  cases: renderKernelCases,
  script: renderScriptWorkbench,
  ask: () => {}, // 问答视图无须加载数据
  issues: renderIssues,
  plugins: renderPlugins,
};

function switchView(name) {
  if (!VIEW_TITLES[name]) name = 'overview';
  $$('.nav-item').forEach((b) => b.classList.toggle('is-active', b.dataset.view === name));
  $$('.view').forEach((v) => v.classList.toggle('is-active', v.id === `view-${name}`));
  $('#crumb').textContent = VIEW_TITLES[name] || name;
  // URL 深链：把当前视图写进 hash（replaceState 不污染历史）
  if (location.hash !== `#${name}`) history.replaceState(null, '', `#${name}`);

  if (!loadedViews.has(name)) {
    VIEW_RENDERERS[name]();
    loadedViews.add(name);
  }
}

/* ══════════════════════ 5. 各视图渲染器 ══════════════════════ */

/** 数据源徽标：live=绿 / offline=琥珀虚线 */
function paintSourceBadge(mode) {
  const box = $('#link-state');
  box.classList.remove('is-live', 'is-mock', 'is-down');
  box.classList.add(mode === 'live' ? 'is-live' : 'is-mock');
  $('#link-mode').textContent = mode === 'live' ? 'LIVE API' : 'OFFLINE SNAPSHOT';
  $('#link-endpoint').textContent = mode === 'live' ? API_NOTE : 'offline-data.js';
  $('#mode-pill').textContent = mode === 'live' ? 'MODE: LIVE' : 'MODE: OFFLINE';
}

/** ── 01 内核概览 ── */
async function renderOverview() {
  try {
    const st = await DataSource.get('/status');
    paintSourceBadge(DataSource.mode);

    $('#hero-sub').textContent = DataSource.mode === 'live'
      ? '已连接后端接口，数据实时扫描自真实 KRS 目录；内核插件接口就绪后一键切换，页面零改动。'
      : '当前为离线快照模式（数据来自真实 KRS 目录的自动生成快照）；启动 node server/server.js 即可切回实时模式。';

    countUp($('#stat-units'), st.superIndexCount || 0);
    countUp($('#stat-entry'), st.solutionEntrypoint || 0);
    countUp($('#stat-runtime'), (st.runtimeData && st.runtimeData.fileCount) || 0);
    $('#stat-mode').textContent = DataSource.mode.toUpperCase();

    renderKV($('#status-kv'), [
      ['系统', st.system],
      ['数据快照', st.snapshot],
      ['超索引单元', `<b>${st.superIndexCount}</b>`],
      ['运行时数据', st.runtimeData && st.runtimeData.present
        ? `${st.runtimeData.fileCount} 文件 · 最后写入 ${fmtTime(st.runtimeData.lastWrite)}` : '未发现'],
      ['接口端点', st.kernelLink || `${API_NOTE}（${DataSource.mode}）`],
      ['备注', (st.notes || []).join('；')],
    ]);

    const pol = await DataSource.get('/polling');
    const ml = $('#machine-list');
    ml.innerHTML = '';
    for (const m of pol.machines) {
      const div = document.createElement('div');
      div.className = 'machine';
      div.innerHTML = `<b>${m.name}</b><span>${m.role}</span><i>${m.state.toUpperCase()}</i>`;
      ml.appendChild(div);
    }

    // 问答流图状态（四态计数条形图）
    const flow = pol.questionFlow || [];
    const max = Math.max(1, ...flow.map((x) => x.count));
    $('#flow-list').innerHTML = flow.map((x) =>
      `<div class="flow-row"><span class="flow-state">${x.state}</span>` +
      `<span class="flow-bar"><i style="width:${(x.count / max) * 100}%"></i></span>` +
      `<b class="flow-count">${x.count}</b></div>`).join('');
    $('#flow-note').textContent = pol.note || '';
    $('#flow-tag').textContent = DataSource.mode === 'live' ? 'LIVE' : 'SNAPSHOT';
  } catch (e) {
    $('#link-state').classList.add('is-down');
    $('#hero-sub').textContent = `⚠ 数据加载失败：${e.message}`;
  }
}

/** ── 02 超索引库（加载一次 + 前端搜索/筛选/排序） ── */
let siAll = [];
let siSortKey = 'superIndex';
let siSortDir = 1;

/** 按当前搜索/筛选/排序条件重绘表格 */
function paintSuperIndex() {
  const q = ($('#si-search').value || '').trim().toLowerCase();
  const f = $('#si-filter').value;
  const rows = siAll.filter((r) => {
    const isKnown = !String(r.label).startsWith('知识单元');
    if (f === 'known' && !isKnown) return false;
    if (f === 'unknown' && isKnown) return false;
    if (!q) return true;
    return String(r.superIndex).includes(q)
      || String(r.label).toLowerCase().includes(q)
      || String(r.path).toLowerCase().includes(q);
  });
  const key = siSortKey, dir = siSortDir;
  rows.sort((a, b) => ((key === 'size' ? a.size - b.size : a.superIndex - b.superIndex)) * dir);

  const tbody = $('#si-table tbody');
  tbody.innerHTML = '';
  for (const r of rows) {
    const tr = document.createElement('tr');
    tr.dataset.id = r.superIndex;
    tr.innerHTML =
      `<td>${r.superIndex}</td>` +
      `<td class="${String(r.label).startsWith('知识单元') ? '' : 'tag-known'}">${r.label}</td>` +
      `<td>${fmtSize(r.size)}</td>` +
      `<td>${r.path}</td>`;
    tr.addEventListener('click', () => showSuperIndexDetail(r.superIndex));
    tbody.appendChild(tr);
  }
  if (!rows.length) tbody.innerHTML = '<tr><td colspan="4">无匹配单元</td></tr>';
  $('#si-count').textContent = `显示 ${rows.length} / 共 ${siAll.length}`;
}

async function renderSuperIndex() {
  const tbody = $('#si-table tbody');
  tbody.innerHTML = '<tr><td colspan="4">加载中……</td></tr>';
  try {
    siAll = await DataSource.get('/superindex?limit=500');
    $('#si-search').addEventListener('input', paintSuperIndex);
    $('#si-filter').addEventListener('change', paintSuperIndex);
    // 表头排序：第 1 列 = 超索引，第 3 列 = 大小
    const ths = $$('#si-table thead th');
    const bind = (th, key) => th.addEventListener('click', () => {
      if (siSortKey === key) siSortDir *= -1; else { siSortKey = key; siSortDir = 1; }
      ths.forEach((t) => t.classList.remove('is-sort'));
      th.classList.add('is-sort');
      th.title = siSortDir > 0 ? '升序' : '降序';
      paintSuperIndex();
    });
    bind(ths[0], 'superIndex');
    bind(ths[2], 'size');
    paintSuperIndex();
    const preferred = siAll.find((x) => x.superIndex === 65576) || siAll[0];
    if (preferred) showSuperIndexDetail(preferred.superIndex);
  } catch (e) {
    tbody.innerHTML = `<tr><td colspan="4">加载失败：${e.message}</td></tr>`;
  }
}

/** 超索引详情面板（live 模式额外展示文件头 HEX） */
async function showSuperIndexDetail(id) {
  const box = $('#si-detail');
  box.hidden = false;
  box.innerHTML = '<h3>读取中……</h3>';
  try {
    const d = await DataSource.get(`/superindex/${id}`);
    box.innerHTML =
      `<h3>SUPER INDEX ${d.superIndex} — ${d.label}</h3>` +
      `<p class="hexline">路径 <b>${d.path}</b> ｜ 大小 ${fmtSize(d.size)} ｜ 修改 ${fmtTime(d.modified)}</p>` +
      `<p class="hexline" style="margin-top:8px">${d.note}</p>` +
      (d.headerHex
        ? `<p class="hexline" style="margin-top:12px">文件头 HEX<br /><b>${d.headerHex}</b><br />ASCII &nbsp; ${d.headerAscii}</p>`
        : '<p class="hexline" style="margin-top:12px;color:var(--ink-faint)">（文件头 HEX 需实时模式读盘，离线快照不含）</p>');
  } catch (e) {
    box.innerHTML = `<h3>读取失败</h3><p class="hexline">${e.message}</p>`;
  }
}

/** ── 03 解决方案 ── */
async function renderSolutions() {
  const box = $('#sol-list');
  box.innerHTML = '<p style="color:var(--ink-faint)">加载中……</p>';
  try {
    const sols = await DataSource.get('/solutions');
    box.innerHTML = '';
    if (!sols.length) box.innerHTML = '<p style="color:var(--ink-faint)">未发现解决方案文件（KRS\Data\KRS_Solution）。</p>';
    for (const s of sols) {
      const card = document.createElement('div');
      card.className = 'sol-card';
      // 用脚本引擎做真正的高亮（转义安全，与脚本工作台同一套规则）
      const body = s.source
        ? `<div class="sol-source hl">${LanToolkit.highlight(s.source)}</div>`
        : '<div class="sol-source">（二进制 / 无文本内容）</div>';
      card.innerHTML =
        `<div class="sol-card-head"><b>${s.file}</b><span>${s.language || ''} · ${fmtSize(s.size)}</span></div>` + body;
      box.appendChild(card);
    }
  } catch (e) {
    box.innerHTML = `<p style="color:var(--danger)">加载失败：${e.message}</p>`;
  }
}

/** ── 04 知识域 ── */
async function renderDomains() {
  const box = $('#domain-cloud');
  box.innerHTML = '<p style="color:var(--ink-faint)">加载中……</p>';
  try {
    const domains = await DataSource.get('/domains');
    box.innerHTML = '';
    if (!domains.length) box.innerHTML = '<p style="color:var(--ink-faint)">未发现 Obsidian 知识库。</p>';
    for (const d of domains) {
      const chip = document.createElement('span');
      chip.className = 'domain-chip' + (d.placeholder ? ' is-placeholder' : '');
      chip.title = d.file;
      const size = d.placeholder ? '占位' : fmtSize(d.size);
      const folder = d.file.includes('/') ? d.file.split('/').slice(0, -1).join('/') + ' · ' : '';
      chip.innerHTML = `${d.title}<small>${folder}${size}</small>`;
      box.appendChild(chip);
    }
  } catch (e) {
    box.innerHTML = `<p style="color:var(--danger)">加载失败：${e.message}</p>`;
  }
}

/** ── 05 内核实测（VS2026 案例矩阵） ── */
async function renderKernelCases() {
  const box = $('#case-list');
  const summary = $('#case-summary');
  box.innerHTML = '<p style="color:var(--ink-faint)">加载中……</p>';
  try {
    const data = await DataSource.get('/cases');
    if (!data || !data.cases) throw new Error('案例矩阵数据缺失');

    summary.innerHTML =
      `<span class="pill pill-accent">构建通过 ${data.total}/${data.total}</span>` +
      `<span class="pill">正常退出 ${data.passed}</span>` +
      `<span class="pill">轮询循环 ${data.total - data.passed}</span>` +
      `<span class="pill">${data.toolchain}</span>`;

    box.innerHTML = '';
    for (const c of data.cases) {
      const isPolling = String(c.runStatus || '').includes('polling');
      const ok = c.runStatus === 'exited' && c.exitCode === 0;
      const card = document.createElement('div');
      card.className = 'case-card ' + (ok ? 'is-ok' : isPolling ? 'is-polling' : 'is-fail');
      card.innerHTML =
        '<div class="case-head">' +
        `  <b>${c.name}</b>` +
        `  <span class="case-verdict">${ok ? '正常退出' : isPolling ? '轮询循环' : '失败'}</span>` +
        '</div>' +
        '<div class="case-body">' +
        `  <span>常量 <code>${c.id}</code></span>` +
        `  <span>构建 ${(c.buildMs / 1000).toFixed(1)}s</span>` +
        (c.runMs ? `<span>运行 ${c.runMs}ms</span>` : '') +
        (c.exitCode != null ? `<span>退出码 ${c.exitCode}</span>` : '') +
        (c.outputLines != null ? `<span>输出 ${c.outputLines} 行</span>` : '') +
        '</div>' +
        (c.outputPreview ? `<div class="case-preview">${c.outputPreview}</div>` : '') +
        (c.buildError ? `<div class="case-preview is-error">${c.buildError}</div>` : '');
      box.appendChild(card);
    }
    $('#case-note').textContent = `矩阵生成于 ${data.generatedAt} —— 每个案例 = 修改 SwitchCase → MSBuild 构建 → 实际运行`;
  } catch (e) {
    summary.innerHTML = '';
    box.innerHTML = `<p style="color:var(--danger)">${e.message}</p>`;
  }
}

/** ── 08 项目台账（《项目手册.md》问题台账实时视图） ── */
async function renderIssues() {
  const board = $('#issue-board');
  const summary = $('#issue-summary');
  board.innerHTML = '<p style="color:var(--ink-faint)">加载中……</p>';
  try {
    const data = await DataSource.get('/issues');
    if (!data || !data.issues || data.issues.length === 0) throw new Error('台账为空');

    summary.innerHTML =
      `<span class="pill pill-accent">问题总数 ${data.total}</span>` +
      `<span class="pill">开放中 ${data.open}</span>` +
      `<span class="pill">已闭环 ${data.total - data.open}</span>` +
      `<span class="pill">${data.source}</span>`;

    const clean = (s) => String(s).replace(/\*\*/g, '').replace(/`/g, '');
    board.innerHTML = data.issues.map((x) => {
      // 后端已给出 closed 判定；兜底再用关键词判断（兼容旧快照）
      const done = x.closed !== undefined ? x.closed : /已解决|已关闭|已修复|已撤销|✅/.test(x.status + x.level);
      const lvDanger = /🔴/.test(x.level);
      const lvWarn = /🟡/.test(x.level);
      const cls = done ? 'is-done' : (lvDanger ? 'is-crit' : lvWarn ? 'is-warn' : 'is-info');
      // 级别列仅当形如"🔴 高 / 🟡 中 / 🟢 低"时展示；其余（如"已关闭"表）统一显示"已关闭"
      const meta = /[🔴🟡🟢]/.test(x.level) ? clean(x.level) : '已关闭';
      return `<div class="issue-card ${cls}">` +
        `<span class="issue-id">${x.id}</span>` +
        `<div class="issue-main"><p class="issue-title">${clean(x.title)}</p>` +
        `<p class="issue-meta">${meta}</p></div>` +
        `<span class="issue-status">${clean(x.status)}</span></div>`;
    }).join('');
  } catch (e) {
    summary.innerHTML = '';
    board.innerHTML = `<p style="color:var(--danger)">${e.message}</p>`;
  }
}

/** ── 09 插件中心（前端 ↔ 插件 通信） ── */
async function renderPlugins() {
  const cards = $('#plug-cards');
  const panelsBox = $('#plug-panels');
  const summary = $('#plug-summary');
  cards.innerHTML = '<p style="color:var(--ink-faint)">加载中……</p>';

  if (DataSource.mode !== 'live') {
    summary.innerHTML = '';
    cards.innerHTML = '<p style="color:var(--ink-faint)">插件需要实时后端：请运行 <code>node app\\server\\server.js</code> 后刷新（离线 file:// 模式不支持插件）。</p>';
    return;
  }
  try {
    // 插件需要脚本工作台的编辑器，先确保其已渲染
    if (!loadedViews.has('script')) { VIEW_RENDERERS.script(); loadedViews.add('script'); }

    const list = await QAPluginHost.load();
    summary.innerHTML =
      `<span class="pill pill-accent">插件 ${list.length}</span>` +
      `<span class="pill">面板 ${QAPluginHost.panels.length}</span>` +
      `<span class="pill">通信 HTTP + SSE</span>`;

    cards.innerHTML = list.length ? list.map((p) => {
      const cmds = (p.contributes && p.contributes.commands) || [];
      const panels = (p.contributes && p.contributes.panels) || [];
      return '<div class="plug-card">' +
        `<div class="plug-card-head"><b>${p.name}</b><span class="plug-ver">v${p.version}</span></div>` +
        `<p class="plug-desc">${p.description || ''}</p>` +
        '<div class="plug-tags">' +
        panels.map((x) => `<span class="plug-tag">面板 · ${x.title}</span>`).join('') +
        cmds.map((c) => `<span class="plug-tag">命令 · ${c.title || c.id}</span>`).join('') +
        '</div></div>';
    }).join('') : '<p style="color:var(--ink-faint)">未发现插件（app\\plugins\\&lt;id&gt;）。</p>';

    panelsBox.innerHTML = '';
    if (!QAPluginHost.panels.length) panelsBox.innerHTML = '<p style="color:var(--ink-faint)">暂无插件面板。</p>';
    for (const p of QAPluginHost.panels) {
      const box = document.createElement('div');
      box.className = 'plug-panel-wrap';
      const h = document.createElement('div');
      h.className = 'plug-panel-title';
      h.textContent = p.title;
      box.append(h, p.element);
      panelsBox.appendChild(box);
    }
  } catch (e) {
    summary.innerHTML = '';
    cards.innerHTML = `<p style="color:var(--danger)">插件加载失败：${e.message}</p>`;
  }
}

/* ══════════════════════ 5.5 脚本工作台 ══════════════════════ */

/**
 * 脚本工作台：.lan/.pi 编辑、高亮、校验、常数展开
 * 引擎在 lan-toolkit.js（LanToolkit），本函数只做 DOM 接线。
 */
function renderScriptWorkbench() {
  const lanEl = $('#ws-lan');
  const piEl = $('#ws-pi');
  let lastPiExtra = [];   // 最近一次展开产出的 .pi 追加行（供"复制 .pi"用）

  /** 一个编辑器实例：高亮层 + 行号 + 滚动同步 */
  const bindEditor = (textarea, hlEl, gutterEl, storeKey) => {
    const refresh = () => {
      hlEl.innerHTML = LanToolkit.highlight(textarea.value);
      const count = textarea.value.split('\n').length;
      gutterEl.innerHTML = Array.from({ length: count }, (_, i) => `<span>${i + 1}</span>`).join('');
      if (window.WorkspaceStore && storeKey) WorkspaceStore.set(storeKey, textarea.value);
    };
    textarea.addEventListener('input', refresh);
    textarea.addEventListener('scroll', () => {
      hlEl.scrollTop = textarea.scrollTop;
      hlEl.scrollLeft = textarea.scrollLeft;
      gutterEl.scrollTop = textarea.scrollTop;
    });
    refresh();
    return refresh;
  };

  const refreshLan = bindEditor(lanEl, $('#ws-lan-hl'), $('#ws-lan-gutter'), 'lan');
  const refreshPi = bindEditor(piEl, $('#ws-pi-hl'), $('#ws-pi-gutter'), 'pi');

  // 实时校验（本地引擎，防抖）——让编辑器不再"只是个输入框"
  let _vt = null;
  const liveValidate = () => {
    clearTimeout(_vt);
    _vt = setTimeout(() => { try { WorkspaceActions.validate(); } catch { /* ignore */ } }, 450);
  };
  lanEl.addEventListener('input', liveValidate);
  piEl.addEventListener('input', liveValidate);

  /** 初始示例 */
  const loadSample = () => {
    lanEl.value = LanToolkit.SAMPLE_LAN;
    piEl.value = LanToolkit.SAMPLE_PI;
    refreshLan();
    refreshPi();
    $('#ws-expand-box').hidden = true;
    $('#ws-issues').innerHTML = '<p class="ws-empty">点「规则校验」开始检查</p>';
    $('#ws-issue-count').textContent = '尚未校验';
    // 通知侧边栏面板（大纲/参数表）刷新
    lanEl.dispatchEvent(new Event('input'));
    piEl.dispatchEvent(new Event('input'));
    // 串起动作链：校验 + 流图 + 版本数 + 状态栏
    if (window.WorkspaceActions) {
      WorkspaceActions.validate();
      WorkspaceActions.refreshFlow();
      WorkspaceActions.refreshVersions();
    }
  };
  loadSample();

  /** 规则校验（统一走动作链：结果同步到校验区 / 问题面板 / 状态栏） */
  $('#ws-validate').addEventListener('click', () => WorkspaceActions.validate());

  /** 常数展开 → 内核可接受的脚本 */
  $('#ws-expand').addEventListener('click', () => {
    const r = LanToolkit.expandConstants(lanEl.value);
    const box = $('#ws-expand-box');
    lastPiExtra = r.piExtra || [];
    if (r.expanded.length === 0 && r.warnings.length === 0) {
      $('#ws-expand-lan').textContent = '（没有可展开的 const 声明 —— 先在脚本里写 const Xxx = N; ）';
      $('#ws-pi-extra').innerHTML = '';
      box.hidden = false;
      WorkspaceActions.validate(); WorkspaceActions.refreshFlow();
      return;
    }
    $('#ws-expand-lan').textContent = r.lan;
    $('#ws-pi-extra').innerHTML =
      (r.warnings.length ? `<p class="ws-warn">⚠ ${r.warnings.join('；')}</p>` : '') +
      (r.piExtra.length
        ? '<p>需在 .pi 追加的参数行：</p><pre class="expand-code">' + r.piExtra.join('\n') + '</pre>'
        : '');
    box.hidden = false;
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    WorkspaceActions.validate();
    WorkspaceActions.refreshFlow();
  });

  /** 复制展开结果 */
  $('#ws-copy').addEventListener('click', async () => {
    const text = $('#ws-expand-lan').textContent;
    try {
      await navigator.clipboard.writeText(text);
      $('#ws-copy').textContent = '已复制 ✓';
    } catch {
      $('#ws-copy').textContent = '复制失败（file:// 下请手动选中）';
    }
    setTimeout(() => { $('#ws-copy').textContent = '复制 .lan'; }, 1600);
  });

  /** 复制 .pi 追加行 */
  $('#ws-copy-pi').addEventListener('click', async () => {
    const btn = $('#ws-copy-pi');
    if (!lastPiExtra.length) { btn.textContent = '无可复制内容'; }
    else {
      try { await navigator.clipboard.writeText(lastPiExtra.join('\n')); btn.textContent = '已复制 ✓'; }
      catch { btn.textContent = '复制失败（file:// 请手动选中）'; }
    }
    setTimeout(() => { btn.textContent = '复制 .pi 参数行'; }, 1600);
  });

  /** 格式化（引擎 format：规范缩进与空行） */
  $('#ws-format').addEventListener('click', () => {
    const before = lanEl.value;
    const after = LanToolkit.format(before);
    const hint = $('#ws-hint');
    if (after !== before) {
      lanEl.value = after;
      refreshLan();
      hint.textContent = '✓ 已格式化';
    } else {
      hint.textContent = '格式已是规范形式';
    }
    WorkspaceActions.validate();
    WorkspaceActions.refreshFlow();
    setTimeout(() => { hint.textContent = '规则依据：solution-script-writing skill'; }, 1800);
  });

  /** 恢复示例 */
  $('#ws-reset').addEventListener('click', loadSample);
}

/* ══════════════════════ 6. 问答推演 ══════════════════════ */

async function submitQuestion(text) {
  const result = $('#ask-result');
  const answer = $('#ask-answer');
  const steps = $('#ask-steps');
  result.hidden = false;
  answer.textContent = '推演中……';
  steps.innerHTML = '';
  try {
    const r = await DataSource.ask(text);
    answer.textContent = r.answer;
    for (const s of r.steps || []) {
      const li = document.createElement('li');
      li.innerHTML = `<b>${s.op}</b><span>${s.desc}</span>`;
      steps.appendChild(li);
    }
  } catch (e) {
    answer.textContent = `⚠ 推演失败：${e.message}`;
  }
}

/* ══════════════════════ 7. 初始化 ══════════════════════ */

document.addEventListener('DOMContentLoaded', async () => {
  runBoot();

  // 数据源探测（live/offline），完成后进入首个视图（支持 #hash 深链）
  await DataSource.init();

  // 工作区外壳：活动栏 / 侧边栏面板 / 标签页 / 底部面板
  if (window.Workbench) Workbench.init();
  if (window.IDEPanels) IDEPanels.registerAll();

  // 命令面板：把跨插件动作串成可执行命令（Ctrl/Cmd+K）
  if (window.CommandPalette && window.WorkspaceActions) {
    const A = WorkspaceActions;
    CommandPalette.register({ id: 'ws.complete', title: '一键整理脚本（常数 / 参数 / 格式 / 校验）', hint: '工作区', run: () => A.completeScript() });
    CommandPalette.register({ id: 'ws.validate', title: '校验脚本', hint: '工作区', run: () => A.validate() });
    CommandPalette.register({ id: 'ws.fillpi', title: '补齐参数表', hint: '工作区', run: () => A.fillPi() });
    CommandPalette.register({ id: 'ws.flow', title: '刷新问答流图', hint: '工作区', run: () => A.refreshFlow() });
    CommandPalette.register({ id: 'ws.version', title: '保存版本快照', hint: '工作区', run: () => A.saveVersion('') });
    CommandPalette.register({ id: 'ws.knowledge', title: '当前脚本存为知识条目', hint: '工作区', run: () => A.saveKnowledge() });
    CommandPalette.register({ id: 'ws.run', title: '推演当前脚本（方案推演）', hint: '工作区', run: async () => {
      const r = await QAPluginHost.call('script-runner', 'run', { lan: A.lan() });
      Workbench.output(`推演：${r.steps} 步 / 执行 ${r.executed} / 阻塞 ${r.blocked.length}\n` + r.trace.map((t) => `#${t.step} L${t.layer} ${t.node} ${t.action}`).join('\n'));
      QAPluginHost.status(r.ok ? '推演完成：无阻塞' : `推演完成：${r.blocked.length} 个阻塞`);
      return r;
    } });
    CommandPalette.register({ id: 'ws.capability', title: '搜索能力（映射/插件/技能/文档）', hint: '工作区', run: () => Workbench.show('doc') });
    CommandPalette.register({ id: 'tab.script', title: '标签页：脚本', run: () => Workbench.selectTab('script') });
    CommandPalette.register({ id: 'tab.intent', title: '标签页：意向性网络', run: () => Workbench.selectTab('intent') });
    CommandPalette.register({ id: 'tab.flow', title: '标签页：问答流图', run: () => Workbench.selectTab('flow') });
    CommandPalette.register({ id: 'act.edit', title: '活动栏：编辑', run: () => Workbench.show('edit') });
    CommandPalette.register({ id: 'act.lib', title: '活动栏：库', run: () => Workbench.show('lib') });
    CommandPalette.register({ id: 'act.doc', title: '活动栏：文档', run: () => Workbench.show('doc') });
    CommandPalette.register({ id: 'go.plugins', title: '跳转：插件中心', run: () => switchView('plugins') });
    CommandPalette.register({ id: 'go.issues', title: '跳转：项目台账', run: () => switchView('issues') });
  }
  const initial = (location.hash || '').replace(/^#/, '');
  switchView(VIEW_TITLES[initial] ? initial : 'overview');

  // 定时刷新概览（live 模式下反映数据变化；offline 模式下重绘无害）
  setInterval(() => { if ($('#view-overview').classList.contains('is-active')) renderOverview(); }, 30000);

  // 导航
  $$('.nav-item').forEach((b) => b.addEventListener('click', () => switchView(b.dataset.view)));

  // 浏览器前进/后退切换视图
  window.addEventListener('hashchange', () => {
    const n = (location.hash || '').replace(/^#/, '');
    if (VIEW_TITLES[n]) switchView(n);
  });

  // 数字快捷键 1..8 切视图（输入框内不触发）
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName || '')) return;
    const k = Number(e.key);
    const ids = Object.keys(VIEW_TITLES);
    if (k >= 1 && k <= ids.length) switchView(ids[k - 1]);
  });

  // 问答提交
  $('#ask-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const text = $('#ask-input').value.trim();
    if (text) submitQuestion(text);
  });

  // 顶栏时钟
  const clock = () => { $('#clock').textContent = new Date().toLocaleTimeString('zh-CN', { hour12: false }); };
  clock();
  setInterval(clock, 1000);

  // 插件 / 交互 的状态提示（toast）
  window.addEventListener('qa-status', (e) => {
    const t = $('#toast');
    if (!t) return;
    t.textContent = String(e.detail || '');
    t.hidden = false;
    clearTimeout(t._timer);
    t._timer = setTimeout(() => { t.hidden = true; }, 2600);
  });
});
