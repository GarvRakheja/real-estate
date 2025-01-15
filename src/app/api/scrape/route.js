import puppeteer from 'puppeteer';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city');
  const url = `https://www.magicbricks.com/new-projects-${city}`;

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
    );

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 0 });
    await page.waitForSelector('.projdis__prjcard, .mghome__prjblk__prjname', { timeout: 10000 });

    const projects = await page.evaluate(() => {
      const items = [];
      document.querySelectorAll('.projdis__prjcard').forEach((el) => {
        const projectName = el.querySelector('.mghome__prjblk__prjname')?.innerText.trim();
        const location = el.querySelector('.mghome__prjblk__locname')?.innerText.trim();
        const priceRange = el.querySelector('.mghome__prjblk__price')?.innerText.trim();

        if (projectName && location && priceRange) {
          items.push({ projectName, location, priceRange });
        }
      });
      return items;
    });

    console.log(projects);

    await browser.close();
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    console.error('Error scraping the site:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
