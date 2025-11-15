let n = parseInt(prompt("Quantos itens deseja registrar?"));
let itens = [];
let valores = [];
let total = 0;

for (let i = 0; i < n; i++) {
  itens[i] = prompt("Nome do item " + (i + 1) + ":");
  valores[i] = parseFloat(prompt("Preço do item " + itens[i] + ":"));
  total += valores[i];
}

document.writeln("<b>Lista de Itens:</b><br>");
for (let i = 0; i < n; i++) {
  document.writeln(itens[i] + " - R$ " + valores[i].toFixed(2) + "<br>");
}
document.writeln("<br><b>Valor total: R$ " + total.toFixed(2) + "</b>");