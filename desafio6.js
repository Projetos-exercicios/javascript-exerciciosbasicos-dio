// JavaScript source code

/*line[0] = -5;
line[1] = 0;
line[2] = -3;
line[3] = -4;
line[4] = 12;
*/

let line = new Array(5);
line[0]=gets();
line[1]=gets();
line[2]=gets();
line[3]=gets();
line[4]=gets();

let element = 0;
let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

line.forEach( element =>{
	if(isNaN(element) === false){
		if(element % 2 === 0) pares++
		if(element % 2 !== 0) impares++
		if(element > 0) positivos++
		if(element <0) negativos++
  }
})
  console.log(pares + " valor(es) par(es)");  
  console.log(impares + " valor(es) impar(es)"); 
  console.log(positivos + " valor(es) positivo(s)"); 
  console.log(negativos + " valor(es) negativo(s)"); 
