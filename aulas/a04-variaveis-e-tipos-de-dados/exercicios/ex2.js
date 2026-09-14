/*
2. Cálculo de idade
Crie duas variáveis: anoAtual e anoNascimento.
Calcule a idade da pessoa subtraindo os valores
e exiba no console: "Você tem [idade] anos."
*/

const date = new Date();
let anoAtual = date.getFullYear();

// console.log(anoAtual) retorna 2026

const anoDascimento = 2010;

let idadeUsuario = anoAtual - anoDascimento;

console.log(`Você tem ${idadeUsuario} anos.`)