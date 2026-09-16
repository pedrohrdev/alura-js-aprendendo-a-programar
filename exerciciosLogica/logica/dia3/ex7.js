// 07 — Troca de valores

let a = 10;
let b = 20;
let auxiliar = 0;

console.log(`===== Antes =====`);
console.log(`Variavel A: ${a}`);
console.log(`Variavel B: ${b}`);

auxiliar = a;
a = b;
b = auxiliar

console.log(`===== Depois =====`);
console.log(`Variavel A: ${a}`);
console.log(`Variavel B: ${b}`);