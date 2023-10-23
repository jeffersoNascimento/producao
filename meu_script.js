const puppeteer = require('puppeteer');

(async () => {
  // Inicialize o navegador Puppeteer
  const browser = await puppeteer.launch();

  // Abra uma nova página
  const page = await browser.newPage();

  // Navegue para a URL da página que você deseja converter em PDF
  await page.goto('https://checklistproducao.netlify.app/');

  // Aguarde um curto período para garantir que todos os recursos sejam carregados
  await page.waitForTimeout(2000);

  // Gere o PDF da página
  await page.pdf({
    path: 'pagina.pdf', // Nome do arquivo de saída
    format: 'A4', // Formato do papel
  });

  // Feche o navegador
  await browser.close();
})();