function converterSegundos(segundos) {

    // Horas, minutos, segundos

    let horas = Math.floor((segundos / 60) / 60);
    let minutos = Math.floor(segundos / 60 - (horas * 60));

    // Transformando horas em minutos, depois os minutos em segundos, dai os minutos em segundos
    let segundosRestantes = segundos - (((horas * 60) * 60) + (minutos * 60));

    console.log(`Segundos: ${segundos}`);
    console.log(`Horas: ${horas}`);
    console.log(`Minutos: ${minutos}`);
    console.log(`Segundos: ${segundosRestantes}\n`)
}

converterSegundos(3665);
converterSegundos(231);
converterSegundos(532412);
