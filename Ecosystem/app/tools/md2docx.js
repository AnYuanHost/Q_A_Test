/**
 * Markdown → Word(.docx) 转换器（零第三方解析器，仅依赖 docx）
 *
 * 支持：封面（首个 # 标题 + 紧随的 > 引用块）、##/###/#### 章节、段落、无序/有序列表、
 *       表格、引用、分隔线、**加粗**、`代码`。
 * 排版：A4、页边距、宋体正文两端对齐首行缩进 2 字、黑体标题（一级带下框线）、页脚页码。
 *
 * 用法：
 *   set NODE_PATH=<npm root -g>
 *   node app/tools/md2docx.js <输入.md> [输出.docx]
 */
'use strict';

const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageNumber, Footer, PageBreak,
} = require('docx');

const SONG = { ascii: 'Times New Roman', eastAsia: '宋体', hAnsi: 'Times New Roman', cs: 'Times New Roman' };
const HEI = { ascii: 'Arial', eastAsia: '黑体', hAnsi: 'Arial', cs: 'Arial' };
const MONO = { ascii: 'Consolas', eastAsia: '宋体', hAnsi: 'Consolas', cs: 'Consolas' };
const CONTENT_W = 9026;
const GREY = '595959';

/** 行内解析：**加粗** 与 `代码` */
function runs(text, base = { font: SONG, size: 21 }) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(new TextRun({ ...base, text: text.slice(last, m.index) }));
    const tk = m[0];
    if (tk.startsWith('**')) out.push(new TextRun({ ...base, text: tk.slice(2, -2), bold: true }));
    else out.push(new TextRun({ ...base, text: tk.slice(1, -1), font: MONO }));
    last = m.index + tk.length;
  }
  if (last < text.length) out.push(new TextRun({ ...base, text: text.slice(last) }));
  return out.length ? out : [new TextRun({ ...base, text: '' })];
}

const BORDER = { style: BorderStyle.SINGLE, size: 1, color: 'BFBFBF' };
const BORDERS = { top: BORDER, bottom: BORDER, left: BORDER, right: BORDER };
const HEAD_RULE = { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'BFBFBF', space: 4 } };

function buildTable(rows) {
  const cols = Math.max(...rows.map((r) => r.length));
  const w = Math.floor(CONTENT_W / cols);
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: Array(cols).fill(w),
    rows: rows.map((cells, ri) => new TableRow({
      tableHeader: ri === 0,
      children: Array.from({ length: cols }, (_, ci) => new TableCell({
        borders: BORDERS,
        width: { size: w, type: WidthType.DXA },
        shading: ri === 0 ? { fill: 'DCE6F1', type: ShadingType.CLEAR } : undefined,
        margins: { top: 60, bottom: 60, left: 110, right: 110 },
        verticalAlign: 'center',
        children: [new Paragraph({
          spacing: { line: 260, after: 0 },
          alignment: ri === 0 ? AlignmentType.CENTER : AlignmentType.LEFT,
          children: runs(cells[ci] || '', { font: SONG, size: 18 }),
        })],
      })),
    })),
  });
}

/** 提取封面（首个 # 标题 + 紧随的 > 信息块），返回 { title, info[], bodyLines } */
function splitCover(lines) {
  let title = null;
  const info = [];
  let i = 0;
  while (i < lines.length && lines[i].trim() === '') i++;
  const m = /^#\s+(.*)$/.exec((lines[i] || '').trim());
  if (!m) return { title: null, info, bodyLines: lines };
  title = m[1].trim();
  i++;
  while (i < lines.length && lines[i].trim() === '') i++;
  while (i < lines.length && lines[i].trim().startsWith('>')) { info.push(lines[i].trim().replace(/^>\s?/, '')); i++; }
  return { title, info, bodyLines: lines.slice(i) };
}

function convert(md) {
  const allLines = md.replace(/\r\n?/g, '\n').split('\n');
  const { title, info, bodyLines } = splitCover(allLines);
  const children = [];

  if (title) {
    children.push(new Paragraph({ spacing: { before: 2600, after: 300 }, alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: title, font: HEI, size: 44, bold: true })] }));
    for (const line of info) {
      children.push(new Paragraph({ spacing: { after: 120 }, alignment: AlignmentType.CENTER,
        children: runs(line, { font: SONG, size: 22, color: GREY }) }));
    }
    children.push(new Paragraph({ children: [new PageBreak()] }));
  }

  const lines = bodyLines;
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();

    if (line === '') { i++; continue; }
    if (line === '---' || line === '***') { i++; continue; }

    let m;
    if ((m = /^(#{1,4})\s+(.*)$/.exec(line))) {
      const level = m[1].length;
      const text = m[2].trim();
      const levelMap = { 1: 30, 2: 26, 3: 22, 4: 21 };
      const size = levelMap[level] || 21;
      const heading = level <= 2 ? HeadingLevel.HEADING_1 : level === 3 ? HeadingLevel.HEADING_2 : HeadingLevel.HEADING_3;
      children.push(new Paragraph({
        heading,
        spacing: { before: level === 1 ? 320 : 220, after: level === 1 ? 160 : 110 },
        border: level === 1 ? HEAD_RULE : undefined,
        children: [new TextRun({ text, font: HEI, size, bold: true })],
      }));
      i++; continue;
    }

    if (line.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const cells = lines[i].trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
        if (!cells.every((c) => /^-{2,}$/.test(c) || c === '')) rows.push(cells);
        i++;
      }
      if (rows.length) children.push(buildTable(rows));
      continue;
    }

    if (line.startsWith('> ')) {
      children.push(new Paragraph({ spacing: { line: 320, after: 120 }, indent: { left: 360 },
        children: runs(line.slice(2).trim(), { font: SONG, size: 19, color: GREY }) }));
      i++; continue;
    }

    if (/^[-*]\s+/.test(line)) {
      children.push(new Paragraph({ numbering: { reference: 'bullets', level: 0 }, spacing: { line: 340, after: 80 },
        children: runs(line.replace(/^[-*]\s+/, '')) }));
      i++; continue;
    }

    if (/^\d+[.)]\s+/.test(line)) {
      children.push(new Paragraph({ numbering: { reference: 'nums', level: 0 }, spacing: { line: 340, after: 80 },
        children: runs(line.replace(/^\d+[.)]\s+/, '')) }));
      i++; continue;
    }

    const buf = [line];
    i++;
    while (i < lines.length && lines[i].trim() !== '' && !/^(#{1,4}\s|\||>\s|[-*]\s|\d+[.)]\s)/.test(lines[i].trim())) {
      buf.push(lines[i].trim()); i++;
    }
    children.push(new Paragraph({
      spacing: { line: 360, after: 120 },
      alignment: AlignmentType.JUSTIFIED,
      indent: { firstLine: 420 },
      children: runs(buf.join('')),
    }));
  }
  return children;
}

function main() {
  const input = process.argv[2];
  if (!input) { console.error('用法：node app/tools/md2docx.js <输入.md> [输出.docx]'); process.exit(1); }
  const out = process.argv[3] || input.replace(/\.md$/i, '.docx');
  const children = convert(fs.readFileSync(input, 'utf8'));

  const doc = new Document({
    styles: {
      default: { document: { run: { font: SONG, size: 21 } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: 30, bold: true, font: HEI }, paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: 26, bold: true, font: HEI }, paragraph: { spacing: { before: 220, after: 110 }, outlineLevel: 1 } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: 22, bold: true, font: HEI }, paragraph: { spacing: { before: 180, after: 90 }, outlineLevel: 2 } },
      ],
    },
    numbering: {
      config: [
        { reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 420, hanging: 220 } } } }] },
        { reference: 'nums', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 420, hanging: 240 } } } }] },
      ],
    },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: ['— ', PageNumber.CURRENT, ' —'], font: SONG, size: 18, color: '808080' })] })] }) },
      children,
    }],
  });

  Packer.toBuffer(doc).then((buf) => {
    fs.writeFileSync(out, buf);
    console.log(`已生成 ${out}（${buf.length} 字节，${children.length} 个块）`);
  });
}

if (require.main === module) main();
module.exports = { convert };
