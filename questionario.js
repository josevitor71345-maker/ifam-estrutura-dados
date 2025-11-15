let estudantes = parseInt(prompt("Quantas pessoas estão participando da aula remota"))
const participacao = []
for (let i = 0; i<=estudantes; i++){
    participacao[i] = prompt("Você está entendendo os conceitos de vetores?")
}
for (let i = 0; i<estudantes; i++){
    document.writeln(`${participacao[i]}`)
}