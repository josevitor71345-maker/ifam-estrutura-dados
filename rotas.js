do{
let rota = prompt("Rota\n 1. Rota A\n 2. Rota B")
switch(rota){
  case '1':
alert("Você é da rota A");
break;
  case '2':
   alert("Você é da rota B")
   break;
   default:
    alert(`A rota ${rota} não existe.`);
}
}while (rota != '123')