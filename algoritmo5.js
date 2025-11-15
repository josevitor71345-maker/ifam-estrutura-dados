/* let grama, preco 
grama=prompt("Informe o peso em gramas: ")
preco=(grama*45)/1000
alert(`Valor final: R$ ${preco} `) */
let peso=parseFloat(prompt("Peso "))
let price=(peso*45)/1000
alert(`Valor final: R$${price.toFixed}`)