/**
 * 意向性网络插件（Node 侧）
 *
 * 数据模型（对应内核"意向性 = 序偶<质性, 质料>"）：
 *   object = { id, qingzhi(质性/名称), zhiliao(质料/内容), links:[目标id] }
 *   network = { objects:[...], updated }
 *
 * 存储：ctx.state（app/data/plugin-state/intentionality.json）。
 * 可从知识域（Obsidian 双链）导入为初始网络；导出为 JSON。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..', '..');
const OBS = path.join(ROOT, 'Q_A_Test-master', 'KRS', 'Data', 'Obsidian', 'Q_A');

const slug = (s) => String(s).replace(/[^\w\u4e00-\u9fa5-]+/g, '-').replace(/^-+|-+$/g, '') || 'object';

module.exports = {
  activate(ctx) {
    const get = () => (ctx.state && Array.isArray(ctx.state.objects)) ? ctx.state.objects : [];
    const set = (objects) => { ctx.state = Object.assign({}, ctx.state, { objects, updated: new Date().toISOString() }); ctx.emit('changed', { count: objects.length }); };

    return {
      commands: {
        async list() {
          return { objects: get().map((o) => ({ id: o.id, qingzhi: o.qingzhi, links: (o.links || []).length, size: (o.zhiliao || '').length })), count: get().length };
        },
        async get({ id } = {}) {
          const o = get().find((x) => x.id === id);
          if (!o) { const e = new Error('对象不存在：' + id); e.code = 404; throw e; }
          return o;
        },
        async upsert({ object } = {}) {
          const o = object || {};
          const id = o.id || slug(o.qingzhi || 'object');
          const list = get().filter((x) => x.id !== id);
          list.push({ id, qingzhi: o.qingzhi || id, zhiliao: o.zhiliao || '', links: Array.isArray(o.links) ? o.links : [] });
          set(list);
          return { ok: true, id };
        },
        async remove({ id } = {}) {
          set(get().filter((x) => x.id !== id).map((x) => ({ ...x, links: (x.links || []).filter((l) => l !== id) })));
          return { ok: true };
        },
        /** 从 Obsidian 知识域导入：每个 md = 一个意向性对象，[[双链]] = 边 */
        async importObsidian() {
          const objects = [];
          const walk = (dir) => {
            let entries = [];
            try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
            for (const e of entries) {
              const p = path.join(dir, e.name);
              if (e.isDirectory()) { walk(p); continue; }
              if (!e.name.endsWith('.md')) continue;
              let text = '';
              try { text = fs.readFileSync(p, 'utf8'); } catch { continue; }
              const title = (text.split(/\r?\n/).find((l) => l.trim().startsWith('#')) || '').replace(/^#+\s*/, '').trim() || path.basename(e.name, '.md');
              objects.push({ id: slug(path.relative(OBS, p).replace(/\\/g, '/')).replace(/\.md$/, ''), qingzhi: title, zhiliao: text, links: [] });
            }
          };
          walk(OBS);
          const byTitle = new Map(objects.map((o) => [o.qingzhi, o.id]));
          for (const o of objects) {
            o.links = [...o.zhiliao.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)]
              .map((m) => byTitle.get(m[1].trim())).filter(Boolean);
          }
          set(objects);
          return { ok: true, count: objects.length };
        },
        async graph() {
          const objs = get();
          const nodes = objs.map((o) => ({ id: o.id, title: o.qingzhi }));
          const edges = [];
          objs.forEach((o) => (o.links || []).forEach((l) => edges.push({ from: o.id, to: l })));
          return { nodes, edges, nodeCount: nodes.length, edgeCount: edges.length };
        },
        async export() {
          return { json: JSON.stringify({ objects: get() }, null, 2), count: get().length };
        },
      },
    };
  },
};
