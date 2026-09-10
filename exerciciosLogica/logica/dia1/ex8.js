// Cedulas
// 100, 50, 20, 10, 5, 2 e 1

let valor = 435;

const cedulaDeCem = Math.floor(valor / 100);
valor = valor % 100;

const cedulaDeCinquenta = Math.floor(valor / 50);
valor = valor % 50;

const cedulaDeVinte = Math.floor(valor / 20);
valor = valor % 20;

const cedulaDeDez = Math.floor(valor / 10);
valor = valor % 10;

const cedulaDeCinco = Math.floor(valor / 5);
valor = valor % 5;

const cedulaDeDois = Math.floor(valor / 2);
valor = valor % 2;


const cedulaDeUm = Math.floor(valor / 1);
valor = valor % 1;

console.log(`Notas de 100: ${cedulaDeCem}`);
console.log(`Notas de 50: ${cedulaDeCinquenta}`);
console.log(`Notas de 20: ${cedulaDeVinte}`);
console.log(`Notas de 10: ${cedulaDeDez}`);
console.log(`Notas de 5: ${cedulaDeCinco}`);
console.log(`Notas de 2: ${cedulaDeDois}`);
console.log(`Notas de 1: ${cedulaDeUm}`);