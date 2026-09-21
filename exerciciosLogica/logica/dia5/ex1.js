// ## 01 — Conversor de minutos

function converterMinutos(minutos) {

    // Mostrar horas completas e quanots minutos faltam

    let horas = 0;

    horas = Math.floor(minutos / 60);
    let minutosRestantes = minutos - (horas * 60);

    if(minutosRestantes > 1 && horas > 1) {

        console.log(`${minutos} minutos:\n${horas} horas e ${minutosRestantes} minutos\n`);
        
    } else if(minutosRestantes > 1 && horas === 1) {

        console.log(`${minutos} minutos:\n${horas} hora e ${minutosRestantes} minutos\n`);

    } else {

        console.log(`${minutos} minutos:\n${horas} hora e ${minutosRestantes} minuto\n`);

    }
    
};

converterMinutos(121);
converterMinutos(1);