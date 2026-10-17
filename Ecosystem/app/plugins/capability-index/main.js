/**
 * 能力索引（Capability Index）
 *
 * 回答"没有文档 AI 不知道该用什么"：把
 *   - 插件（id/名称/描述/命令）
 *   - 技能（.opencode/skill/* 的 name/description）
 *   - 内核文档（Doc/MD 项目分类与数量）
 *   - 映射（Map 定义数量）
 * 汇总为一份可搜索目录。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const APP = path.join(__dirname, '..', '..');
const ROOT = path.join(APP, '..');
const PLUGINS = path.join(APP, 'plugins');
const SKILLS = path.join(ROOT, '.opencode', 'skill');
const DOC = path.join(ROOT, 'Q_A_Test-master', 'Doc', 'MD');

let _cache = null;

function readPlugins() {
  const out = [];
  let dirs = [];
  try { dirs = fs.readdirSync(PLUGINS, { withFileTypes: true }).filter((e) => e.isDirectory() && !e.name.startsWith('_')).map((e) => e.name); } catch { return out; }
  for (const d of dirs) {
    try {
      const m = JSON.parse(fs.readFileSync(path.join(PLUGINS, d, 'plugin.json'), 'utf8'));
      out.push({
        type: '插件', id: m.id || d, title: m.name || d,
        desc: m.description || '', where: 'app/plugins/' + d,
        commands: ((m.contributes && m.contributes.commands) || []).map((c) => c.title || c.id),
      });
    } catch { /* ignore */ }
  }
  return out.sort((a, b) => a.id.localeCompare(b.id));
}

function readSkills() {
  const out = [];
  let dirs = [];
  try { dirs = fs.readdirSync(SKILLS, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name); } catch { return out; }
  for (const d of dirs) {
    try {
      const text = fs.readFileSync(path.join(SKILLS, d, 'SKILL.md'), 'utf8');
      const name = (/^name:\s*(.+)$/m.exec(text) || [])[1] || d;
      const desc = (/^description:\s*(.+)$/m.exec(text) || [])[1] || '';
      out.push({ type: '技能', id: name.trim(), title: name.trim(), desc: desc.trim(), where: '.opencode/skill/' + d });
    } catch { /* ignore */ }
  }
  return out;
}

function readDocs() {
  const out = [];
  let entries = [];
  try { entries = fs.readdirSync(DOC, { withFileTypes: true }); } catch { return out; }
  const lib = entries.find((e) => e.name === 'Lib_Introduce');
  if (lib) {
    let projects = [];
    try { projects = fs.readdirSync(path.join(DOC, 'Lib_Introduce'), { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name); } catch { /* ignore */ }
    for (const p of projects) {
      let n = 0;
      try { n = fs.readdirSync(path.join(DOC, 'Lib_Introduce', p), { recursive: true, withFileTypes: true }).filter((e) => e.isFile() && e.name.endsWith('.md')).length; } catch { /* ignore */ }
      out.push({ type: '文档', id: p, title: p, desc: `${n} 篇手册`, where: 'Doc/MD/Lib_Introduce/' + p });
    }
  }
  return out;
}

function countMaps() {
  let n = 0;
  const walk = (dir) => {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) { walk(p); continue; }
      if (!e.name.endsWith('.md')) continue;
      try {
        const t = fs.readFileSync(p, 'utf8');
        n += (t.match(/^\s*Map\s+[A-Za-z_]\w*\s*\(/gm) || []).length;
      } catch { /* ignore */ }
    }
  };
  walk(DOC);
  return n;
}

function catalog() {
  if (_cache) return _cache;
  const plugins = readPlugins();
  const skills = readSkills();
  const docs = readDocs();
  const maps = countMaps();
  _cache = {
    plugins, skills, docs,
    summary: {
      plugins: plugins.length,
      skills: skills.length,
      docProjects: docs.length,
      maps,
      generatedAt: new Date().toISOString(),
    },
  };
  return _cache;
}

module.exports = {
  activate() {
    return {
      commands: {
        async catalog() { return catalog(); },
        async search({ q, limit } = {}) {
          const c = catalog();
          const entries = [...c.plugins, ...c.skills, ...c.docs];
          const k = String(q || '').trim().toLowerCase();
          const hits = k
            ? entries.filter((e) => (e.title + ' ' + e.desc + ' ' + (e.commands || []).join(' ')).toLowerCase().includes(k))
            : entries;
          return { results: hits.slice(0, Number(limit) || 60), total: entries.length, summary: c.summary };
        },
      },
    };
  },
};
