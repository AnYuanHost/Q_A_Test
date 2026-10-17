/**
 * Q_A 解决方案脚本语言 · VSCode 扩展
 *
 * 在纯语法高亮之上，提供"生态层脚本引擎"能力：
 *   1. 实时诊断 —— 打开/编辑/保存 .lan 与 .pi 时按 skill 规则校验（四段式、[]、参数表覆盖、const…）
 *   2. 命令     —— 校验、展开常数（const → 节点序列）、格式化、插入示例
 *   3. 代码动作 —— 对 const 行提供「展开常数」快速修复
 *
 * 校验/展开/格式化全部复用 app/web/js/lan-toolkit.js（经 tools/sync-engine.js 同步为
 * ./engine/lan-toolkit.js），与浏览器控制台、Node 单测是同一份实现。
 */
'use strict';

const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

/** 引擎（自动同步副本）；缺失时优雅降级为"仅高亮" */
let engine = null;
try { engine = require('./engine/lan-toolkit.js'); } catch (e) { engine = null; }

const LAN = 'q-a-lan';
const PI = 'q-a-pi';

/** 映射数据（由 app/tools/gen-vscode-data.js 从内核文档生成） */
let maps = [];
try { maps = require('./data/maps.json'); } catch { maps = []; }
const mapByName = new Map(maps.map((m) => [m.name, m]));

/** @type {vscode.DiagnosticCollection} */
let diagnostics;
/** @type {vscode.OutputChannel} */
let output;

const cfg = () => vscode.workspace.getConfiguration('qALan');
const validateOnSave = () => cfg().get('validateOnSave', true);
const maxExpandValue = () => Number(cfg().get('maxExpandValue', 255)) || 255;

/* ────────────────────────── 工具函数 ────────────────────────── */

/** 找同目录同名 .pi（找不到再退到同目录 Solution.pi） */
function readSiblingPi(doc) {
  if (doc.uri.scheme !== 'file') return '';
  const base = doc.uri.fsPath.replace(/\.lan$/i, '.pi');
  for (const p of [base, path.join(path.dirname(doc.uri.fsPath), 'Solution.pi')]) {
    try { if (fs.existsSync(p)) return fs.readFileSync(p, 'utf8'); } catch { /* ignore */ }
  }
  return '';
}

/** 把引擎 issue（1 基行号）转成 VSCode Diagnostic */
function toDiagnostic(it) {
  const line = Math.max(0, (Number(it.line) || 1) - 1);
  const range = new vscode.Range(line, 0, line, Number.MAX_SAFE_INTEGER);
  const sev = it.level === 'error' ? vscode.DiagnosticSeverity.Error : vscode.DiagnosticSeverity.Warning;
  const d = new vscode.Diagnostic(range, it.message, sev);
  d.source = 'q-a-lan';
  if (it.level === 'warn' && /const/.test(it.message)) {
    d.code = { value: 'expand-constants', target: vscode.Uri.parse('command:qALan.expandConstants') };
  }
  return d;
}

/** 校验一个文档，返回诊断数组 */
function collect(doc) {
  if (!engine) return [];
  const text = doc.getText();
  if (doc.languageId === LAN) {
    return engine.validate(text, readSiblingPi(doc)).map(toDiagnostic);
  }
  if (doc.languageId === PI) {
    // 只校验参数表：给一个"空但合法"的前后图占位，避免误报覆盖问题
    return engine.validate('{\n}\n{\n}', text).map(toDiagnostic);
  }
  return [];
}

/** 刷新某文档的诊断 */
function refresh(doc) {
  if (!diagnostics) return;
  if (!doc || (doc.languageId !== LAN && doc.languageId !== PI)) return;
  diagnostics.set(doc.uri, collect(doc));
}

/** 简单防抖 */
function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

/* ────────────────────────── 命令实现 ────────────────────────── */

function activeLanEditor() {
  const ed = vscode.window.activeTextEditor;
  if (!ed) { vscode.window.showWarningMessage('请先打开一个 .lan 文件'); return null; }
  if (ed.document.languageId !== LAN) { vscode.window.showWarningMessage('该命令仅适用于 .lan 主脚本'); return null; }
  return ed;
}

function commandValidate() {
  const ed = vscode.window.activeTextEditor;
  if (!ed) return;
  output.clear();
  output.appendLine('[Q_A] 校验 ' + ed.document.fileName);
  const items = collect(ed.document);
  refresh(ed.document);
  if (items.length === 0) {
    output.appendLine('✓ 全部通过');
    vscode.window.showInformationMessage('Q_A 校验：✓ 全部通过');
    return;
  }
  const errs = items.filter((d) => d.severity === vscode.DiagnosticSeverity.Error).length;
  for (const d of items) {
    const tag = d.severity === vscode.DiagnosticSeverity.Error ? '✗' : '!';
    output.appendLine(`${tag} L${d.range.start.line + 1}: ${d.message}`);
  }
  output.show(true);
  vscode.window.showWarningMessage(`Q_A 校验：${errs} 错误 / ${items.length - errs} 提示（详见输出面板）`);
}

async function commandExpand() {
  const ed = activeLanEditor();
  if (!ed) return;
  const src = ed.document.getText();
  const r = engine.expandConstants(src, { maxValue: maxExpandValue() });
  if (r.expanded.length === 0) {
    vscode.window.showInformationMessage(r.warnings.length ? r.warnings.join('；') : '没有找到可展开的 const 声明');
    return;
  }
  const doc = await vscode.workspace.openTextDocument({ language: LAN, content: r.lan });
  await vscode.window.showTextDocument(doc, { preview: false, viewColumn: vscode.ViewColumn.Beside });
  const names = r.expanded.map((x) => `${x.name}=${x.value}(${x.nodes} 节点)`).join('，');
  output.appendLine(`[Q_A] 展开常数：${names}`);
  if (r.warnings.length) vscode.window.showWarningMessage(r.warnings.join('；'));
  if (r.piExtra.length) {
    const pick = await vscode.window.showInformationMessage(
      `展开了 ${r.expanded.length} 个常数；需在 .pi 追加 ${r.piExtra.length} 行参数`, '复制参数行');
    if (pick === '复制参数行') await vscode.env.clipboard.writeText(r.piExtra.join('\n'));
  }
}

async function commandFormat() {
  const ed = activeLanEditor();
  if (!ed) return;
  const src = ed.document.getText();
  const out = engine.format(src);
  if (out === src) { vscode.window.showInformationMessage('Q_A：格式已是规范形式'); return; }
  const full = new vscode.Range(ed.document.positionAt(0), ed.document.positionAt(src.length));
  const ok = await ed.edit((b) => b.replace(full, out));
  if (ok) vscode.window.setStatusBarMessage('Q_A：已格式化', 2000);
}

async function commandInsertSample() {
  const doc = await vscode.workspace.openTextDocument({ language: LAN, content: engine.SAMPLE_LAN });
  await vscode.window.showTextDocument(doc, { preview: false });
}

/* ────────────────────────── 代码动作 ────────────────────────── */

const codeActions = {
  provideCodeActions(doc, range, context) {
    if (doc.languageId !== LAN) return [];
    const actions = [];
    const lineText = doc.lineAt(range.start.line).text;
    // const 行 → 展开常数
    if (/^\s*const\s+\w+\s*=\s*\d+\s*;/.test(lineText)) {
      const a = new vscode.CodeAction('Q_A: 展开常数（生成内核可接受的节点序列）', vscode.CodeActionKind.QuickFix);
      a.command = { command: 'qALan.expandConstants', title: '展开常数' };
      a.isPreferred = true;
      actions.push(a);
    }
    // 引擎诊断上的展开建议
    for (const d of context.diagnostics) {
      if (d.code && d.code.value === 'expand-constants') {
        const a = new vscode.CodeAction('Q_A: 展开常数', vscode.CodeActionKind.QuickFix);
        a.command = { command: 'qALan.expandConstants', title: '展开常数' };
        if (!actions.some((x) => x.title.includes('展开常数'))) actions.push(a);
      }
    }
    return actions;
  },
};

/* ────────────────────────── 映射智能（补全 / hover / 定义 / 模板） ────────────────────────── */

const completionProvider = {
  provideCompletionItems(document, position) {
    const range = document.getWordRangeAtPosition(position);
    return maps.map((m) => {
      const it = new vscode.CompletionItem(m.name, vscode.CompletionItemKind.Function);
      it.detail = `${m.domain} → ${m.range}`;
      it.documentation = new vscode.MarkdownString(`\`Map ${m.name}(${m.domain}, ${m.range})\`\n\n文档：${m.file}`);
      it.insertText = m.name;
      if (range) it.range = range;
      return it;
    });
  },
};

const hoverProvider = {
  provideHover(document, position) {
    const range = document.getWordRangeAtPosition(position);
    if (!range) return undefined;
    const m = mapByName.get(document.getText(range));
    if (!m) return undefined;
    const md = new vscode.MarkdownString();
    md.appendCodeblock(`Map ${m.name}(${m.domain}, ${m.range})`, 'cpp');
    md.appendMarkdown(`\n**定义域** ${m.domain}（${m.inArity} 个参数）\n\n**值域** ${m.range}（${m.outArity} 个参数）\n\n文档：\`${m.file}\``);
    return new vscode.Hover(md, range);
  },
};

const definitionProvider = {
  async provideDefinition(document, position) {
    const range = document.getWordRangeAtPosition(position);
    if (!range) return undefined;
    const m = mapByName.get(document.getText(range));
    if (!m) return undefined;
    const folders = vscode.workspace.workspaceFolders || [];
    for (const f of folders) {
      const uri = vscode.Uri.joinPath(f.uri, 'Doc', 'MD', ...m.file.split('/'));
      try { await vscode.workspace.fs.stat(uri); return new vscode.Location(uri, new vscode.Position(0, 0)); } catch { /* next */ }
    }
    vscode.window.showInformationMessage(`映射 ${m.name} 的文档：Doc/MD/${m.file}`);
    return undefined;
  },
};

/** 光标停在映射名上 → 快速插入四段节点模板 */
const templateActions = {
  provideCodeActions(document, range) {
    const line = document.lineAt(range.start.line);
    const m = mapByName.get(line.text.trim());
    if (!m) return [];
    const base = m.name.replace(/[^\w]/g, '_');
    const ins = Array.from({ length: m.inArity }, (_, i) => `${base}_In${i + 1}`);
    const outs = Array.from({ length: m.outArity }, (_, i) => `${base}_Out${i + 1}`);
    const domainLine = m.inArity === 0 ? 'EmptyElement' : m.inArity === 1 ? ins[0] : `( ${ins.join(' ')} )`;
    const rangeLine = m.outArity === 0 ? 'EmptyElement' : m.outArity === 1 ? outs[0] : `( ${outs.join(' ')} )`;

    const a = new vscode.CodeAction(`插入 ${m.name} 的节点模板`, vscode.CodeActionKind.QuickFix);
    a.edit = new vscode.WorkspaceEdit();
    a.edit.insert(document.uri, new vscode.Position(line.range.end.line, line.text.length), `\n${domainLine}\n${rangeLine}\nTraUntractable`);
    return [a];
  },
};

/* ────────────────────────── 激活 ────────────────────────── */

function activate(context) {
  output = vscode.window.createOutputChannel('Q_A Solution Language');
  diagnostics = vscode.languages.createDiagnosticCollection('q-a-lan');
  context.subscriptions.push(output, diagnostics);

  if (!engine) {
    vscode.window.showWarningMessage('Q_A 插件：未找到脚本引擎（engine/lan-toolkit.js），仅提供语法高亮');
  }

  const debouncedRefresh = debounce(refresh, 300);

  context.subscriptions.push(
    vscode.workspace.onDidOpenTextDocument(refresh),
    vscode.workspace.onDidChangeTextDocument((e) => debouncedRefresh(e.document)),
    vscode.workspace.onDidSaveTextDocument((doc) => { if (validateOnSave()) refresh(doc); }),
    vscode.workspace.onDidCloseTextDocument((doc) => diagnostics.delete(doc.uri)),
    vscode.commands.registerCommand('qALan.validate', commandValidate),
    vscode.commands.registerCommand('qALan.expandConstants', commandExpand),
    vscode.commands.registerCommand('qALan.format', commandFormat),
    vscode.commands.registerCommand('qALan.insertSample', commandInsertSample),
    vscode.languages.registerCodeActionsProvider({ language: LAN }, codeActions, {
      providedCodeActionKinds: [vscode.CodeActionKind.QuickFix],
    }),
  );

  // 映射智能（数据来自内核文档索引）
  if (maps.length) {
    context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider({ language: LAN }, completionProvider),
      vscode.languages.registerHoverProvider({ language: LAN }, hoverProvider),
      vscode.languages.registerDefinitionProvider({ language: LAN }, definitionProvider),
      vscode.languages.registerCodeActionsProvider({ language: LAN }, templateActions, {
        providedCodeActionKinds: [vscode.CodeActionKind.QuickFix],
      }),
    );
  }

  // 已打开的文档先校验一遍
  vscode.workspace.textDocuments.forEach(refresh);
}

function deactivate() {
  if (diagnostics) diagnostics.dispose();
}

module.exports = { activate, deactivate };
