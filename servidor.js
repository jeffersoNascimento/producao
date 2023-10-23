const http = require('http');
const { exec } = require('child_process');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/generate-pdf') {
    // Execute o script Node.js para gerar o PDF
    exec('node meu_script.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro na execução do script: ${error}`);
        return;
      }
      // Envie o arquivo PDF como resposta
      const pdfFile = fs.readFileSync('pagina.pdf');
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=pagina.pdf');
      res.end(pdfFile);
    });
  } else {
    res.end('Servidor Node.js em execução');
  }
});

server.listen(3000, () => {
  console.log('Servidor Node.js está ouvindo na porta 3000');
});
