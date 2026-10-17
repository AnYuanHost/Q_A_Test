/**
 * 工作区侧边栏面板（内置贡献）
 *
 * 面板只做"外壳 + 调用插件命令"，具体能力由插件提供（outline / pi-helper / snippets / maplib / kbase-manager / docs-index）。
 * 这样新增能力 = 新增插件，不必改工作区。
 */
(function () {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const scriptEl = () => $('#ws-lan');
  const piEl = () => $('#ws-pi');
  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  function insertTo(el, text) {
    if (!el) { QAPluginHost.status('请先打开「工作区」'); return; }
    const s = el.selectionStart == null ? el.value.length : el.selectionStart;
    const e = el.selectionEnd == null ? s : el.selectionEnd;
    el.value = el.value.slice(0, s) + text + el.value.slice(e);
    el.selectionStart = el.selectionEnd = s + text.length;
    el.dispatchEvent(new Event('input'));
    el.focus();
  }

  function gotoLine(el, line) {
    if (!el) return;
    const lines = el.value.split('\n');
    let off = 0;
    for (let i = 0; i < line - 1 && i < lines.length; i++) off += lines[i].length + 1;
    el.focus();
    el.setSelectionRange(off, off + (lines[line - 1] || '').length);
    const lh = 21; // ≈ 行高（px），仅用于滚动定位
    el.scrollTop = Math.max(0, (line - 1) * lh - 40);
  }

  const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };

  async function safe(fn, fallback) {
    try { return await fn(); } catch (e) { QAPluginHost.status('插件调用失败：' + e.message); return fallback; }
  }

  /* ---------- 面板 1：大纲 ---------- */
  const outlinePanel = {
    title: '大纲',
    render(el) {
      el.innerHTML = '<div class="ide-hint">解析当前 .lan 的节点与状态</div><div class="ide-list" id="ide-outline"></div>';
      const box = el.querySelector('#ide-outline');
      const refresh = async () => {
        const r = await safe(() => QAPluginHost.call('outline', 'outline', { lan: scriptEl() ? scriptEl().value : '' }), null);
        if (!r) { box.innerHTML = '<div class="ide-item ide-empty">插件不可用（需实时后端）</div>'; return; }
        box.innerHTML = r.nodes.length
          ? r.nodes.map((n) => `<div class="ide-item" data-line="${n.line}"><b>${n.name || '—'}</b><span>${n.state} · L${n.line}</span></div>`).join('')
          : '<div class="ide-item ide-empty">无节点</div>';
        box.querySelectorAll('[data-line]').forEach((d) => d.addEventListener('click', () => {
          const line = Number(d.dataset.line);
          gotoLine(scriptEl(), line);
          // 联动：按行号找到流图节点并高亮
          const g = window.WorkspaceStore ? WorkspaceStore.get('flow') : null;
          const n = g && g.nodes ? g.nodes.find((x) => x.line === line) : null;
          if (window.WorkspaceStore) WorkspaceStore.set('selectedNode', n ? n.id : null);
        }));
      };
      if (scriptEl()) scriptEl().addEventListener('input', debounce(refresh, 500));
      refresh();
    },
  };

  /* ---------- 面板 2：参数表 ---------- */
  const piPanel = {
    title: '参数表',
    render(el) {
      el.innerHTML =
        '<div class="ide-hint">检查脚本参数是否在 .pi 登记</div>' +
        '<div class="ide-list" id="ide-pi-list"></div>' +
        '<div class="plug-row" style="margin-top:8px">' +
        '  <button class="ws-btn ws-btn-small" id="ide-pi-fill">补齐缺失</button>' +
        '  <button class="ws-btn ws-btn-small" id="ide-pi-prune">清理未用</button>' +
        '</div>';
      const box = el.querySelector('#ide-pi-list');
      const refresh = async () => {
        const r = await safe(() => QAPluginHost.call('pi-helper', 'check', { lan: scriptEl() ? scriptEl().value : '', pi: piEl() ? piEl().value : '' }), null);
        if (!r) { box.innerHTML = '<div class="ide-item ide-empty">插件不可用</div>'; return; }
        const rows = [
          ...r.missing.map((p) => `<div class="ide-item"><b>${p}</b><span>缺失</span></div>`),
          ...r.unused.map((p) => `<div class="ide-item"><b>${p}</b><span>未使用</span></div>`),
        ];
        box.innerHTML = rows.length ? rows.join('') : '<div class="ide-item ide-empty">全部匹配 ✓</div>';
      };
      el.querySelector('#ide-pi-fill').addEventListener('click', async () => {
        const r = await safe(() => QAPluginHost.call('pi-helper', 'fill', { lan: scriptEl() ? scriptEl().value : '', pi: piEl() ? piEl().value : '' }), null);
        if (!r) return;
        if (!r.added.length) { QAPluginHost.status('没有缺失参数'); return; }
        if (piEl()) { piEl().value = r.pi; piEl().dispatchEvent(new Event('input')); }
        QAPluginHost.status('已补齐 ' + r.added.length + ' 行');
        refresh();
      });
      el.querySelector('#ide-pi-prune').addEventListener('click', async () => {
        const r = await safe(() => QAPluginHost.call('pi-helper', 'prune', { lan: scriptEl() ? scriptEl().value : '', pi: piEl() ? piEl().value : '' }), null);
        if (!r) return;
        if (piEl()) { piEl().value = r.pi; piEl().dispatchEvent(new Event('input')); }
        QAPluginHost.status('已清理 ' + r.removed.length + ' 个未用参数');
        refresh();
      });
      if (scriptEl()) scriptEl().addEventListener('input', debounce(refresh, 600));
      if (piEl()) piEl().addEventListener('input', debounce(refresh, 600));
      refresh();
    },
  };

  /* ---------- 面板 3：片段 ---------- */
  const snippetsPanel = {
    title: '片段',
    render(el) {
      el.innerHTML = '<div class="ide-hint">点击插入到脚本光标处</div><div class="ide-list" id="ide-snips"></div>';
      const box = el.querySelector('#ide-snips');
      safe(() => QAPluginHost.call('snippets', 'list', {}), null).then(async (r) => {
        if (!r) { box.innerHTML = '<div class="ide-item ide-empty">插件不可用</div>'; return; }
        box.innerHTML = r.snippets.map((s) => `<div class="ide-item" data-id="${s.id}"><b>${s.title}</b><span>${s.desc}</span></div>`).join('');
        box.querySelectorAll('[data-id]').forEach((d) => d.addEventListener('click', async () => {
          const s = await safe(() => QAPluginHost.call('snippets', 'get', { id: d.dataset.id }), null);
          if (s) { insertTo(scriptEl(), s.lan); QAPluginHost.status('已插入：' + s.title); }
        }));
      });
    },
  };

  /* ---------- 面板 3.5：版本对比 ---------- */
  const versionPanel = {
    title: '版本',
    render(el) {
      el.innerHTML =
        '<div class="plug-row"><input class="plug-input" id="ide-ver-name" placeholder="快照名（可空）" /><button class="ws-btn ws-btn-small" id="ide-ver-save">保存</button></div>' +
        '<div class="ide-list" id="ide-ver-list"></div>' +
        '<div class="sd-lines" id="ide-ver-diff" hidden></div>';
      const list = el.querySelector('#ide-ver-list');
      const diffBox = el.querySelector('#ide-ver-diff');

      const refresh = async () => {
        const r = await safe(() => QAPluginHost.call('script-diff', 'list', {}), null);
        if (!r) { list.innerHTML = '<div class="ide-item ide-empty">插件不可用</div>'; return; }
        list.innerHTML = r.snapshots.length
          ? r.snapshots.map((s) => `<div class="ide-item" data-id="${s.id}"><b>${esc(s.name)}</b><span>${s.lanLines} 行</span></div>`).join('')
          : '<div class="ide-item ide-empty">尚无快照</div>';
        list.querySelectorAll('[data-id]').forEach((d) => d.addEventListener('click', () => showDiff(d.dataset.id)));
      };

      const showDiff = async (id) => {
        const r = await safe(() => QAPluginHost.call('script-diff', 'diff', { id, lan: scriptEl() ? scriptEl().value : '', pi: piEl() ? piEl().value : '' }), null);
        if (!r) return;
        diffBox.hidden = false;
        diffBox.innerHTML =
          `<div class="sd-stat">「${esc(r.name)}」 .lan +${r.lan.stat.add}/−${r.lan.stat.del}；.pi +${r.pi.stat.add}/−${r.pi.stat.del}</div>` +
          r.lan.ops.map((o) => `<div class="sd-line sd-${o.type}"><span class="sd-sign">${o.type === 'add' ? '+' : o.type === 'del' ? '−' : ' '}</span>${esc(o.text) || ' '}</div>`).join('');
        QAPluginHost.status('已对比：' + r.name);
      };

      el.querySelector('#ide-ver-save').addEventListener('click', async () => {
        const name = el.querySelector('#ide-ver-name').value.trim();
        const r = await safe(() => QAPluginHost.call('script-diff', 'save', { name, lan: scriptEl() ? scriptEl().value : '', pi: piEl() ? piEl().value : '' }), null);
        if (r) { QAPluginHost.status('已保存快照：' + r.name); el.querySelector('#ide-ver-name').value = ''; refresh(); }
      });
      refresh();
    },
  };

  /* ---------- 面板 4：映射库 ---------- */
  const maplibPanel = {
    title: '映射库',
    render(el) {
      el.innerHTML =
        '<div class="plug-row"><input class="plug-input" id="ide-map-q" placeholder="搜索映射名 / 定义域 / 值域" /><button class="ws-btn ws-btn-small" id="ide-map-go">搜</button></div>' +
        '<div class="ide-list" id="ide-map-list"></div>';
      const box = el.querySelector('#ide-map-list');
      const run = async () => {
        const q = el.querySelector('#ide-map-q').value.trim();
        const r = await safe(() => QAPluginHost.call('maplib', 'search', { q, limit: 60 }), null);
        if (!r) { box.innerHTML = '<div class="ide-item ide-empty">插件不可用</div>'; return; }
        box.innerHTML = r.results.length
          ? r.results.map((x) => `<div class="ide-item" data-name="${x.name}"><b>${x.name}</b><span>${x.domain} → ${x.range}</span></div>`).join('')
          : '<div class="ide-item ide-empty">无匹配</div>';
        box.querySelectorAll('[data-name]').forEach((d) => d.addEventListener('click', async () => {
          const n = await safe(() => QAPluginHost.call('maplib', 'node', { name: d.dataset.name }), null);
          if (n) { insertTo(scriptEl(), n.lan); QAPluginHost.status('已插入节点：' + n.name + '（请替换参数占位）'); }
        }));
      };
      el.querySelector('#ide-map-go').addEventListener('click', run);
      el.querySelector('#ide-map-q').addEventListener('keydown', (e) => { if (e.key === 'Enter') run(); });
      run();
    },
  };

  /* ---------- 面板 5：知识库 ---------- */
  const kbasePanel = {
    title: '知识库',
    render(el) {
      el.innerHTML =
        '<div class="plug-row"><input class="plug-input" id="ide-kb-q" placeholder="搜索知识域" /><button class="ws-btn ws-btn-small" id="ide-kb-go">搜</button></div>' +
        '<div class="ide-stat" id="ide-kb-stat"></div><div class="ide-list" id="ide-kb-list"></div>';
      const list = el.querySelector('#ide-kb-list');
      safe(() => QAPluginHost.call('kbase-manager', 'stats', {}), null).then((s) => {
        if (s) el.querySelector('#ide-kb-stat').textContent = `单元 ${s.units} · 知识域 ${s.notes} · 双链 ${s.links}`;
      });
      const run = async () => {
        const q = el.querySelector('#ide-kb-q').value.trim();
        const r = await safe(() => QAPluginHost.call('kbase-manager', 'search', { q }), null);
        if (!r) { list.innerHTML = '<div class="ide-item ide-empty">插件不可用</div>'; return; }
        list.innerHTML = r.results.length
          ? r.results.map((x) => `<div class="ide-item"><b>${x.title}</b><span>${x.snippet || x.file}</span></div>`).join('')
          : '<div class="ide-item ide-empty">无匹配</div>';
      };
      el.querySelector('#ide-kb-go').addEventListener('click', run);
      el.querySelector('#ide-kb-q').addEventListener('keydown', (e) => { if (e.key === 'Enter') run(); });
    },
  };

  /* ---------- 面板 6：文档 ---------- */
  const docsPanel = {
    title: '文档',
    render(el) {
      el.innerHTML =
        '<div class="plug-row"><input class="plug-input" id="ide-doc-q" placeholder="搜索内核文档（标题/正文）" /><button class="ws-btn ws-btn-small" id="ide-doc-go">搜</button></div>' +
        '<div class="ide-list" id="ide-doc-list"></div>';
      const list = el.querySelector('#ide-doc-list');
      const run = async () => {
        const q = el.querySelector('#ide-doc-q').value.trim();
        const r = await safe(() => QAPluginHost.call('docs-index', 'search', { q, limit: 40 }), null);
        if (!r) { list.innerHTML = '<div class="ide-item ide-empty">插件不可用</div>'; return; }
        list.innerHTML = r.results.length
          ? r.results.map((x) => `<div class="ide-item"><b>${x.title}</b><span>${x.file}</span></div>`).join('')
          : '<div class="ide-item ide-empty">无匹配</div>';
      };
      el.querySelector('#ide-doc-go').addEventListener('click', run);
      el.querySelector('#ide-doc-q').addEventListener('keydown', (e) => { if (e.key === 'Enter') run(); });
    },
  };

  /* ---------- 面板 7：知识条目 ---------- */
  const kwPanel = {
    title: '知识条目',
    render(el) {
      el.innerHTML =
        '<div class="plug-row"><input class="plug-input" id="ide-kw-title" placeholder="条目标题" /></div>' +
        '<textarea class="intent-textarea intent-textarea-sm" id="ide-kw-body" placeholder="正文（Markdown）"></textarea>' +
        '<div class="plug-row" style="margin-top:6px"><button class="ws-btn ws-btn-small" id="ide-kw-save">保存</button><button class="ws-btn ws-btn-small" id="ide-kw-refresh">刷新</button></div>' +
        '<div class="ide-list" id="ide-kw-list"></div>';
      const list = el.querySelector('#ide-kw-list');
      const refresh = async () => {
        const r = await safe(() => QAPluginHost.call('kbase-write', 'list', {}), null);
        if (!r) { list.innerHTML = '<div class="ide-item ide-empty">插件不可用</div>'; return; }
        list.innerHTML = r.items.length
          ? r.items.map((it) => `<div class="ide-item" data-id="${it.id}"><b>${esc(it.title)}</b><span>${(it.tags || []).join('、') || '—'}</span></div>`).join('')
          : '<div class="ide-item ide-empty">尚无条目</div>';
        list.querySelectorAll('[data-id]').forEach((d) => d.addEventListener('click', async () => {
          const g = await safe(() => QAPluginHost.call('kbase-write', 'get', { id: d.dataset.id }), null);
          if (!g) return;
          el.querySelector('#ide-kw-title').value = g.item.title;
          el.querySelector('#ide-kw-body').value = g.content.replace(/^#\s*.+\n/, '').replace(/标签：.+\n/, '').trim();
          QAPluginHost.status('已加载：' + g.item.title);
        }));
      };
      el.querySelector('#ide-kw-save').addEventListener('click', async () => {
        const title = el.querySelector('#ide-kw-title').value.trim();
        if (!title) { QAPluginHost.status('请填写标题'); return; }
        const r = await safe(() => QAPluginHost.call('kbase-write', 'save', { title, content: el.querySelector('#ide-kw-body').value, tags: [] }), null);
        if (r) { QAPluginHost.status('已保存：' + r.item.title); refresh(); }
      });
      el.querySelector('#ide-kw-refresh').addEventListener('click', refresh);
      refresh();
    },
  };

  /* ---------- 面板 8：方案推演 ---------- */
  const runnerPanel = {
    title: '方案推演',
    render(el) {
      el.innerHTML =
        '<button class="ws-btn ws-btn-small ws-btn-accent" id="ide-run-go">推演当前脚本</button>' +
        '<div class="ide-list" id="ide-run-list" style="margin-top:8px"></div>' +
        '<pre class="plug-out" id="ide-run-out" hidden></pre>';
      const list = el.querySelector('#ide-run-list');
      const run = async () => {
        const r = await safe(() => QAPluginHost.call('script-runner', 'run', { lan: scriptEl() ? scriptEl().value : '' }), null);
        if (!r) { list.innerHTML = '<div class="ide-item ide-empty">插件不可用</div>'; return; }
        list.innerHTML = r.trace.length
          ? r.trace.map((t) => `<div class="ide-item"><b>#${t.step}</b><span>L${t.layer} ${esc(t.node)} · ${esc(t.action)}</span></div>`).join('')
          : '<div class="ide-item ide-empty">无可执行节点</div>';
        const out = el.querySelector('#ide-run-out');
        if (r.blocked.length) { out.hidden = false; out.textContent = '阻塞：\n' + r.blocked.map((x) => `- ${x.label}：${x.reason}`).join('\n'); }
        else out.hidden = true;
        QAPluginHost.status(r.ok ? '推演完成：无阻塞' : `推演完成：${r.blocked.length} 个阻塞`);
      };
      el.querySelector('#ide-run-go').addEventListener('click', run);
      run();
    },
  };

  /* ---------- 面板 9：能力索引 ---------- */
  const capPanel = {
    title: '能力索引',
    render(el) {
      el.innerHTML =
        '<div class="plug-row"><input class="plug-input" id="ide-cap-q" placeholder="搜索能力（映射/插件/技能/文档）" /><button class="ws-btn ws-btn-small" id="ide-cap-go">搜</button></div>' +
        '<div class="ide-stat" id="ide-cap-stat"></div><div class="ide-list" id="ide-cap-list"></div>';
      const list = el.querySelector('#ide-cap-list');
      const run = async () => {
        const q = el.querySelector('#ide-cap-q').value.trim();
        const r = await safe(() => QAPluginHost.call('capability-index', 'search', { q, limit: 40 }), null);
        if (!r) { list.innerHTML = '<div class="ide-item ide-empty">插件不可用</div>'; return; }
        el.querySelector('#ide-cap-stat').textContent = `插件 ${r.summary.plugins} · 技能 ${r.summary.skills} · 映射 ${r.summary.maps}`;
        list.innerHTML = r.results.length
          ? r.results.map((x) => `<div class="ide-item"><b>${esc(x.title)}</b><span>${esc(x.type)} · ${esc(x.desc)}</span></div>`).join('')
          : '<div class="ide-item ide-empty">无匹配</div>';
      };
      el.querySelector('#ide-cap-go').addEventListener('click', run);
      el.querySelector('#ide-cap-q').addEventListener('keydown', (e) => { if (e.key === 'Enter') run(); });
      run();
    },
  };

  /* ---------- 工作区标签页：问答流图 ---------- */
  let flowReady = false;

  function redrawFlow() {
    const canvas = document.querySelector('#ide-flow-canvas');
    const g = window.WorkspaceStore ? WorkspaceStore.get('flow') : null;
    if (!canvas || !g) return;
    canvas.height = Math.max(320, 60 + g.graphs.reduce((s, x) => s + x.layers.length * 58, 0));
    if (window.FlowDraw) window.FlowDraw.draw(canvas, g, { highlightId: WorkspaceStore.get('selectedNode') });
    const stat = document.querySelector('#ide-flow-stat');
    if (stat) stat.textContent = `${g.graphs.length} 图 · ${g.nodeCount} 节点 · ${g.edgeCount} 边`;
  }

  async function drawFlow() {
    const canvas = document.querySelector('#ide-flow-canvas');
    if (!canvas) return;
    const g = await safe(() => QAPluginHost.call('flow-preview', 'graph', { lan: scriptEl() ? scriptEl().value : '' }), null);
    if (!g) return;
    if (window.WorkspaceStore) WorkspaceStore.set('flow', g);
    redrawFlow();
  }

  function ensureFlow() {
    const root = document.querySelector('#flow-root');
    if (!root) return;
    if (!flowReady) {
      flowReady = true;
      root.innerHTML =
        '<div class="plug-row"><button class="ws-btn ws-btn-small" id="ide-flow-refresh">重新解析</button><span class="ide-hint" id="ide-flow-stat">—</span></div>' +
        '<canvas id="ide-flow-canvas" width="900" height="460" class="plug-canvas"></canvas>';
      root.querySelector('#ide-flow-refresh').addEventListener('click', drawFlow);
    }
    drawFlow();
  }

  window.addEventListener('qa-tab-open', (e) => { if (e.detail === 'flow') ensureFlow(); });

  /* ---------- 状态栏联动 ---------- */
  function updateStatus() {
    if (!window.WorkspaceStore) return;
    const s = WorkspaceStore.get();
    const total = (s.validation || []).length;
    const errs = (s.validation || []).filter((x) => x.level === 'error').length;
    const nodes = s.flow ? s.flow.nodeCount : 0;
    if (window.Workbench) Workbench.setStatus(`流图节点 ${nodes} · 问题 ${errs}/${total} · 版本 ${s.versionCount || 0} · ${s.status || '就绪'}`);
  }

  function registerAll() {
    if (!window.Workbench || !window.QAPluginHost) return;
    Workbench.register({ id: 'edit', label: '编辑', icon: '✎', panels: [outlinePanel, piPanel, snippetsPanel, versionPanel, runnerPanel] });
    Workbench.register({ id: 'lib', label: '库', icon: '▤', panels: [maplibPanel, kbasePanel] });
    Workbench.register({ id: 'doc', label: '文档', icon: '❏', panels: [docsPanel, kwPanel, capPanel] });

    if (window.WorkspaceStore) {
      WorkspaceStore.subscribe('flow', redrawFlow);
      WorkspaceStore.subscribe('selectedNode', redrawFlow);
      WorkspaceStore.subscribe('*', updateStatus);
      updateStatus();
    }
  }

  window.IDEPanels = { registerAll };
})();
