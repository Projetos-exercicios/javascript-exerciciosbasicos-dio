// JavaScript source codelet valor = gets();
/*
let notas = [100, 50, 20, 10, 5, 2, 1];
let contNotas = Array(6);
let valor = 10;

if(valor > 0 && valor < 1000000){
  console.log(valor);
  for(let i = 0; i < notas.length; i++){
      contNotas[i] = Math.trunc(valor / notas[i]);
      valor %= notas[i];
  }
  console.log(contNotas[0] + " nota(s) de R$ 100,00");
  console.log(contNotas[1] + " nota(s) de R$ 50,00");
  console.log(contNotas[2] + " nota(s) de R$ 20,00");
  console.log(contNotas[3] + " nota(s) de R$ 10,00");
  console.log(contNotas[4] + " nota(s) de R$ 5,00");
  console.log(contNotas[5] + " nota(s) de R$ 2,00");
  console.log(contNotas[6] + " nota(s) de R$ 1,00");
}else{
  console.log("Presentation Error");
}
*/
/*
let notas = [100, 50, 20, 10, 5, 2, 1];
let contNotas = [0,0,0,0,0,0,0];
let valor = 10;

if(valor > 0 && valor < 1000000){
  console.log(valor);
  notas.forEach(elem =>{
      contNotas.push(Math.trunc(valor / elem));
      valor %= elem;
   })
  console.log(contNotas[0] + " nota(s) de R$ 100,00");
  console.log(contNotas[1] + " nota(s) de R$ 50,00");
  console.log(contNotas[2] + " nota(s) de R$ 20,00");
  console.log(contNotas[3] + " nota(s) de R$ 10,00");
  console.log(contNotas[4] + " nota(s) de R$ 5,00");
  console.log(contNotas[5] + " nota(s) de R$ 2,00");
  console.log(contNotas[6] + " nota(s) de R$ 1,00");
}else{
  console.log("Presentation Error");
}*/

let notas = [100, 50, 20, 10, 5, 2, 1];
let contNotas = Array(6);
let valor =gets();

if(valor > 0 && valor < 1000000){
  console.log(valor);
  for(let i = 0; i < notas.length; i++){
      contNotas[i] = Math.trunc(valor / notas[i]);
      valor %= notas[i];
  }
  console.log(contNotas[0] + " nota(s) de R$ 100,00");
  console.log(contNotas[1] + " nota(s) de R$ 50,00");
  console.log(contNotas[2] + " nota(s) de R$ 20,00");
  console.log(contNotas[3] + " nota(s) de R$ 10,00");
  console.log(contNotas[4] + " nota(s) de R$ 5,00");
  console.log(contNotas[5] + " nota(s) de R$ 2,00");
  console.log(contNotas[6] + " nota(s) de R$ 1,00");
}else{
  console.log("Presentation Error");
}