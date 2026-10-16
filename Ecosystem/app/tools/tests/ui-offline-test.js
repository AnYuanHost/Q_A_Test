async page => {
  // 离线模式：用纯静态服务（无 /api）复现"后端不可达 → 降级快照"
  // 前置：node app/tools/serve-static.js 3790
  await page.goto('http://localhost:3790/');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'verify-offline-overview.png' });
  const mode = await page.evaluate(() => (typeof DataSource !== 'undefined' ? DataSource.mode : 'DataSource未加载'));
  await page.click("button[data-view='cases']");
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verify-offline-cases.png' });
  const pill = await page.textContent('#mode-pill');
  const link = await page.textContent('#link-mode');
  const caseCards = await page.evaluate(() => document.querySelectorAll('.case-card').length);
  const siRows = await page.evaluate(async () => {
    document.querySelector("button[data-view='superindex']").click();
    await new Promise(r => setTimeout(r, 1500));
    return document.querySelectorAll('#si-table tbody tr').length;
  });
  return JSON.stringify({ dataSourceMode: mode, modePill: pill, linkBadge: link, caseCards, superIndexRows: siRows });
}
