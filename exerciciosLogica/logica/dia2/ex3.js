// Exercício 03 — Conversão de minutos

let minutos = 135;

let horas = Math.floor(minutos / 60);
minutos = minutos - (horas * 60);

console.log(`${horas} horas e ${minutos} minutos.`)