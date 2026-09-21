// ## 04 — Converter segundos

function converterSegundos(segundos) {
    let horas = Math.floor((segundos / 60) / 60);
    let minutos = Math.floor((segundos / 60) - (horas * 60));
    let segundosRestantes = segundos - (((horas * 60) * 60) + (minutos * 60));

    console.log(`${horas}hr ${minutos}m ${segundosRestantes}s`)
};

converterSegundos(3666);
converterSegundos(158283);