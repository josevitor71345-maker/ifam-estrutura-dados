let valor, desconto
valor = parseFloat(prompt("Valor do produto: "))
 desconto = (valor*(100-12)/100)
 alert(`Valor do produto com desconto: R$${desconto.toFixed(2)}`)