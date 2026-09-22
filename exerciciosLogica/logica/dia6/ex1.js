// ## 01 — Conversor de minutos

function converterMinutos(minutos) {

    let horas = Math.floor(minutos / 60);
    let minutosRestantes = minutos - (horas * 60);

    if(minutos <= 0) {
        console.log(`Voce deve informar um valor diferente de zero, voce tentou ${minutos}\n\n`)
    } else {
        console.log(`${horas} horas e ${minutosRestantes} minutos\n\n`)
    }

};

converterMinutos(30);
converterMinutos(60);
converterMinutos(1243);
converterMinutos(-14);