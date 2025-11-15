function fatorial(n) {
  if (n < 0) return "Não existe fatorial de número negativo.";
  if (n === 0 || n === 1) return 1;

  let resultado = 1;
  let passos = "";

  for (let i = n; i >= 1; i--) {
    resultado *= i;
    passos += i + (i > 1 ? " × " : "");
  }

  return `${n}! = ${passos} = ${resultado}`
}

let n = parseInt(prompt("Digite um número:"));
document.writeln(fatorial(n));