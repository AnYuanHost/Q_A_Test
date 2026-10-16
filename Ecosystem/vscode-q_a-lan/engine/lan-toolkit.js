/* ⚠️ 自动同步副本，请勿手改 ——
 * 源头：app/web/js/lan-toolkit.js
 * 重新生成：node app/tools/sync-engine.js
 */
/**
 * 解决方案脚本语言工具箱（纯函数引擎 · UMD）
 *
 * ── 解决什么问题 ─────────────────────────────────────────
 *   AnYuanHost 指出内核脚本语言"连常数都没有"：想表达「5」只能靠
 *   NewUIntElement（初值 0）+ N 次 UIntSuccessor 手工展开。
 *   本工具箱在**生态层**补上这块：脚本里写 `const UIntFive = 5;`，
 *   一键展开为内核可直接接受的等价节点序列 + 参数表行。
 *
 * ── 能力（规则全部来自 solution-script-writing skill）────
 *   1. highlight()        —— 语法高亮（状态关键字 / 并行块 / 图块 / 映射名 / 常数）
 *   2. validate()         —— 规则校验（四段式、[] 首尾节点、禁嵌套、参数表覆盖、五字段、const）
 *   3. expandConstants()  —— 常数展开（const → NewUIntElement + N×UIntSuccessor 链）
 *   4. format()           —— 规范化缩进与空行（一键整理）
 *
 * ── 常数展开原理 ─────────────────────────────────────────
 *   NewUIntElement 在值域空元素上构造 UInt 元素（初值 0）；
 *   UIntSuccessor 使值域 = 定义域 + 1（见 UIntSuccess.md）。
 *   故 const X = N  ⟹  1 个 NewUIntElement 节点 + N 个 UIntSuccessor 节点。
 *
 * ── 单一源头 / 复用 ──────────────────────────────────────
 *   本文件是**唯一权威实现**，同时供三处使用：
 *     - 浏览器：控制台"脚本工作台"视图（window.LanToolkit）
 *     - Node  ：app/tools/test-lan-toolkit.js（require）
 *     - VSCode：插件 vscode-q_a-lan（由 app/tools/sync-engine.js 同步副本）
 *   因此保持零依赖、纯函数、无 DOM。
 */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.LanToolkit = api;
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this), function () {
  'use strict';

  const VERSION = '0.2.0';

  /* ══════════ 词法：行分类 ══════════ */

  /** 合法节点状态关键字（skill §4） */
  const NODE_STATES = ['Tractable', 'Pending', 'Untractable', 'TraUntractable'];

  /** 参数表合法类型关键字（skill §7） */
  const PI_TYPES = ['String', 'UInt', 'SuperIndex', 'Bool'];

  /** 参数表合法状态关键字（skill §7） */
  const PI_STATES = ['Login', 'Logout', 'Common', 'LoginOut'];

  /** 行的语法类别 */
  const LineKind = {
    EMPTY: 'empty',
    COMMENT: 'comment',       // // 注释
    CONST: 'const',           // const Name = N;（本工具箱扩展，内核不识别）
    BLOCK_OPEN: 'blockOpen',  // {
    BLOCK_CLOSE: 'blockClose',// }
    PAR_OPEN: 'parOpen',      // [
    PAR_CLOSE: 'parClose',    // ]
    PLAIN: 'plain',           // 普通文本行（节点的一段 / 参数表一行）
  };

  const CONST_RE = /^const\s+[A-Za-z_][A-Za-z0-9_]*\s*=\s*\d+\s*;$/;
  const NODE_STATE_RE = new RegExp('^(' + NODE_STATES.join('|') + ')$');

  /** 对源码逐行分类（不处理跨行结构，结构由 parse 栈完成） */
  function classifyLine(raw) {
    const t = String(raw).trim();
    if (t === '') return { kind: LineKind.EMPTY, text: raw };
    if (t.startsWith('//')) return { kind: LineKind.COMMENT, text: raw };
    if (CONST_RE.test(t)) return { kind: LineKind.CONST, text: raw };
    if (t === '{') return { kind: LineKind.BLOCK_OPEN, text: raw };
    if (t === '}') return { kind: LineKind.BLOCK_CLOSE, text: raw };
    if (t === '[') return { kind: LineKind.PAR_OPEN, text: raw };
    if (t === ']') return { kind: LineKind.PAR_CLOSE, text: raw };
    return { kind: LineKind.PLAIN, text: raw };
  }

  /** 解析 const 声明 → { name, value, line }；不匹配返回 null */
  function parseConst(raw) {
    const m = /^const\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(\d+)\s*;$/.exec(String(raw).trim());
    return m ? { name: m[1], value: Number(m[2]) } : null;
  }

  /* ══════════ 结构解析：图块 / 并行块 / 节点 ══════════ */

  /**
   * 把 .lan 源码解析为结构树，同时收集所有问题（不中断）：
   *   lines:    原始行数组
   *   graphs:   { } 图块序列（每块含 nodes / parallels）
   *   consts:   const 声明列表
   *   problems: 结构级问题 { line, message }
   */
  function parse(source) {
    const lines = String(source).split(/\r?\n/);
    const problems = [];
    const consts = [];
    const graphs = [];

    let graph = null;          // 当前 { } 块
    let parallel = null;       // 当前 [] 块
    let nodeLines = [];        // 当前节点累积的非空行 { line, text }
    let stackDepth = 0;        // { 深度（只允许 0/1）

    const flushNode = () => {
      if (!nodeLines.length) return;
      const node = {
        startLine: nodeLines[0].line,
        segments: nodeLines.map((x) => x.text.trim()),
      };
      const container = parallel || graph;
      if (container) container.nodes.push(node);
      nodeLines = [];
    };

    const openParallel = (lineNo) => {
      if (!graph) { problems.push({ line: lineNo, message: '[ 只能出现在 { } 图块内' }); return; }
      if (parallel) { problems.push({ line: lineNo, message: '禁止嵌套 []（skill §5.2 硬性规则）' }); return; }
      parallel = { startLine: lineNo, nodes: [] };
      graph.parallels.push(parallel);
    };
    const closeParallel = (lineNo) => {
      if (!parallel) { problems.push({ line: lineNo, message: '多余的 ]' }); return; }
      if (parallel.nodes.length === 0) problems.push({ line: lineNo, message: '空并行块 []：块内至少要有一个节点' });
      parallel = null;
    };

    lines.forEach((raw, i) => {
      const lineNo = i + 1;
      const { kind, text } = classifyLine(raw);

      switch (kind) {
        case LineKind.CONST: {
          const c = parseConst(text);
          c.line = lineNo;
          consts.push(c);
          break;
        }
        case LineKind.BLOCK_OPEN:
          flushNode();
          if (stackDepth > 0) problems.push({ line: lineNo, message: '图块 { 不能嵌套' });
          stackDepth += 1;
          graph = { startLine: lineNo, nodes: [], parallels: [] };
          graphs.push(graph);
          break;
        case LineKind.BLOCK_CLOSE:
          flushNode();
          if (parallel) { problems.push({ line: lineNo, message: '关闭 } 时并行块 [ 未闭合' }); parallel = null; }
          stackDepth -= 1;
          if (stackDepth < 0) { problems.push({ line: lineNo, message: '多余的 }' }); stackDepth = 0; }
          graph = null;
          break;
        case LineKind.PAR_OPEN:
          flushNode();
          openParallel(lineNo);
          break;
        case LineKind.PAR_CLOSE:
          flushNode();
          closeParallel(lineNo);
          break;
        case LineKind.PLAIN: {
          // 连写括号行（如 `][`、`[[`）整体拆分为括号事件
          const compact = text.replace(/\s+/g, '');
          if (/^[\[\]]+$/.test(compact) && compact.length > 1) {
            flushNode();
            for (const ch of compact) { if (ch === '[') openParallel(lineNo); else closeParallel(lineNo); }
            break;
          }
          nodeLines.push({ line: lineNo, text });
          // 节点固定四段：满 4 段即封口（skill §3）
          if (nodeLines.length === 4) flushNode();
          else if (nodeLines.length > 4) {
            problems.push({ line: lineNo, message: `节点超过四段（第 ${nodeLines.length} 段 "${text}"），四段后应开始下一个节点` });
            flushNode();
            nodeLines = [{ line: lineNo, text }];
          }
          break;
        }
        case LineKind.EMPTY:
        case LineKind.COMMENT:
        default:
          // 空行/注释不打断当前节点累积（节点四段之间允许插入注释与空行）
          break;
      }
    });

    flushNode();
    if (stackDepth > 0) problems.push({ line: lines.length, message: '{ 未闭合' });
    if (parallel) problems.push({ line: lines.length, message: '[ 未闭合' });

    return { lines, graphs, consts, problems };
  }

  /* ══════════ 校验（skill §3 §4 §5 §7） ══════════ */

  /**
   * 校验 .lan 源码与 .pi 参数表。
   * @returns {Array<{line:number, level:'error'|'warn', message:string, pi?:boolean}>}
   */
  function validate(lanSource, piSource) {
    const issues = [];
    const { graphs, consts, problems } = parse(lanSource);

    // 1) 结构问题
    for (const p of problems) issues.push({ line: p.line, level: 'error', message: p.message });

    // 2) 前/后图花括号对
    if (graphs.length === 0 || graphs.length % 2 !== 0) {
      issues.push({ line: 1, level: 'error', message: '顶层必须是成对的 { 前图 } { 后图 } 花括号对' });
    }

    // 3) 节点四段式 + 状态关键字 + 收集参数名
    const usedParams = new Set();
    for (const g of graphs) {
      const checkNode = (node) => {
        if (node.segments.length !== 4) {
          issues.push({
            line: node.startLine, level: 'error',
            message: `节点必须恰好四段（映射名/定义域/值域/状态），当前 ${node.segments.length} 段：${node.segments.join(' ⏎ ')}`,
          });
          return;
        }
        if (!NODE_STATES.includes(node.segments[3])) {
          issues.push({ line: node.startLine + 3, level: 'error', message: `非法节点状态 "${node.segments[3]}"，合法值：${NODE_STATES.join(' / ')}` });
        }
        // 收集参数名：定义域与值域段去掉 () 后按空白拆
        for (const seg of [node.segments[1], node.segments[2]]) {
          for (const tok of seg.replace(/[()]/g, ' ').trim().split(/\s+/).filter(Boolean)) usedParams.add(tok);
        }
      };
      g.nodes.forEach(checkNode);
      for (const p of g.parallels) p.nodes.forEach(checkNode);
    }

    // 4) 参数表校验（skill §7：五字段、类型/状态关键字、覆盖）
    const piLines = String(piSource || '').split(/\r?\n/).filter((l) => l.trim() !== '' && !l.trim().startsWith('//'));
    const declared = new Map(); // 参数名 -> 行号
    piLines.forEach((l, i) => {
      const fields = l.trim().split(/\s+/);
      const lineNo = i + 1;
      if (fields.length !== 5) {
        issues.push({ line: lineNo, level: 'error', message: `参数表行必须恰好 5 个字段（名称/类型/基础信息/语境/状态），当前 ${fields.length} 个`, pi: true });
        return;
      }
      // EmptyElement 为特例（skill §7.1 固定写法：第 2 字段就是 EmptyElement，不属四类型）
      if (fields[0] !== 'EmptyElement') {
        if (!PI_TYPES.includes(fields[1])) issues.push({ line: lineNo, level: 'error', message: `参数表类型 "${fields[1]}" 非法（仅 String/UInt/SuperIndex/Bool）`, pi: true });
        if (!PI_STATES.includes(fields[4])) issues.push({ line: lineNo, level: 'error', message: `参数状态 "${fields[4]}" 非法（仅 Login/Logout/Common/LoginOut）`, pi: true });
      }
      if (declared.has(fields[0])) issues.push({ line: lineNo, level: 'warn', message: `参数 "${fields[0]}" 重复登记（首见第 ${declared.get(fields[0])} 行）`, pi: true });
      declared.set(fields[0], lineNo);
    });

    // 5) 覆盖检查：脚本用到的每个参数（除 EmptyElement）都要登记
    for (const p of usedParams) {
      if (p === 'EmptyElement') continue;
      if (!declared.has(p)) {
        issues.push({ line: 0, level: 'error', message: `参数 "${p}" 未在参数表（.pi）登记：追加一行 "${p} String ${p} Unlimited Login"`, pi: true });
      }
    }

    // 6) const 扩展语法检查（内核不认识 const，展开后才是合法脚本）
    if (consts.length > 0) {
      issues.push({ line: consts[0].line, level: 'warn', message: `检测到 ${consts.length} 条 const 声明 —— 内核不认识它，点「常数展开」生成内核可接受的脚本` });
    }
    const constNames = new Set();
    for (const c of consts) {
      if (constNames.has(c.name)) issues.push({ line: c.line, level: 'warn', message: `常数 "${c.name}" 重复声明` });
      constNames.add(c.name);
      if (declared.has(c.name)) issues.push({ line: c.line, level: 'warn', message: `常数 "${c.name}" 与参数表已有参数重名，展开后会重复登记` });
      if (!usedParams.has(c.name)) issues.push({ line: c.line, level: 'warn', message: `常数 "${c.name}" 声明后未在图块中使用（展开会产生悬空节点）` });
    }

    return issues;
  }

  /* ══════════ 常数展开（解决"没有常数"） ══════════ */

  /**
   * 把 const 声明展开为内核可接受的等价节点。
   * 原理：NewUIntElement 初值 0，UIntSuccessor 使值域 = 定义域 + 1。
   *
   * @param lanSource 含 const 声明的 .lan 源码
   * @param opts.maxValue 展开上限（默认 255，防误写爆图）
   * @returns {{ lan:string, piExtra:string[], expanded:Array<{name,value,nodes:number}>, warnings:string[] }}
   */
  function expandConstants(lanSource, { maxValue = 255 } = {}) {
    const warnings = [];
    const { consts } = parse(lanSource);

    // 1) 删除全部 const 声明行
    let lan = String(lanSource).split(/\r?\n/)
      .filter((raw) => classifyLine(raw).kind !== LineKind.CONST)
      .join('\n');

    const expanded = [];
    const piExtra = [];

    for (const c of consts) {
      if (c.value > maxValue) {
        warnings.push(`const ${c.name} = ${c.value} 超过展开上限 ${maxValue}，已跳过（大数值建议等内核原生常数支持）`);
        continue;
      }
      const nodes = ['NewUIntElement', 'EmptyElement', c.name, 'TraUntractable'];
      for (let k = 0; k < c.value; k++) nodes.push('UIntSuccessor', c.name, c.name, 'TraUntractable');
      // 语义：首节点统一用 TraUntractable；若该常数在图入口被直接使用，使用者可手动改为 Tractable
      expanded.push({ name: c.name, value: c.value, nodes: nodes.length / 4 });
      piExtra.push(`${c.name} UInt ${c.value} Unlimited Login`);
      lan += `\n    // ---- 常数 ${c.name} = ${c.value} 的等价节点序列（1 个 NewUIntElement + ${c.value} 个 UIntSuccessor）----\n`;
      lan += nodes.map((t) => `    ${t}`).join('\n') + '\n';
    }

    return { lan, piExtra, expanded, warnings };
  }

  /* ══════════ 格式化（规范化缩进/空行） ══════════ */

  /**
   * 规范化 .lan 源码：统一行尾、去除行尾空白、按结构重排缩进、压缩连续空行。
   * 保守：只调整每行的前导缩进与空行，不改动行内容。
   */
  function format(source) {
    const lines = String(source).replace(/\r\n?/g, '\n').split('\n');
    const out = [];
    let depth = 0;       // 花括号深度（0/1）
    let blankRun = 0;
    for (const raw of lines) {
      const t = raw.trim();
      if (t === '') { blankRun += 1; if (blankRun <= 1) out.push(''); continue; }
      blankRun = 0;
      const kind = classifyLine(raw).kind;
      if (kind === LineKind.BLOCK_CLOSE) depth = Math.max(0, depth - 1);
      const isBrace = kind === LineKind.BLOCK_OPEN || kind === LineKind.BLOCK_CLOSE;
      out.push('    '.repeat(isBrace ? 0 : depth) + t);
      if (kind === LineKind.BLOCK_OPEN) depth += 1;
    }
    while (out.length && out[0] === '') out.shift();
    while (out.length && out[out.length - 1] === '') out.pop();
    return out.join('\n');
  }

  /* ══════════ 语法高亮（HTML 注入，配合 overlay 渲染） ══════════ */

  const escapeHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  /** 对一行源码产出高亮 HTML（转义安全） */
  function highlightLine(raw) {
    const esc = escapeHtml;
    const { kind, text } = classifyLine(raw);
    const ind = (raw.match(/^\s*/) || [''])[0];
    const body = raw.slice(ind.length);
    if (body === '') return esc(raw);

    switch (kind) {
      case LineKind.COMMENT: return esc(ind) + `<span class="tk-comment">${esc(body)}</span>`;
      case LineKind.CONST: return esc(ind) + `<span class="tk-const">${esc(body)}</span>`;
      case LineKind.BLOCK_OPEN:
      case LineKind.BLOCK_CLOSE: return esc(ind) + `<span class="tk-block">${esc(body)}</span>`;
      case LineKind.PAR_OPEN:
      case LineKind.PAR_CLOSE: return esc(ind) + `<span class="tk-par">${esc(body)}</span>`;
      case LineKind.PLAIN: {
        // 连写括号行（如 `][`）按并行块着色
        if (/^[\[\]]+$/.test(body.replace(/\s+/g, ''))) return esc(ind) + `<span class="tk-par">${esc(body)}</span>`;
        // 状态关键字整行判定（节点第四段）
        if (NODE_STATES.includes(body)) return esc(ind) + `<span class="tk-state">${esc(body)}</span>`;
        // 其余普通行视为映射名 / 参数段
        return esc(ind) + `<span class="tk-plain">${esc(body)}</span>`;
      }
      default: return esc(raw);
    }
  }

  /** 整篇源码 → 高亮 HTML（每行一个换行） */
  function highlight(source) {
    return String(source).split(/\r?\n/).map(highlightLine).join('\n') || ' ';
  }

  /* ══════════ 内置示例 ══════════ */

  const SAMPLE_LAN = `// 庞杂系统 · 解决方案脚本示例（含常数声明）
// 规则依据：solution-script-writing skill
// 写完点「规则校验」「常数展开」试试

{
}
{
    // const 声明：内核不认识，展开后才是合法脚本
    const UIntTen = 10;

    [
        NewUIntElement
        EmptyElement
        UIntA
        Tractable
    ][
        NewUIntElement
        EmptyElement
        UIntB
        Tractable
    ]

    UIntAdd
    ( UIntA UIntB )
    UIntC
    TraUntractable

    ReleaseElement
    EmptyElement
    UIntA
    TraUntractable

    ReleaseElement
    EmptyElement
    UIntB
    TraUntractable

    CMDPutHelloWorld
    EmptyElement
    EmptyElement
    TraUntractable
}
`;

  const SAMPLE_PI = `EmptyElement  EmptyElement  EmptyElement  Unlimited  Common
UIntA String UIntA Unlimited Login
UIntB String UIntB Unlimited Login
UIntC String UIntC Unlimited Login
`;

  /** 无 const 的合法脚本（校验演示：应全部通过） */
  const SAMPLE_LAN_VALID = `// 合法脚本示例（无 const，校验应 0 错误 0 提示）
{
}
{
    NewUIntElement
    EmptyElement
    UIntA
    Tractable

    UIntSuccessor
    UIntA
    UIntA
    TraUntractable

    ReleaseElement
    EmptyElement
    UIntA
    TraUntractable
}
`;

  return {
    VERSION,
    classifyLine, parseConst, parse, validate, expandConstants, format, highlight, highlightLine,
    NODE_STATES, PI_TYPES, PI_STATES,
    SAMPLE_LAN, SAMPLE_PI, SAMPLE_LAN_VALID,
  };
});
