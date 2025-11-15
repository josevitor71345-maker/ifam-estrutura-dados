let n = parseInt(prompt("Quantos números?"))
const sequencia = []
for(let i = 0; i<n; i++){
    sequencia[i] = parseInt(prompt(""))
}
document.writeln(`<b>Ordem Digitada:</b><br>`)
for (let i = 0; i<n; i++){
    document.writeln(sequencia[i])
}
document.writeln("<br><b>Ordem Reversa:</b><br>")
for (let i = 0; i<n; i++){
    document.writeln(sequencia[n-1-i])
}