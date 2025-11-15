let valor, acrescimo
valor = parseFloat(prompt("Valor do produto: "))
 acrescimo = (0.30*valor)+valor
 alert(`Valor do produto com acrescimo: R$${acrescimo.toFixed(2)}`)