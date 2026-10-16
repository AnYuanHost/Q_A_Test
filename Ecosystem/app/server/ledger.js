/**
 * 问题台账解析（共享模块）
 *
 * 解析《项目手册.md》第五章「问题台账」的表格，供两处复用、保证口径一致：
 *   - kernel-adapter.js  → 控制台「08 项目台账」视图（实时）
 *   - tools/gen-offline-data.js → 离线快照
 *
 * 规则：
 *   - 匹配 4 列表格行 `| ID | 标题 | 级别 | 状态 |`，ID 形如 ISS-n / DEV-n
 *   - "已关闭"章节（任意级标题）内的行一律视为已关闭
 *   - 状态/级别列含闭环关键词（已解决/已关闭/已修复/已撤销/✅）也视为已关闭
 *   - 同一 ID 只登记一次
 */
'use strict';

const fs = require('fs');

const ROW_RE = /^\|\s*(ISS-\d+|DEV-\d+)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*$/;
const CLOSED_HEADING_RE = /^#{2,}\s*已关闭/;
const ANY_HEADING_RE = /^#{2,}\s/;
const CLOSED_KEYWORD_RE = /已解决|已关闭|已修复|已撤销|✅/;

/** 解析台账 Markdown 文本 → { total, open, issues[] } */
function parseLedger(text) {
  const issues = [];
  const seen = new Set();
  let inClosedSection = false;
  for (const line of String(text).split(/\r?\n/)) {
    if (CLOSED_HEADING_RE.test(line)) { inClosedSection = true; continue; }
    if (ANY_HEADING_RE.test(line)) inClosedSection = false;
    const m = ROW_RE.exec(line);
    if (!m || seen.has(m[1])) continue;
    seen.add(m[1]);
    const closed = inClosedSection || CLOSED_KEYWORD_RE.test(m[3] + m[4]);
    issues.push({ id: m[1], title: m[2], level: m[3], status: m[4], closed });
  }
  return { total: issues.length, open: issues.filter((x) => !x.closed).length, issues };
}

/** 读取台账文件 → { total, open, issues[], source } */
function readLedger(mdPath, source) {
  const text = fs.readFileSync(mdPath, 'utf8');
  const r = parseLedger(text);
  r.source = source || mdPath;
  return r;
}

module.exports = { parseLedger, readLedger };
