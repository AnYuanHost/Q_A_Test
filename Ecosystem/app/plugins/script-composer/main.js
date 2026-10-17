/**
 * 文档驱动生成（Node 侧）
 *
 * 依赖 `server/doc-index.js`：
 *   suggest(need)       需求 → 映射候选（加权）
 *   compose(name)       映射 → 四段节点 + .pi（参数元数/类型由定义域/值域集合推断）
 *   composeByNeed(need) 需求 → 最佳映射 → 脚本
 */
'use strict';

const docIndex = require('../../server/doc-index.js');
const engine = require('../../web/js/lan-toolkit.js');

module.exports = {
  activate() {
    return {
      commands: {
        async stats() {
          const idx = docIndex.index();
          return { totals: idx.totals, topProjects: idx.projects.slice(0, 8) };
        },

        async suggest({ need, limit } = {}) {
          return { need: String(need || ''), candidates: docIndex.suggest(need, limit) };
        },

        async compose({ name } = {}) {
          const c = docIndex.compose(name);
          const issues = engine.validate(`{\n}\n{\n${c.lan}}`, c.pi.join('\n'));
          return Object.assign(c, { validation: issues });
        },

        /** 需求 → 最佳映射 → 脚本（含候选与校验） */
        async composeByNeed({ need, limit } = {}) {
          const candidates = docIndex.suggest(need, limit || 8);
          if (!candidates.length) {
            const e = new Error('未找到匹配映射：' + need); e.code = 404; throw e;
          }
          const top = candidates[0];
          const c = docIndex.compose(top.name);
          const issues = engine.validate(`{\n}\n{\n${c.lan}}`, c.pi.join('\n'));
          return Object.assign(c, { candidates, validation: issues, need: String(need || '') });
        },
      },
    };
  },
};
