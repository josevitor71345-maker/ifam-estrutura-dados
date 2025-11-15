function fac(n){
    return n < 2 ? 1 : n * fac(n-1)
}

let n = parseInt(prompt("Número: "))
document.writeln(`${n}! ${fac(n)}`)