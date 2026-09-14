// ## Exercício 07 — Decompondo segundos
/*
* Horas.
* Minutos.
* Segundos restantes.
*/

let segundos = 7384;

let horas = Math.floor(segundos / 3600);
// console.log(horas); -> 1

segundos = segundos - (horas * 3600);
// console.log(segundos); -> 500

let minutos = Math.floor(segundos / 60);
// console.log(minutos); 8
segundos = segundos - (minutos * 60);

console.log(`Horas: ${horas}`);
console.log(`Minutos: ${minutos}`);
console.log(`Segundos restantes: ${segundos}`);