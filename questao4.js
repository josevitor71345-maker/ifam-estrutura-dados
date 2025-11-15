const a = [], b = [], c = []
alert("Preencha o Vetor A:")
for (let i = 0; i<4;i++){
  a[i] = parseInt(prompt())
}
alert("Preencha o Vetor B:")
for (let i =0; i<4;i++){
  b[i] = parseInt(prompt())
}
alert("Produto dos vetores")
for (let i = 0; i<4; i++){
  c[i] = a[i]*b[i]
}
for (let i = 0; i<4; i++){
  document.writeln(c[i])
}