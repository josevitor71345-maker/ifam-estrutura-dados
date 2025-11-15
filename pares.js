let quantidade = parseInt(prompt("Quantidade de números:"))
var pares = 0, impares = 0
const numeros = []

for (let i = 0; i<quantidade; i++){
    numeros[i] = prompt()
    if (numeros[i] % 2 ==0)
        pares++
    else
        impares++
}
document.writeln(`<b>Números Informados</b><br>`)
for (let i = 0; i<quantidade;i++){
    document.writeln(numeros[i])
}
document.writeln(`<br>Quantidade de pares: ${pares}<br>Quantidade de impares: ${impares}`)