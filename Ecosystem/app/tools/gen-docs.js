/**
 * 文档工程生成器
 *
 * 产出：
 *   app/docs/文档索引.md    —— 按项目/模块列出映射（名称、定义域、值域、文档）
 *   app/docs/能力目录.md    —— 插件 / 技能 / 文档 / 映射 的统一能力清单
 *
 * 用法：node app/tools/gen-docs.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const DOCS = path.join(ROOT, 'app', 'docs');
const docIndex = require(path.join(ROOT, 'app', 'server', 'doc-index.js'));

function loadPlugins() {
  const dir = path.join(ROOT, 'app', 'plugins');
  const out = [];
  let entries = [];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    if (!e.isDirectory() || e.name.startsWith('_')) continue;
    try {
      const m = JSON.parse(fs.readFileSync(path.join(dir, e.name, 'plugin.json'), 'utf8'));
      out.push(m);
    } catch { /* ignore */ }
  }
  return out.sort((a, b) => a.id.localeCompare(b.id));
}

function loadSkills() {
  const dir = path.join(ROOT, '.opencode', 'skill');
  const out = [];
  let entries = [];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    try {
      const text = fs.readFileSync(path.join(dir, e.name, 'SKILL.md'), 'utf8');
      out.push({
        name: ((/^name:\s*(.+)$/m.exec(text) || [])[1] || e.name).trim(),
        desc: ((/^description:\s*(.+)$/m.exec(text) || [])[1] || '').trim(),
      });
    } catch { /* ignore */ }
  }
  return out;
}

function buildDocIndex() {
  const idx = docIndex.index();
  const byProject = new Map();
  for (const m of idx.maps) {
    if (!byProject.has(m.project)) byProject.set(m.project, []);
    byProject.get(m.project).push(m);
  }

  const lines = [];
  lines.push('# 内核文档索引（自动生成）');
  lines.push('');
  lines.push('> 由 `app/tools/gen-docs.js` 从 `Q_A_Test-master/Doc/MD` 生成；按项目/模块列出映射定义。');
  lines.push('> 用途：查映射、看定义域/值域、给 AI 选映射提供依据。');
  lines.push('');
  lines.push(`统计：**${idx.totals.maps}** 个映射 · **${idx.totals.docs}** 篇文档 · **${idx.totals.projects}** 个项目 · 生成于 ${idx.generatedAt}`);
  lines.push('');
  lines.push('---');
  lines.push('');

  const projects = [...byProject.keys()].sort((a, b) => byProject.get(b).length - byProject.get(a).length);
  for (const p of projects) {
    const maps = byProject.get(p).sort((a, b) => a.name.localeCompare(b.name));
    lines.push(`## ${p}（${maps.length} 个映射）`);
    lines.push('');
    lines.push('| 映射 | 定义域 | 值域 | 文档 |');
    lines.push('|---|---|---|---|');
    for (const m of maps) lines.push(`| \`${m.name}\` | ${m.domain} | ${m.range} | ${m.file} |`);
    lines.push('');
  }
  return lines.join('\n');
}

function buildCapabilityCatalog() {
  const idx = docIndex.index();
  const plugins = loadPlugins();
  const skills = loadSkills();

  const lines = [];
  lines.push('# 能力目录（自动生成）');
  lines.push('');
  lines.push('> 回答"做某件事该用什么"：插件（能做什么）、技能（怎么做）、文档（查哪里）、映射（脚本里写什么）。');
  lines.push('> 由 `app/tools/gen-docs.js` 生成。');
  lines.push('');
  lines.push(`统计：**${plugins.length}** 个插件 · **${skills.length}** 个技能 · **${idx.totals.maps}** 个映射 · **${idx.totals.docs}** 篇文档`);
  lines.push('');
  lines.push('---');
  lines.push('');

  lines.push('## 插件');
  lines.push('');
  lines.push('| ID | 名称 | 能力 | 命令 |');
  lines.push('|---|---|---|---|');
  for (const p of plugins) {
    const cmds = ((p.contributes && p.contributes.commands) || []).map((c) => c.id).join(', ');
    lines.push(`| \`${p.id}\` | ${p.name} | ${p.description || ''} | ${cmds || '—'} |`);
  }
  lines.push('');

  lines.push('## 技能（.opencode/skill）');
  lines.push('');
  lines.push('| 技能 | 用途 |');
  lines.push('|---|---|');
  for (const s of skills) lines.push(`| \`${s.name}\` | ${s.desc} |`);
  lines.push('');

  lines.push('## 文档项目');
  lines.push('');
  lines.push('| 项目 | 文档数 | 映射数 |');
  lines.push('|---|---|---|');
  for (const p of idx.projects) lines.push(`| ${p.name} | ${p.docs} | ${p.maps} |`);
  lines.push('');

  return lines.join('\n');
}

function main() {
  fs.mkdirSync(DOCS, { recursive: true });
  const a = path.join(DOCS, '文档索引.md');
  const b = path.join(DOCS, '能力目录.md');
  fs.writeFileSync(a, buildDocIndex(), 'utf8');
  fs.writeFileSync(b, buildCapabilityCatalog(), 'utf8');
  console.log('[gen-docs] 已生成');
  console.log('  ' + path.relative(ROOT, a));
  console.log('  ' + path.relative(ROOT, b));
}

if (require.main === module) main();
module.exports = { buildDocIndex, buildCapabilityCatalog };
