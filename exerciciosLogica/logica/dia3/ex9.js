//  09 — Tempo total - transforamar tudo em segundos, horas, minutos e segundos 

let horas = 2;
let minutos = 30;
let segundos = 15;

let tempoTotal = 0;
tempoTotal = (horas * 60) * 60;
tempoTotal += (minutos) * 60;
tempoTotal += segundos

console.log(`Horas: ${horas}`);
console.log(`Minutos: ${minutos}`);
console.log(`Segundos: ${segundos}`);

console.log(`Tempo total: ${tempoTotal}`);
console.log(`========================================\n`)
// Fazendo o inverso ======================================================
let segundosTotais = 9015;
let minutosTotais = Math.floor(segundosTotais / 60);
let horasTotais = Math.floor((segundosTotais / 60) / 60);

let minutosQueSobram = Math.floor(minutosTotais - (horasTotais * 60));
let segundosQueSobram = Math.floor(segundosTotais - (((horasTotais * 60) * 60) + (minutosQueSobram * 60)))

/*
* horas;
* minutos;
* segundos
*/

console.log(`${segundosTotais} segundos tem:`)
console.log(`${horasTotais} horas`);
console.log(`${minutosQueSobram} minutos`);
console.log(`${segundosQueSobram} segundos`)

