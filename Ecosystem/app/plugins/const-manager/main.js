/**
 * 常数管理插件（Node 侧）
 *
 * 把"用常量要多个小知识库协作"这件事收敛成一次调用：
 *   define(name,value) → serialize() 得到内核可直接接受的节点序列 + .pi 行
 *   expand(lan)        → 用官方脚本引擎展开脚本中的 const 声明
 *
 * 引擎复用 `web/js/lan-toolkit.js`（UMD，与前端/插件同一实现）。
 */
'use strict';

const engine = require('../../web/js/lan-toolkit.js');

const NAME_RE = /^[A-Za-z_][A-Za-z0-9_]*$/;

module.exports = {
  activate(ctx) {
    const getList = () => Array.isArray(ctx.state.constants) ? ctx.state.constants : [];
    const setList = (list) => { ctx.state = Object.assign({}, ctx.state, { constants: list }); ctx.emit('changed', list); };

    /** 生成内核可接受的节点序列（不依赖外部脚本） */
    const serialize = () => {
      const blocks = [];
      const pi = [];
      for (const c of getList()) {
        const nodes = ['NewUIntElement', 'EmptyElement', c.name, 'TraUntractable'];
        for (let k = 0; k < c.value; k++) nodes.push('UIntSuccessor', c.name, c.name, 'TraUntractable');
        blocks.push(`    // ---- 常数 ${c.name} = ${c.value} ----\n` + nodes.map((t) => `    ${t}`).join('\n'));
        pi.push(`${c.name} ${c.type || 'UInt'} ${c.value} Unlimited Login`);
      }
      return { lan: blocks.join('\n\n'), pi, count: getList().length };
    };

    return {
      commands: {
        async list() { return { constants: getList() }; },

        async define({ name, value, type } = {}) {
          if (!NAME_RE.test(String(name || ''))) { const e = new Error('常数名非法（需以字母/下划线开头）'); e.code = 400; throw e; }
          const v = Number(value);
          if (!Number.isInteger(v) || v < 0) { const e = new Error('常数取值需为非负整数'); e.code = 400; throw e; }
          const list = getList().filter((c) => c.name !== name);
          list.push({ name, value: v, type: type || 'UInt' });
          list.sort((a, b) => a.name.localeCompare(b.name));
          setList(list);
          return { ok: true, constants: list };
        },

        async remove({ name } = {}) {
          setList(getList().filter((c) => c.name !== name));
          return { ok: true, constants: getList() };
        },

        /** 生成 const 声明片段 + 节点序列 + .pi 行 */
        async serialize() {
          const s = serialize();
          const decl = getList().map((c) => `    const ${c.name} = ${c.value};`).join('\n');
          return { declarations: decl, nodes: s.lan, pi: s.pi, count: s.count };
        },

        /** 用官方引擎展开传入脚本里的 const 声明（可叠加本插件的常数表） */
        async expand({ lan, withLibrary } = {}) {
          const decl = withLibrary ? getList().map((c) => `const ${c.name} = ${c.value};`).join('\n') : '';
          const src = [decl, String(lan || '')].filter((x) => x.trim()).join('\n');
          const r = engine.expandConstants(src);
          return { lan: r.lan, piExtra: r.piExtra, expanded: r.expanded, warnings: r.warnings };
        },
      },
    };
  },
};
