// 03 — Conversão de minutos

let minutos = 615;

let horas = Math.floor(minutos / 60);

let minutosRestantes = minutos - (horas * 60);

console.log(`${horas} horas e ${minutosRestantes} minutos.`);