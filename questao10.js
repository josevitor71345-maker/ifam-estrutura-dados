let n = parseInt(prompt("Quantas disciplinas?"));
let notas = [];
let soma = 0;

for (let i = 0; i < n; i++) {
  notas[i] = parseFloat(prompt("Nota da disciplina " + (i + 1) + ":"));
  soma += notas[i];
}

let media = soma / n;
document.writeln("Média geral: " + media.toFixed(2) + "<br>");

if (media >= 6)
  document.writeln("Aprovado!");
else
  document.writeln("Reprovado!");