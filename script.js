
document.getElementById("cliente").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

document.getElementById("ambiente").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

document.getElementById("observacoes").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

const btnGenerate = document.querySelector("#gerarPDF")

btnGenerate.addEventListener("click", () => {

    //Conteúdo do pdf
    const content = document.querySelector("#content")

    //Configuração do arquivo final do pdf
    const options = {
        filename: "Checklist_Produção.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"},
        200: "Conversão bem sucedida",
        400: "Você não especificou um URL nem HTML para converter"
}

    //Gerar e baixar PDF
    html2pdf().set(options).from(content).save();

    window.print()
})


/*function imprimirPagina() {

    // Criar um novo objeto jsPDF
    var pdf = new jsPDF();

    // Adicionar conteúdo à página PDF
    pdf.text("Exemplo de Página em Branco", 10, 10);
    pdf.text("Este é um exemplo de conteúdo em uma página em branco.", 10, 20);

    // Salvar o PDF como um arquivo localmente
    pdf.save('checklist.pdf');
}
*/



  
  


