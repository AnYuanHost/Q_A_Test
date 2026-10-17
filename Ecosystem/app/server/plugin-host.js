/**
 * 插件宿主（Plugin Host）
 *
 * 定位：**前端 ↔ 插件 的通信中枢**。后端扫描 `app/plugins/<id>/plugin.json`，
 * 按需激活插件的 `main.js`，向前端暴露统一的清单/命令/事件接口；插件也可通过
 * `ctx.emit(topic, payload)` 主动向前端推送（SSE）。前端侧对应库见 `web/js/plugin-host.js`。
 *
 * 设计要点（呼应内核文档《意向性网络·边的三元实现与插件》——"插件可提供渲染信息辅助图形界面"）：
 *  - 插件 = 一个目录：`plugin.json`（清单/贡献点）+ `main.js`（Node 逻辑，可选）+ `ui.js`（前端逻辑，可选）
 *  - 命令：前端 `host.call(id, command, args)` → 宿主 → 插件 `commands[command](args)` → 返回结果
 *  - 事件：插件 `ctx.emit(topic, payload)` → 宿主 EventEmitter → `GET /api/v1/plugins/events`(SSE) → 前端 `host.bus`
 *  - 状态：插件 `ctx.state`（持久化到 `app/data/plugin-state/<id>.json`）
 *
 * 零依赖：仅用 Node 内置模块。
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { EventEmitter } = require('events');

const APP_DIR = path.join(__dirname, '..');
const PLUGIN_DIR = path.join(APP_DIR, 'plugins');
const STATE_DIR = path.join(APP_DIR, 'data', 'plugin-state');

const bus = new EventEmitter();
bus.setMaxListeners(0);

/** 已激活的插件：id -> { manifest, dir, api } */
const active = new Map();

/* ─────────────── 清单扫描 ─────────────── */

function readManifest(dir) {
  const file = path.join(dir, 'plugin.json');
  if (!fs.existsSync(file)) return null;
  try {
    const m = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!m.id || !m.name) return null;
    m.dir = path.basename(dir);
    return m;
  } catch { return null; }
}

/** 扫描插件目录（跳过 `_` 前缀的支撑目录，如 _sdk） */
function scan() {
  let entries = [];
  try { entries = fs.readdirSync(PLUGIN_DIR, { withFileTypes: true }); } catch { return []; }
  const out = [];
  for (const e of entries) {
    if (!e.isDirectory() || e.name.startsWith('_')) continue;
    const m = readManifest(path.join(PLUGIN_DIR, e.name));
    if (m) out.push(m);
  }
  return out.sort((a, b) => a.id.localeCompare(b.id));
}

/* ─────────────── 插件状态持久化 ─────────────── */

function stateFile(id) { return path.join(STATE_DIR, id + '.json'); }
function loadState(id) {
  try { return JSON.parse(fs.readFileSync(stateFile(id), 'utf8')); } catch { return {}; }
}
function saveState(id, obj) {
  fs.mkdirSync(STATE_DIR, { recursive: true });
  fs.writeFileSync(stateFile(id), JSON.stringify(obj, null, 2), 'utf8');
}

/* ─────────────── 激活 ─────────────── */

function makeContext(manifest) {
  const id = manifest.id;
  let state = loadState(id);
  return {
    id,
    manifest,
    log: (...a) => console.log(`[plugin:${id}]`, ...a),
    /** 持久化状态（读写都会落盘）：`ctx.state` 可读可写 */
    get state() { return state; },
    set state(next) { state = next || {}; saveState(id, state); },
    setState(next) { state = next || {}; saveState(id, state); return state; },
    /** 向前端推送事件（SSE） */
    emit(topic, payload) { bus.emit('event', { plugin: id, topic, payload: payload === undefined ? null : payload }); },
    /** 调用其它插件的命令 */
    call: (otherId, command, args) => invoke(otherId, command, args),
    /** 应用内可利用的资源 */
    appDir: APP_DIR,
  };
}

function activate(id) {
  const manifest = scan().find((m) => m.id === id);
  if (!manifest) { const e = new Error(`插件不存在：${id}`); e.code = 404; throw e; }
  if (active.has(id)) return active.get(id);

  let api = { commands: {} };
  const mainFile = path.join(PLUGIN_DIR, manifest.dir, manifest.main || 'main.js');
  if (manifest.main !== null && fs.existsSync(mainFile)) {
    const mod = require(mainFile);
    const ctx = makeContext(manifest);
    const out = typeof mod === 'function' ? mod(ctx) : (typeof mod.activate === 'function' ? mod.activate(ctx) : mod);
    if (out && out.commands) api.commands = out.commands;
  }
  const rec = { manifest, dir: path.join(PLUGIN_DIR, manifest.dir), api };
  active.set(id, rec);
  return rec;
}

/* ─────────────── 对外接口 ─────────────── */

function list() {
  return scan().map((m) => ({
    id: m.id, name: m.name, version: m.version || '0.0.0', description: m.description || '',
    author: m.author || '', contributes: m.contributes || {}, ui: m.ui || null,
    active: active.has(m.id),
    commands: Object.keys(active.get(m.id) ? active.get(m.id).api.commands : {}),
  }));
}

async function invoke(id, command, args) {
  const rec = activate(id);
  const fn = rec.api.commands[command];
  if (typeof fn !== 'function') { const e = new Error(`插件 ${id} 无命令 ${command}`); e.code = 404; throw e; }
  return fn(args || {});
}

module.exports = { list, activate, invoke, bus, scan, PLUGIN_DIR };
