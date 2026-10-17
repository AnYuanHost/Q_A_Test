/**
 * 为 VSCode 插件生成映射数据（补全 / hover / 转到定义的数据源）。
 * 用法：node app/tools/gen-vscode-data.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const docIndex = require(path.join(ROOT, 'app', 'server', 'doc-index.js'));
const OUT = path.join(ROOT, 'vscode-q_a-lan', 'data', 'maps.json');

const maps = docIndex.index().maps.map((m) => ({
  name: m.name,
  domain: m.domain,
  range: m.range,
  inArity: m.inArity,
  outArity: m.outArity,
  file: m.file,
  title: m.title,
}));

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(maps, null, 0), 'utf8');
console.log(`[gen-vscode-data] ${maps.length} 个映射 -> ${path.relative(ROOT, OUT)}`);
