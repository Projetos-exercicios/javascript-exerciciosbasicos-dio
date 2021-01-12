/*let line = [7,-5,6,-3.4,4.6,12]
let total= 0;
let line = gets();*/

let line = new Array(6);
line[0]=gets();
line[1]=gets();
line[2]=gets();
line[3]=gets();
line[4]=gets();
line[5]=gets();


let total= 0;

line.forEach( element =>{
  if(element >= 1) total++
})

console.log(total + " valores positivos");