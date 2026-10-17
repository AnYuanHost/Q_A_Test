/**
 * 文档同步检查（Node 侧）
 * 依赖本地 git 仓库（Q_A_Test-master），不主动联网。
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..', '..', '..');
const REPO = path.join(ROOT, 'Q_A_Test-master');
const DOC = path.join(REPO, 'Doc', 'MD');

function git(args) {
  try {
    return execFileSync('git', args, { cwd: REPO, encoding: 'utf8', timeout: 20000 }).trim();
  } catch (e) {
    return '';
  }
}

function countDocs() {
  let n = 0;
  const walk = (d) => {
    let es = [];
    try { es = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of es) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.md')) n++;
    }
  };
  walk(DOC);
  return n;
}

module.exports = {
  activate() {
    return {
      commands: {
        async status() {
          const branch = git(['rev-parse', '--abbrev-ref', 'HEAD']);
          const head = git(['log', '-1', '--oneline']);
          const dirty = git(['status', '--short']).split('\n').filter(Boolean).length;
          let behind = null;
          try { behind = Number(git(['rev-list', '--count', 'HEAD..origin/master']) || 0); } catch { behind = null; }
          return { branch, head, dirtyFiles: dirty, behindOriginMaster: behind, docs: countDocs(), hasOrigin: !!git(['rev-parse', '--verify', 'origin/master']) };
        },
        async updates({ limit } = {}) {
          const out = git(['diff', '--name-status', 'HEAD', 'origin/master', '--', 'Doc/MD']);
          const lines = out ? out.split('\n').filter(Boolean) : [];
          const items = lines.slice(0, Number(limit) || 100).map((l) => {
            const [status, file] = l.split('\t');
            return { status, file };
          });
          return { total: lines.length, items, docs: countDocs() };
        },
      },
    };
  },
};
