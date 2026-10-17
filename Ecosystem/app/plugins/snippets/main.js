/**
 * 片段库插件：内置常用节点/整段模板 + 用户自定义片段（持久化在 ctx.state）。
 */
'use strict';

const BUILTIN = [
  {
    id: 'new-uint', title: '新建 UInt 元素', desc: 'NewUIntElement（初值 0）',
    lan: '    NewUIntElement\n    EmptyElement\n    UIntA\n    TraUntractable\n',
  },
  {
    id: 'successor', title: '自增（后继）', desc: 'UIntSuccessor：值域 = 定义域 + 1',
    lan: '    UIntSuccessor\n    UIntA\n    UIntA\n    TraUntractable\n',
  },
  {
    id: 'add', title: '无符号整数相加', desc: 'UIntAdd：定义域为序偶',
    lan: '    UIntAdd\n    ( UIntA UIntB )\n    UIntC\n    TraUntractable\n',
  },
  {
    id: 'release', title: '释放元素', desc: 'ReleaseElement',
    lan: '    ReleaseElement\n    EmptyElement\n    UIntA\n    TraUntractable\n',
  },
  {
    id: 'parallel', title: '并行块模板', desc: '两个互不依赖的节点并行',
    lan: '    [\n\n        WorkA\n        EmptyElement\n        ResultA\n        TraUntractable\n\n    ][\n\n        WorkB\n        EmptyElement\n        ResultB\n        TraUntractable\n\n    ]\n',
  },
  {
    id: 'pipeline', title: '完整流水线（建→自增→求和→释放）', desc: '可直接放进后图',
    lan: '    [\n        NewUIntElement\n        EmptyElement\n        UIntA\n        Tractable\n\n        UIntSuccessor\n        UIntA\n        UIntA\n        TraUntractable\n    ][\n        NewUIntElement\n        EmptyElement\n        UIntB\n        Tractable\n    ]\n\n    UIntAdd\n    ( UIntA UIntB )\n    UIntC\n    TraUntractable\n\n    [\n        ReleaseElement\n        EmptyElement\n        UIntA\n        TraUntractable\n    ][\n        ReleaseElement\n        EmptyElement\n        UIntB\n        TraUntractable\n    ][\n        ReleaseElement\n        EmptyElement\n        UIntC\n        TraUntractable\n    ]\n',
  },
];

module.exports = {
  activate(ctx) {
    const custom = () => Array.isArray(ctx.state.custom) ? ctx.state.custom : [];
    const all = () => BUILTIN.concat(custom());

    return {
      commands: {
        async list() { return { snippets: all().map((s) => ({ id: s.id, title: s.title, desc: s.desc, custom: !!s.custom })) }; },
        async get({ id } = {}) {
          const s = all().find((x) => x.id === id);
          if (!s) { const e = new Error('片段不存在：' + id); e.code = 404; throw e; }
          return { id: s.id, title: s.title, lan: s.lan };
        },
        async save({ id, title, lan } = {}) {
          if (!id || !lan) { const e = new Error('需要 id 与 lan'); e.code = 400; throw e; }
          const list = custom().filter((s) => s.id !== id);
          list.push({ id, title: title || id, desc: '自定义', lan, custom: true });
          ctx.state = Object.assign({}, ctx.state, { custom: list });
          ctx.emit('changed', list);
          return { snippets: all().map((s) => ({ id: s.id, title: s.title, desc: s.desc, custom: !!s.custom })) };
        },
        async remove({ id } = {}) {
          const list = custom().filter((s) => s.id !== id);
          ctx.state = Object.assign({}, ctx.state, { custom: list });
          ctx.emit('changed', list);
          return { ok: true };
        },
      },
    };
  },
};
