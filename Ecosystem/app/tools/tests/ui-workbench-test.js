async page => {
  // 前置：node app/server/server.js（3789）
  await page.goto('http://localhost:3789/#script');
  await page.waitForTimeout(2500);
  // 深链已进入脚本工作台；再点一次确保渲染
  await page.click("button[data-view='script']");
  await page.waitForTimeout(800);
  // 规则校验
  await page.click('#ws-validate');
  await page.waitForTimeout(500);
  const issueCount = await page.textContent('#ws-issue-count');
  const issueItems = await page.evaluate(() => document.querySelectorAll('.issue-item').length);
  // 常数展开
  await page.click('#ws-expand');
  await page.waitForTimeout(600);
  const expandVisible = await page.evaluate(() => !document.querySelector('#ws-expand-box').hidden);
  const expandText = await page.evaluate(() => document.querySelector('#ws-expand-lan').textContent);
  const piExtra = await page.evaluate(() => document.querySelector('#ws-pi-extra').textContent);
  await page.screenshot({ path: 'verify-workbench.png', fullPage: false });
  // 高亮 token 检查
  const tokens = await page.evaluate(() => ({
    state: document.querySelectorAll('#ws-lan-hl .tk-state').length,
    par: document.querySelectorAll('#ws-lan-hl .tk-par').length,
    const: document.querySelectorAll('#ws-lan-hl .tk-const').length,
    comment: document.querySelectorAll('#ws-lan-hl .tk-comment').length,
  }));
  // 编辑脚本：制造一个错误（删掉参数表一行）再校验
  await page.evaluate(() => {
    document.querySelector('#ws-pi').value = 'EmptyElement  EmptyElement  EmptyElement  Unlimited  Common\nUIntA String UIntA Unlimited Login';
    document.querySelector('#ws-pi').dispatchEvent(new Event('input'));
  });
  await page.click('#ws-validate');
  await page.waitForTimeout(400);
  const issueCount2 = await page.textContent('#ws-issue-count');
  return JSON.stringify({
    issueCount, issueItems, expandVisible,
    hasSuccessor10: expandText.split('\n').filter((l) => l.trim() === 'UIntSuccessor').length === 10,
    piExtraHasUIntTen: piExtra.includes('UIntTen UInt 10 Unlimited Login'),
    tokens, issueCount2,
  });
}
