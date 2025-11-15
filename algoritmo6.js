let pessoas, valor, show
pessoas = parseInt(prompt("Informe a quamtidade de pessoas: "))
show = parseFloat(prompt("Informe o valor do Show: "))
valor = show/pessoas
alert(`Valor: R$${valor.toFixed(2)}`)