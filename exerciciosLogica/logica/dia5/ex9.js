// ## 09 — Relógio digital

function relogioDigital(segundos) {
    
    let restante = segundos;

    let horas = Math.floor((restante / 60) / 60);
    restante = restante - ((horas * 60) * 60); // restante em segundos

    let minutos = Math.floor(restante / 60);
    restante = restante - (minutos * 60)

    let segundosRestantes = restante;

    const horasFormatadas = String(horas).padStart(2, '0');
    const minutosFormatados = String(minutos).padStart(2, '0');
    const segundosFormatados = String(segundosRestantes).padStart(2, '0');

    console.log(`${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`);

};

relogioDigital(57923);
relogioDigital(123);
relogioDigital(1);
relogioDigital(8752);