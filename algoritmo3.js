let paginas,dias
paginas=prompt("Informe total de páginas: ")
dias=prompt("Dias de leitura: ")
paginas=paginas/dias
alert(`Quantidade média de páginas lidas por dias: ${Math.ceil(paginas)}`)