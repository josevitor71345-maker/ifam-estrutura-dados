let n = parseInt(prompt("Quantas pessoas serão entrevistadas?"));
let idades = [];
let soma = 0;

for (let i = 0; i < n; i++) {
  idades[i] = parseInt(prompt("Idade da pessoa " + (i + 1) + ":"));
  soma += idades[i];
}

let media = soma / n;
document.writeln("Média das idades: " + media.toFixed(2));