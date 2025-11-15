let n = parseInt(prompt("Quantos números terá o vetor?"));
let vetor = [];
let pares = 0;

for (let i = 0; i < n; i++) {
  vetor[i] = parseInt(prompt("Digite o número " + (i + 1) + ":"));
  if (vetor[i] % 2 === 0) pares++;
}

document.writeln("Vetor: " + vetor + "<br>");
document.writeln("Quantidade de pares: " + pares);