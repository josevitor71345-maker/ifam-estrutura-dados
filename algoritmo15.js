let episodio  = parseFloat(prompt("Informe a quantidade de episódios: "));
let tempo = parseFloat(prompt("Informe a média de temmpo de cada episódio: "));
let dias = (episodio*tempo)/50;
alert(`Serão necessarios ${Math.ceil(dias)} dias para assistir a série. `)