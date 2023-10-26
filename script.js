document.getElementById("cliente").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

document.getElementById("ambiente").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

document.getElementById("observacoes").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

document.getElementById("responsavel").addEventListener("input", function(){
    this.value = this.value.toUpperCase();
});

const textarea = document.getElementById("ambiente");
const textarea2 = document.getElementById("observacoes");

textarea.addEventListener('input', function() {
  this.style.height = 'auto'; // Redefina a altura para auto
  this.style.height = (this.scrollHeight) + 'px'; // Defina a altura com base no conteúdo
});

textarea2.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});


const btnGenerate = document.querySelector("#gerarPDF");

btnGenerate.addEventListener("click", () => {
    // Obter o valor do campo "cliente" quando o botão é clicado
    const cliente = document.getElementById("cliente").value;

    // Obter a data atual e formatá-la como "dd-mm-aaaa"
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0'); // Formato de dois dígitos
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Mês começa em 0
    const year = currentDate.getFullYear();

    const data = `${day}-${month}-${year}`;

    // Conteúdo do PDF
    const content = document.querySelector("#content");

    // Configuração do arquivo final do PDF
    const options = {
        filename: `Checklist_Produção_${cliente}_${data}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Gerar e baixar o PDF
    html2pdf().set(options).from(content).save();
   
});