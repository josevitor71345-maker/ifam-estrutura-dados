let capital = parseFloat(prompt("Informe o valor do capital: R$"))
let taxa = parseFloat(prompt("Informe a taxa de juros (%): "))
let mes = parseInt(prompt("Informe a quantidade de meses: "))
let juros = (capital * taxa * mes)/100;
let montante = capital + juros;
document.writeln(`<br><br> <b>Juros Simples:<b> ${juros.toFixed(2)}<br>
<b>Montante:<b> ${montante.toFixed(2)}`)