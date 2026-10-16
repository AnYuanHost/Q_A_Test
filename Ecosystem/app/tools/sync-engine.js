/**
 * 脚本引擎同步器：把唯一权威实现分发到各使用方。
 *
 * 源头（唯一手改处）：app/web/js/lan-toolkit.js
 * 去向：vscode-q_a-lan/engine/lan-toolkit.js（VSCode 插件需自包含副本）
 *
 * 用法：node app/tools/sync-engine.js
 * 约定：改动 lan-toolkit.js 后必跑；控制台与插件因此永远同一份逻辑。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const SRC = path.join(ROOT, 'app', 'web', 'js', 'lan-toolkit.js');
const DEST = path.join(ROOT, 'vscode-q_a-lan', 'engine', 'lan-toolkit.js');

const BANNER =
  '/* ⚠️ 自动同步副本，请勿手改 ——\n' +
  ' * 源头：app/web/js/lan-toolkit.js\n' +
  ' * 重新生成：node app/tools/sync-engine.js\n' +
  ' */\n';

const src = fs.readFileSync(SRC, 'utf8');
fs.mkdirSync(path.dirname(DEST), { recursive: true });
fs.writeFileSync(DEST, BANNER + src, 'utf8');

console.log('[sync-engine] 引擎已同步');
console.log('  源 : ' + path.relative(ROOT, SRC));
console.log('  目标: ' + path.relative(ROOT, DEST));
