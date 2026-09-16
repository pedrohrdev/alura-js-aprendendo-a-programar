// 01 — Troca de valores 

let auxiliar = 0;
let a = 10;
let b = 20;

console.log(`=== Antes ===`);
console.log(`Variavel A: ${a}`);
console.log(`Variavel B: ${b}\n`);

auxiliar = a;
a = b;
b = auxiliar;

console.log(`=== Depois ===`);
console.log(`Variavel A: ${a}`);
console.log(`Variavel B: ${b}\n`);
