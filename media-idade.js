let entrevistados = parseInt(prompt("Quantas pessoas serão entrevistadas?"))
const idade = []
var media = 0
for (let i = 0; i<entrevistados; i++){
    idade[i] = parseInt(prompt("Informe a idade:"))
    media+=idade[i] //Soma = media/entrevistados
}
document.writeln(`<b>Idades Informadas:</b><br>`)
for (let i = 0; i<entrevistados; i++){
    document.writeln(idade[i])
}
document.writeln(`<br>Média de idades das pessoas entrevistadas: ${media/entrevistados.toFixed(1)}`)