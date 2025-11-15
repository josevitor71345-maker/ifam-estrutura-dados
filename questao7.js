let n = parseInt(prompt("Quantos números?"))
const vetor = []
var soma = 0
for (let i =0; i<n; i++){
    vetor[i] = parseInt(Prompt())
    soma += vetor[i]
}
document.writeln(`<br><b>Valores informados:</b><br>${n}`)
for (let i = 0; i<n; i++){
    document.writeln(vetor[i])
}
document.writeln(`<br><b>A soma dos valores informados é igual: ${soma}</b><br>`)