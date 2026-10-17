/*
 * LanToolkit 引擎单测（node 环境）
 *
 * 引擎已 UMD 化，可直接 require 官方实现（app/web/js/lan-toolkit.js），
 * 与浏览器、VSCode 插件用的是同一份代码，避免测试与实现漂移。
 */
'use strict';

const path = require('path');
const T = require(path.join(__dirname, '..', 'web', 'js', 'lan-toolkit.js'));

let pass = 0, fail = 0;
const assert = (cond, name) => {
  if (cond) { pass++; console.log(`  PASS  ${name}`); }
  else { fail++; console.log(`  FAIL  ${name}`); }
};

/* ── 0. 模块契约 ── */
assert(typeof T.validate === 'function' && typeof T.expandConstants === 'function' && typeof T.format === 'function', 'UMD 导出完整（validate/expandConstants/format）');
assert(typeof T.VERSION === 'string' && T.VERSION.length > 0, '引擎带版本号');

/* ── 1. 示例脚本校验：仅 const 提示，无 error ── */
const issues0 = T.validate(T.SAMPLE_LAN, T.SAMPLE_PI);
assert(issues0.filter((x) => x.level === 'error').length === 0, '示例脚本无 error');
assert(issues0.some((x) => x.level === 'warn' && x.message.includes('const')), '示例脚本给出 const 提示');

/* ── 2. 常数展开 ── */
const r = T.expandConstants(T.SAMPLE_LAN);
assert(r.expanded.length === 1 && r.expanded[0].name === 'UIntTen' && r.expanded[0].value === 10, 'UIntTen=10 被识别');
assert(r.expanded[0].nodes === 11, '展开节点数 = 1 New + 10 Successor = 11');
assert(!/(^|\n)\s*const\s+[A-Za-z_]+\s*=\s*\d+\s*;/m.test(r.lan), '展开结果不含 const 声明语句');
const successorNodeLines = r.lan.split('\n').filter((l) => l.trim() === 'UIntSuccessor').length;
assert(successorNodeLines === 10, '含 10 个 UIntSuccessor 节点行（注释不计）');
assert(r.piExtra.length === 1 && r.piExtra[0] === 'UIntTen UInt 10 Unlimited Login', 'piExtra 参数行正确');

/* ── 3. 展开结果再次校验：应无 error、无 const 提示 ── */
const issues1 = T.validate(r.lan, T.SAMPLE_PI + '\n' + r.piExtra.join('\n'));
assert(issues1.every((x) => x.level !== 'error'), '展开结果无 error');
assert(!issues1.some((x) => x.message.includes('const')), '展开结果不再有 const 提示');

/* ── 4. 坏脚本：嵌套 [] ── */
const bad1 = '{\n}\n{\n  [\n    [\n      A\n      B\n      C\n      Tractable\n    ]\n  ]\n}';
assert(T.validate(bad1, '').some((x) => x.message.includes('嵌套')), '嵌套 [] 被检出');

/* ── 5. 坏脚本：三段节点 ── */
const bad2 = '{\n}\n{\n  UIntAdd\n  UIntA\n  Tractable\n}';
assert(T.validate(bad2, '').some((x) => x.message.includes('四段')), '三段节点被检出');

/* ── 6. 坏脚本：非法状态 ── */
const bad3 = '{\n}\n{\n  UIntAdd\n  UIntA\n  UIntB\n  Running\n}';
assert(T.validate(bad3, '').some((x) => x.message.includes('非法节点状态')), '非法状态被检出');

/* ── 7. 坏脚本：参数未登记 ── */
const bad4 = '{\n}\n{\n  UIntAdd\n  ( Alpha Beta )\n  Gamma\n  Tractable\n}';
const pi4 = 'EmptyElement  EmptyElement  EmptyElement  Unlimited  Common';
const iss4 = T.validate(bad4, pi4);
assert(iss4.some((x) => x.message.includes('Alpha') && x.message.includes('未在参数表')), '未登记参数被检出');

/* ── 8. 参数表字段数错误 ── */
const pi5 = 'UIntA String Unlimited Login';
assert(T.validate('{\n}\n{\n}', pi5).some((x) => x.message.includes('5 个字段')), '参数表字段数被检出');

/* ── 9. 超限常数警告 ── */
const r2 = T.expandConstants('const Huge = 9999;\n{\n}\n{\n}');
assert(r2.warnings.length === 1 && r2.warnings[0].includes('上限'), '超限常数给出警告');
assert(r2.lan.split('\n').some((l) => l.includes('Huge')) === false, '超限常数不产生节点');

/* ── 10. 高亮转义安全 ── */
assert(T.highlightLine('<script>').includes('&lt;'), '高亮 HTML 转义安全');
assert(!T.highlightLine('<b>').includes('<b>'), '高亮不产生裸标签');

/* ── 11. 图块外 [ 被检出 ── */
assert(T.validate('[\n]\n{\n}\n{\n}', '').some((x) => x.message.includes('只能出现在')), '图块外的 [ 被检出');

/* ── 12. 未使用的 const 被提示 ── */
const lanUnused = '{\n}\n{\n    const Five = 5;\n    NewUIntElement\n    EmptyElement\n    UIntA\n    Tractable\n}';
const piUnused = 'EmptyElement  EmptyElement  EmptyElement  Unlimited  Common\nUIntA String UIntA Unlimited Login';
assert(T.validate(lanUnused, piUnused).some((x) => x.message.includes('未在图块中使用')), '未使用的 const 被提示');

/* ── 13. 重复 const 被提示 ── */
const lanDup = '{\n}\n{\n    const Dup = 1;\n    const Dup = 2;\n    NewUIntElement\n    EmptyElement\n    UIntA\n    Tractable\n}';
assert(T.validate(lanDup, piUnused).some((x) => x.message.includes('重复声明')), '重复 const 被提示');

/* ── 14. const 与参数重名被提示 ── */
const lanClash = '{\n}\n{\n    const UIntA = 3;\n    NewUIntElement\n    EmptyElement\n    UIntA\n    Tractable\n}';
assert(T.validate(lanClash, piUnused).some((x) => x.message.includes('重名')), 'const 与参数重名被提示');

/* ── 15. 合法示例：0 错误 0 提示 ── */
assert(T.validate(T.SAMPLE_LAN_VALID, T.SAMPLE_PI).length === 0, '合法示例 0 错误 0 提示');

/* ── 16. format：缩进规范化 + 幂等 ── */
const messy = '{\n}\n{\nUIntAdd\nUIntA\nUIntB\nTractable\n}';
const f1 = T.format(messy);
assert(f1.includes('\n    UIntAdd\n') && f1.includes('\n    Tractable\n'), 'format 把节点缩进 4 空格');
assert(T.format(f1) === f1, 'format 幂等（再格式化不变）');

/* ── 17. format：压缩连续空行 ── */
assert(!T.format('{\n}\n{\n\n\n\nUIntAdd\nUIntA\nUIntB\nTractable\n}').includes('\n\n\n'), 'format 压缩连续空行');

console.log(`\n结果: ${pass} PASS / ${fail} FAIL`);
process.exit(fail ? 1 : 0);
