// 07 — Decomposição de Segundos

const segundos = 7384;

const horas = Math.floor(segundos / 3600)
const minutos = Math.floor((segundos % 3600) / 60);
const segundosRestantes = segundos % 60;

console.log(`${segundos} segundos.`);
console.log('Dados: \n');

console.log(`Horas: ${horas}`);
console.log(`Minutos: ${minutos}`);
console.log(`Segundos restantes: ${segundosRestantes}`)