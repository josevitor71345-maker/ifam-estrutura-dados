let n = parseInt(prompt("Quantos números deseja digitar?"));
let numeros = [];
for (let i = 0; i < n; i++) {
  numeros[i] = parseInt(prompt(`Digite o ${i+1}° Número:`));
}

document.writeln("Ordem inversa:<br>");
for (let i = n - 1; i >= 0; i--) {
  document.writeln(numeros[i] + " ");
}