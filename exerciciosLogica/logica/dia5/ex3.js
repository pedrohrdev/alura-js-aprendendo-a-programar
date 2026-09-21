// ## 03 — Idade em dias

function idadeEmDias(anos, meses, dias) {

    let diasVividos = 0;

    let anosEmDias = anos * 365;
    let mesesEmDias = meses * 30;

    diasVividos = anosEmDias + mesesEmDias + dias;

    return diasVividos;

};

console.log(idadeEmDias(16, 5, 11))

// calcular quantos dias uma pessoa viveu, sem contar os bissestos