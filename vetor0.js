let numeros = parseInt(prompt("Quantos números?"))
const vetor = []
for(let i = 0; i<numeros; i++){
    vetor[i] = prompt("Informe o número")
}
document.writeln(`<b>Números informados pelo usuário</b><br>`)
for(let i = 0;i < numeros; i++){
    document.writeln(`${vetor[i]}`)
}