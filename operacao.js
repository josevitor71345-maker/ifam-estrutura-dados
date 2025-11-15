function multiplicacao(n1 , n2){
    return n1 * n2
}
function divisao(n1 , n2){
    return n1 / n2
}
function subtracao(n1 , n2){
    return n1 - n2
}
function adicao(n1 , n2){
    return n1 + n2;
}
let operacao = prompt("Operação: \n1. Multiplicação\n2. Divisão\n3. Subtração\n4. Adição")
let n1 = parseFloat(prompt("Informe o primeiro número: "))
let n2 = parseFloat(prompt("Informe o segundo número: "))
switch(operacao){
    case '1':
        document.writeln(`Resultado: ${multiplicacao(n1, n2)}`);break;
        case '2':
            document.writeln(`Resultado: ${divisao(n1, n2)}`);break;
            case '3':
               document.writeln(`Resultado: ${subtracao(n1, n2)}`);break;
               case '4':
                    document.writeln(`Resultado: ${adicao(n1, n2)}`);break;
                default:
                    alert("Opção Invalida")
}