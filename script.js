
document.getElementById("cliente").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

document.getElementById("ambiente").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

document.getElementById("observacoes").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

function imprimirPagina() {
    window.print(); // Chama o diálogo de impressão do navegador 
    
    fetch('http://localhost:3000/generate-pdf')
  .then(response => response.blob())
  .then(blob => {
    // Crie um link para download do PDF
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pagina.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  });
}
