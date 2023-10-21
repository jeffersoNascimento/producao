
document.getElementById("cliente").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

document.getElementById("ambiente").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

document.getElementById("observacoes").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

document.getElementById("gerarPDF").addEventListener("click", function() {
    const doc = new jsPDF();
    doc.text("Seu conteúdo PDF aqui.", 10, 10); // Adicione seu conteúdo aqui

    // Salvar o PDF no seu computador
    doc.save("meu_documento.pdf");

    // Abrir a tela de impressão
    doc.autoPrint();
    doc.output("dataurlnewwindow");
});

