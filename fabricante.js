function minhaFuncao(objeto) {
  objeto.fabricante = "Civic"; // altera o fabricante para Toyota
}

var meuCarro = {
  fabricante: "Honda",
  modelo: "Civic",
  ano: 1998
};

var x, y, z;

x = meuCarro.fabricante; // x recebe "Honda"
minhaFuncao(meuCarro);   // altera o fabricante
y = meuCarro.fabricante; // y recebe "Toyota"
z = meuCarro.ano;        // z recebe o ano 1998

// Mostra os resultados
document.writeln(`Fabricante:  ${x} <br>`);
document.writeln(`Modelo: ${y} <br>`);
document.writeln(`Ano do carro: ${z} <br>`);