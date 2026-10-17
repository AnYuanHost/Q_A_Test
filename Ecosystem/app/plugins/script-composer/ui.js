/**
 * 文档驱动生成（前端侧）：输入需求 → 推荐映射 → 生成节点/.pi → 插入工作区
 */
(function () {
  'use strict';

  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  window.QAPluginHost.registerUI('script-composer', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row">' +
      '  <input class="plug-input" id="sc-need" placeholder="需求，例如：无符号整数相加 / 新建元素 / 读取文件" />' +
      '  <button class="ws-btn ws-btn-small ws-btn-accent" id="sc-go">生成</button>' +
      '</div>' +
      '<div class="ide-stat" id="sc-stat"></div>' +
      '<div class="plug-list" id="sc-cands"></div>' +
      '<pre class="plug-out" id="sc-out" hidden></pre>';

    let current = null;

    async function generate(need) {
      try {
        const r = await host.call('script-composer', 'composeByNeed', { need });
        current = r;
        el.querySelector('#sc-stat').textContent = `索引映射 ${r.candidates.length ? (await host.call('script-composer', 'stats', {})).totals.maps : 0} 个 · 匹配 ${r.candidates.length} 个`;
        el.querySelector('#sc-cands').innerHTML = r.candidates.map((c, i) =>
          `<div class="plug-item" data-name="${c.name}"><b>${i === 0 ? '★ ' : ''}${esc(c.name)}</b><span>${esc(c.domain)} → ${esc(c.range)} · 分数 ${c.score}</span></div>`
        ).join('');
        el.querySelectorAll('#sc-cands [data-name]').forEach((d) => d.addEventListener('click', async () => {
          const c = await host.call('script-composer', 'compose', { name: d.dataset.name });
          current = Object.assign({}, c, { candidates: r.candidates });
          show(current);
        }));
        show(r);
        host.status('已生成：' + r.name);
      } catch (e) { host.status('生成失败：' + e.message); }
    }

    function show(r) {
      const out = el.querySelector('#sc-out');
      out.hidden = false;
      out.textContent =
        `# 映射 ${r.name}（${r.domain} → ${r.range}）\n\n` +
        r.lan +
        `\n# .pi 追加\n` + r.pi.join('\n') +
        (r.validation && r.validation.length ? `\n\n# 校验提示\n` + r.validation.map((x) => `- L${x.line || '—'} ${x.message}`).join('\n') : '\n\n# 校验：无问题');
      if (window.WorkspaceActions) {
        // 直接写入工作区（脚本 + 参数表），并触发校验/流图
        window.WorkspaceActions.insertScript(r.lan);
        const pi = document.querySelector('#ws-pi');
        if (pi) {
          pi.value = (pi.value.replace(/\s+$/, '') + '\n' + r.pi.join('\n') + '\n').trimStart();
          pi.dispatchEvent(new Event('input'));
        }
        window.WorkspaceActions.validate();
        window.WorkspaceActions.refreshFlow();
      }
    }

    el.querySelector('#sc-go').addEventListener('click', () => {
      const need = el.querySelector('#sc-need').value.trim();
      if (!need) { host.status('请输入需求'); return; }
      generate(need);
    });
    el.querySelector('#sc-need').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { const v = e.target.value.trim(); if (v) generate(v); }
    });

    return { title: '需求生成', element: el };
  });
})();
