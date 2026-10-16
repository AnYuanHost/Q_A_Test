async page => {
  // 前置：node app/server/server.js（3789）
  await page.goto('http://localhost:3789/');
  await page.waitForTimeout(2500);
  await page.click("button[data-view='issues']");
  await page.waitForTimeout(1500);
  const cards = await page.evaluate(() => document.querySelectorAll('.issue-card').length);
  const summary = await page.textContent('#issue-summary');
  const firstTitle = await page.evaluate(() => {
    const el = document.querySelector('.issue-card .issue-title');
    return el ? el.textContent : null;
  });
  await page.screenshot({ path: 'verify-issues.png' });
  return JSON.stringify({ cards, summary: summary.trim().replace(/\s+/g, ' '), firstTitle });
}
