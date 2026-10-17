/**
 * 方案版本对比：保存快照（.lan/.pi）并与当前内容做行级 LCS 差异。
 */
'use strict';

const MAX_LINES = 1200;

function diffLines(a, b) {
  const A = String(a == null ? '' : a).split('\n');
  const B = String(b == null ? '' : b).split('\n');
  const n = Math.min(A.length, MAX_LINES);
  const m = Math.min(B.length, MAX_LINES);
  const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const ops = [];
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (A[i] === B[j]) { ops.push({ type: 'same', text: A[i] }); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) { ops.push({ type: 'del', text: A[i] }); i++; }
    else { ops.push({ type: 'add', text: B[j] }); j++; }
  }
  while (i < n) ops.push({ type: 'del', text: A[i++] });
  while (j < m) ops.push({ type: 'add', text: B[j++] });
  const stat = { add: 0, del: 0, same: 0 };
  ops.forEach((o) => { stat[o.type]++; });
  return { ops, stat, truncated: A.length > MAX_LINES || B.length > MAX_LINES };
}

let seq = 0;

module.exports = {
  activate(ctx) {
    const list = () => (ctx.state && Array.isArray(ctx.state.snapshots)) ? ctx.state.snapshots : [];
    const setList = (l) => { ctx.state = Object.assign({}, ctx.state, { snapshots: l.slice(-20) }); ctx.emit('changed', { count: l.length }); };

    return {
      commands: {
        async save({ name, lan, pi } = {}) {
          const id = 'snap-' + Date.now() + '-' + (++seq);
          const snap = { id, name: name || ('快照 ' + new Date().toLocaleString('zh-CN', { hour12: false })), at: new Date().toISOString(), lan: String(lan || ''), pi: String(pi || '') };
          setList(list().concat(snap));
          return { ok: true, id, name: snap.name };
        },
        async list() {
          return { snapshots: list().map((s) => ({ id: s.id, name: s.name, at: s.at, lanLines: s.lan.split('\n').length })) };
        },
        async get({ id } = {}) {
          const s = list().find((x) => x.id === id);
          if (!s) { const e = new Error('快照不存在'); e.code = 404; throw e; }
          return s;
        },
        async remove({ id } = {}) { setList(list().filter((s) => s.id !== id)); return { ok: true }; },
        /** 与当前内容对比：分别给出 lan 与 pi 的差异 */
        async diff({ id, lan, pi } = {}) {
          const s = list().find((x) => x.id === id);
          if (!s) { const e = new Error('快照不存在'); e.code = 404; throw e; }
          return {
            name: s.name,
            lan: diffLines(s.lan, lan),
            pi: diffLines(s.pi, pi),
          };
        },
      },
    };
  },
};
