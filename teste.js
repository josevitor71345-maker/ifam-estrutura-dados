// Função para calcular IMC
let peso = prompt("Digite seu peso: ")
let altura = prompt("Digite sua altura: ")
function calcularIMC(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}
// Função para classificar IMC
function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    return "Sobrepeso";
  } else {
    return "Obesidade";
  }
}