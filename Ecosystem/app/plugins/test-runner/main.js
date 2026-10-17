/**
 * 自检运行器（Node 侧）：调用项目脚本并返回输出。
 */
'use strict';

const path = require('path');
const { execFile } = require('child_process');

const ROOT = path.join(__dirname, '..', '..', '..');

function run(args, timeout) {
  return new Promise((resolve) => {
    execFile(process.execPath, args, { cwd: ROOT, timeout: timeout || 90000, maxBuffer: 4 * 1024 * 1024 }, (err, stdout, stderr) => {
      resolve({ ok: !err, code: err ? (err.code || 1) : 0, stdout: stdout || '', stderr: stderr || '' });
    });
  });
}

module.exports = {
  activate() {
    return {
      commands: {
        async checkAll() {
          const r = await run([path.join(ROOT, 'app', 'tools', 'check-all.js')]);
          const m = /(\d+) PASS \/ (\d+) FAIL/.exec(r.stdout);
          return Object.assign(r, { summary: m ? { pass: Number(m[1]), fail: Number(m[2]) } : null });
        },
        async engineTests() {
          const r = await run([path.join(ROOT, 'app', 'tools', 'test-lan-toolkit.js')], 30000);
          const m = /(\d+) PASS \/ (\d+) FAIL/.exec(r.stdout);
          return Object.assign(r, { summary: m ? { pass: Number(m[1]), fail: Number(m[2]) } : null });
        },
      },
    };
  },
};
