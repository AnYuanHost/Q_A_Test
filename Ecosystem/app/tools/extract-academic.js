/**
 * 外部参考资料提取器：把 .doc / .docx 转成可检索的 Markdown 纯文本，归档到 `参考资料\`。
 *
 * 说明：本资料仅作**内核设计思想参考**，不属于本项目，且**不随交付/PR 分发**；
 *       提取时自动去除个人隐私信息（姓名、学校、学号等）。
 *
 * - .docx：解压 word/document.xml 提取 <w:t>（UTF-8 干净），解压用 PowerShell Expand-Archive。
 * - .doc ：用 word-extractor（旧版 OLE 二进制）。
 *
 * 用法：node app/tools/extract-academic.js [--keep]
 *   .doc 依赖 word-extractor，可用 NODE_PATH 指向其 node_modules。
 */
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..', '..');
const ARCHIVE = path.join(ROOT, '参考资料');
const KEEP = process.argv.includes('--keep');

/** 仅提取技术资料（论文/设计文档）；不含行政表格 */
const FILES = [
  {
    key: '内核设计参考.md',
    title: '内核设计参考（外部资料，仅供思想参考）',
    base: '基于C++的知识管理系统与推理引擎.docx',
    desc: '外部参考资料：内核设计思想与理论路线；非本项目材料，请勿外发',
  },
];

/** 隐私脱敏（仅作用于生成文本，不改动原件） */
const REDACT = [
  [/赵一强/g, '（作者）'],
  [/陈宇/g, '（指导教师）'],
  [/青岛大学/g, '（学校）'],
  [/2021204478/g, '（学号）'],
  [/计算机科学与技术学院/g, '（学院）'],
  [/计算机科学技术学院/g, '（学院）'],
];
const redact = (s) => REDACT.reduce((acc, [re, to]) => acc.replace(re, to), s);

/** 在根目录或 参考资料\ 中定位源文件 */
function locate(base) {
  for (const dir of [path.join(ROOT, base), path.join(ARCHIVE, base)]) {
    if (fs.existsSync(dir)) return dir;
  }
  return null;
}

const unescapeXml = (s) => s
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
  .replace(/&amp;/g, '&');

/** 解析 .docx：解压取 word/document.xml，按段落抽取文本 */
function fromDocx(file) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'qa-docx-'));
  const zip = path.join(tmp, 'd.zip');
  fs.copyFileSync(file, zip);
  const outDir = path.join(tmp, 'x');
  execFileSync('powershell', ['-NoProfile', '-NonInteractive', '-Command',
    `Expand-Archive -LiteralPath '${zip}' -DestinationPath '${outDir}' -Force`], { stdio: 'pipe' });
  const xml = fs.readFileSync(path.join(outDir, 'word', 'document.xml'), 'utf8');
  const paras = xml.split(/<w:p[ >]/).map((seg) => {
    const texts = [...seg.matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)].map((m) => m[1]);
    return unescapeXml(texts.join(''));
  });
  fs.rmSync(tmp, { recursive: true, force: true });
  return paras.join('\n');
}

/** 解析 .doc：word-extractor */
function fromDoc(file) {
  let WordExtractor;
  try { WordExtractor = require('word-extractor'); }
  catch { throw new Error('缺少依赖 word-extractor。请先 `npm i word-extractor`，或用 NODE_PATH 指向其安装目录。'); }
  return new WordExtractor().extract(file).then((doc) => doc.getBody());
}

const clean = (text) => redact(text)
  .replace(/\uFFFD/g, '�')
  .replace(/\r\n?/g, '\n')
  .replace(/[ \t]+\n/g, '\n')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

(async () => {
  fs.mkdirSync(ARCHIVE, { recursive: true });
  for (const f of FILES) {
    const src = locate(f.base);
    if (!src) { console.log(`跳过（未找到）：${f.base}`); continue; }
    let body;
    try {
      body = f.base.endsWith('.docx') ? fromDocx(src) : await fromDoc(src);
    } catch (e) {
      console.log(`提取失败：${f.base} -> ${e.message}`);
      continue;
    }
    const md = `# ${f.title}\n\n> ${f.desc}\n` +
      `> 由 \`app/tools/extract-academic.js\` 提取并脱敏；如有出入以原件为准。\n\n---\n\n` + clean(body) + '\n';
    const dest = path.join(ARCHIVE, f.key);
    fs.writeFileSync(dest, md, 'utf8');
    console.log(`已生成 ${path.relative(ROOT, dest)}  （${body.length} 字符）`);
    if (!KEEP && path.dirname(src) === ROOT) {
      fs.renameSync(src, path.join(ARCHIVE, f.base));
      console.log(`  原件已归档 -> 参考资料\\${f.base}`);
    }
  }
})();
