/**
 * 内核文档结构化索引（Document Index）
 *
 * 目标：把 847 篇 `Doc/MD` 从"全文搜索"升级为"结构化知识"：
 *   - 项目 → 模块 → 实体（映射/集合/案例）
 *   - 每个映射：定义域集合、值域集合、参数元数、参数类型提示、案例
 *
 * 用途：文档驱动脚本生成（需求 → 映射 → 节点 + .pi），以及 hover/补全/能力索引。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const DOC = path.join(ROOT, 'Q_A_Test-master', 'Doc', 'MD');

/** 集合 → 参数元数（定义域/值域需要几个参数） */
const ARITY = {
  NullElementSet: 0,
  OrderedPairSet: 2,
  UniversalSet: 1,
  UIntSet: 1,
  ElementOrderSet: 1,
  FstreamSet: 1,
  BoolSet: 1,
  SetSet: 1,
  MapSet: 1,
  NullSet: 1,
};

/** 集合 → .pi 类型提示 */
const PI_TYPE = {
  UIntSet: 'UInt',
  FstreamSet: 'String',
  BoolSet: 'Bool',
  SuperIndexSet: 'SuperIndex',
};

let _cache = null;

const sanitize = (s) => String(s || 'P').replace(/[^\w\u4e00-\u9fa5]/g, '_').replace(/^_+|_+$/g, '') || 'P';

function parseFile(file, rel) {
  let text = '';
  try { text = fs.readFileSync(file, 'utf8'); } catch { return null; }
  const base = path.basename(file, '.md');
  const title = (text.split(/\r?\n/).find((l) => l.trim().startsWith('#')) || '').replace(/^#+\s*/, '').trim() || base;

  const parts = rel.split('/');
  let project = 'Other';
  let module = '';
  if (parts[0] === 'Lib_Introduce' && parts.length > 1) { project = parts[1]; module = parts[2] || ''; }
  else { project = parts[0] || 'Other'; module = parts[1] || ''; }

  const mapMatch = /^\s*Map\s+([A-Za-z_]\w*)\s*\(\s*&?\s*([A-Za-z_]\w*)\s*,\s*&?\s*([A-Za-z_]\w*)/m.exec(text);
  // 注意：文件名不一定等于映射名（历史命名差异），只要文档里有 Map 定义就收录，后续按映射名去重
  if (!mapMatch) return { type: 'doc', name: base, title, project, module, file: rel, text };

  // 从代码块里找该映射的四段节点案例
  const cases = [];
  const blockRe = /```[A-Za-z+]*\s*\n([\s\S]*?)```/g;
  let bm;
  while ((bm = blockRe.exec(text))) {
    const lines = bm[1].split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    for (let i = 0; i + 3 < lines.length; i++) {
      if (lines[i] === mapMatch[1]) {
        cases.push({ domain: lines[i + 1], range: lines[i + 2], state: lines[i + 3] });
        if (cases.length >= 3) break;
      }
    }
    if (cases.length >= 3) break;
  }

  const domain = mapMatch[2];
  const range = mapMatch[3];
  return {
    type: 'map',
    name: mapMatch[1],
    title,
    project,
    module,
    file: rel,
    domain,
    range,
    inArity: ARITY[domain] != null ? ARITY[domain] : 1,
    outArity: ARITY[range] != null ? ARITY[range] : 1,
    piDomain: PI_TYPE[domain] || 'String',
    piRange: PI_TYPE[range] || 'String',
    cases,
    text,
  };
}

function collect() {
  const entries = [];
  const walk = (dir, rel) => {
    let items = [];
    try { items = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of items) {
      const p = path.join(dir, e.name);
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) { walk(p, r); continue; }
      if (!e.name.endsWith('.md')) continue;
      const parsed = parseFile(p, r);
      if (parsed) entries.push(parsed);
    }
  };
  walk(DOC, '');

  // 按映射名去重：优先保留"文件名 == 映射名"的那篇
  const byName = new Map();
  for (const e of entries) {
    if (e.type !== 'map') continue;
    const prev = byName.get(e.name);
    if (!prev) { byName.set(e.name, e); continue; }
    const better = path.basename(e.file, '.md') === e.name && path.basename(prev.file, '.md') !== e.name;
    if (better) byName.set(e.name, e);
  }
  const maps = [...byName.values()];
  const docs = entries.filter((x) => x.type === 'doc');
  const projects = new Map();
  for (const e of entries) {
    if (!projects.has(e.project)) projects.set(e.project, { name: e.project, docs: 0, maps: 0 });
    const pr = projects.get(e.project);
    if (e.type === 'map') pr.maps++; else pr.docs++;
  }

  return {
    maps,
    docs,
    projects: [...projects.values()].sort((a, b) => b.maps - a.maps),
    totals: { maps: maps.length, docs: docs.length, projects: projects.size },
    generatedAt: new Date().toISOString(),
  };
}

function index() { if (!_cache) _cache = collect(); return _cache; }

function find(name) { return index().maps.find((m) => m.name === name) || null; }

/** 中文意图 → 英文符号/关键词（提高需求匹配率） */
const SYNONYMS = {
  '相加': 'add', '求和': 'add', '加法': 'add', '加': 'add',
  '新建': 'new', '创建': 'new', '构造': 'new', '新建元素': 'new',
  '释放': 'release', '删除': 'release', '移除': 'remove',
  '读取': 'read', '读': 'read', '获取': 'get', '取出': 'get',
  '写入': 'write', '写': 'write', '存放': 'put', '存入': 'put',
  '复制': 'copy', '转交': 'care', '交换': 'swap', '归零': 'zero',
  '集合': 'set', '映射': 'map', '元素': 'element', '序偶': 'pair',
  '整数': 'uint', '无符号': 'uint', '布尔': 'bool', '文件': 'fstream',
  '流': 'fstream', '超索引': 'superindex', '线程': 'thread',
  '解决方案': 'solution', '意向性': 'intentionality', '知识': 'krs',
  '检索': 'search', '搜索': 'search', '后继': 'successor', '自增': 'successor',
  '增加': 'successor', '格式化': 'format', '日志': 'log', '环境': 'environment',
  '检索器': 'ees', '语境': 'ees', '轮询': 'polling', '问答': 'question',
};

/** 需求 → 映射候选（名称/标题/项目/定义域/案例 加权） */
function suggest(need, limit) {
  const raw = String(need || '').trim();
  const k = raw.toLowerCase();
  if (!k) return [];
  const tokens = k.split(/[\s,，/]+/).filter(Boolean);
  // 中文意图 → 英文关键词
  for (const [zh, en] of Object.entries(SYNONYMS)) if (raw.includes(zh)) tokens.push(en);
  // 同时保留中文整词，用于标题/描述命中
  tokens.push(raw);

  const camelWords = (name) => name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(/[\s_]+/).map((w) => w.toLowerCase()).filter(Boolean);

  const scored = [];
  for (const m of index().maps) {
    const hay = `${m.name} ${m.title} ${m.project} ${m.module} ${m.domain} ${m.range} ${m.file}`.toLowerCase();
    const words = camelWords(m.name);
    let score = 0;
    if (m.name.toLowerCase() === k) score += 120;
    if (m.name.toLowerCase().includes(k)) score += 40;
    if (m.title.toLowerCase().includes(k)) score += 30;
    for (const t of tokens) {
      if (!t) continue;
      const tl = t.toLowerCase();
      if (words.includes(tl)) score += 24;                       // 驼峰词精确命中（UIntAdd 的 add）
      else if (words.some((w) => w.startsWith(tl))) score += 8;   // 词前缀（Address 的 add 只给低分）
      else if (tl.length >= 4 && hay.includes(tl)) score += 3;    // 长词模糊
      else if (tl.length < 4 && m.name.toLowerCase().includes(tl)) score += 1;
    }
    score += Math.min(m.cases.length, 3) * 2;
    score += Math.max(0, 3 - words.length) * 3; // 名字越短越通用（ReleaseElement 优先于 ReleaseDllElementManager）
    if (score > 0) scored.push({ score, map: m });
  }
  scored.sort((a, b) => b.score - a.score || a.map.name.localeCompare(b.map.name));
  return scored.slice(0, Number(limit) || 10).map((x) => ({
    name: x.map.name, title: x.map.title, domain: x.map.domain, range: x.map.range,
    inArity: x.map.inArity, outArity: x.map.outArity, file: x.map.file, score: x.score,
  }));
}

/** 由映射生成四段节点 + .pi 行 */
function compose(name) {
  const m = find(name);
  if (!m) { const e = new Error('映射不存在：' + name); e.code = 404; throw e; }
  const base = sanitize(m.name);
  const ins = Array.from({ length: m.inArity }, (_, i) => `${base}_In${i + 1}`);
  const outs = Array.from({ length: m.outArity }, (_, i) => `${base}_Out${i + 1}`);

  const domainLine = m.inArity === 0 ? 'EmptyElement' : m.inArity === 1 ? ins[0] : `( ${ins.join(' ')} )`;
  const rangeLine = m.outArity === 0 ? 'EmptyElement' : m.outArity === 1 ? outs[0] : `( ${outs.join(' ')} )`;

  const lan = `    ${m.name}\n    ${domainLine}\n    ${rangeLine}\n    TraUntractable\n`;
  const pi = [
    ...ins.map((p) => `${p} ${m.piDomain} ${p} Unlimited Login`),
    ...outs.map((p) => `${p} ${m.piRange} ${p} Unlimited Login`),
  ];
  return {
    name: m.name, title: m.title, domain: m.domain, range: m.range,
    inArity: m.inArity, outArity: m.outArity, file: m.file,
    lan, pi, params: { in: ins, out: outs },
    note: '参数名为自动生成，可按语义重命名；类型/语境/状态为推断值，请按映射文档核对。',
  };
}

module.exports = { index, find, suggest, compose, DOC };
