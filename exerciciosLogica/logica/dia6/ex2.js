function idadeEmDias(anosVividos, mesesVividos, diasVividos) {

    let anosEmDias = anosVividos * 365;
    let mesesEmDias = mesesVividos * 30;
    
    let totalDiasVividos = anosEmDias + mesesEmDias + diasVividos;

    if(totalDiasVividos < 0) {
        console.log("Idade inválida");
    } else {
        console.log(`Você já viveu ${totalDiasVividos} dias.`);
    }

};

idadeEmDias(16, 5, 2);
idadeEmDias(38, 7, 0);
idadeEmDias(1, 1, 1);
idadeEmDias(-1, -1, -1);