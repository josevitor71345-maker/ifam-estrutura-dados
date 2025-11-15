let n = parseInt(prompt("Digite um número para ver sua tabuada:"));
let tabuada = [];

for (let i = 0; i <= 10; i++) {
  tabuada[i] = n * i;
}

document.writeln("Tabuada de " + n + ":<br>");
document.writeln(tabuada);