/**
 * 只读文件服务（工作区资源管理器）
 *
 * 安全边界：
 *   - 仅允许两个作用域：`repo`（Q_A_Test-master）与 `app`（生态侧代码）
 *   - 路径归一化后必须落在作用域内（防穿越）
 *   - 只读；文本文件才允许读取（大小上限 512 KB）
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const SCOPES = {
  repo: path.join(ROOT, 'Q_A_Test-master'),
  app: path.join(ROOT, 'app'),
};

const TEXT_EXT = new Set(['.md', '.txt', '.lan', '.pi', '.json', '.js', '.mjs', '.cjs', '.ts', '.h', '.hpp', '.cpp', '.cc', '.c', '.ps1', '.css', '.html', '.yml', '.yaml', '.ini', '.gitignore']);
const SKIP = new Set(['.git', 'node_modules', '.vs', 'x64', 'x86', 'Debug', 'Release', '.vscode', 'plugin-state', 'knowledge']);
const MAX_READ = 512 * 1024;

function resolve(scope, rel) {
  const base = SCOPES[scope];
  if (!base) { const e = new Error('未知作用域：' + scope); e.code = 400; throw e; }
  const p = path.normalize(path.join(base, rel || ''));
  if (p !== base && !p.startsWith(base + path.sep)) { const e = new Error('路径越界'); e.code = 403; throw e; }
  return p;
}

function tree(scope, rel, depth) {
  const base = resolve(scope, rel);
  const maxDepth = Math.max(1, Math.min(Number(depth) || 3, 6));

  const walk = (dir, level) => {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return []; }
    const out = [];
    for (const e of entries) {
      if (SKIP.has(e.name)) continue;
      const p = path.join(dir, e.name);
      const r = path.relative(SCOPES[scope], p).replace(/\\/g, '/');
      if (e.isDirectory()) {
        out.push({ type: 'dir', name: e.name, path: r, children: level < maxDepth ? walk(p, level + 1) : null });
      } else {
        let size = 0; try { size = fs.statSync(p).size; } catch { /* ignore */ }
        out.push({ type: 'file', name: e.name, path: r, size, ext: path.extname(e.name).toLowerCase() });
      }
    }
    out.sort((a, b) => (a.type === b.type ? a.name.localeCompare(b.name, 'zh') : a.type === 'dir' ? -1 : 1));
    return out;
  };

  return { scope, root: rel || '', children: walk(base, 0) };
}

function read(scope, rel) {
  const p = resolve(scope, rel);
  const st = fs.statSync(p);
  if (!st.isFile()) { const e = new Error('不是文件'); e.code = 400; throw e; }
  if (st.size > MAX_READ) { const e = new Error(`文件过大（${st.size} B > ${MAX_READ} B）`); e.code = 413; throw e; }
  const ext = path.extname(p).toLowerCase();
  if (!TEXT_EXT.has(ext)) { const e = new Error('非文本文件：' + ext); e.code = 415; throw e; }
  return { path: rel, size: st.size, ext, text: fs.readFileSync(p, 'utf8') };
}

module.exports = { tree, read, SCOPES };
