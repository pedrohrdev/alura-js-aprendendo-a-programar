//## 07 — Estacionamento


// Achar o erro 
function calcularEstacionamento(minutos) {

    // R$ 8,00 por hora completa
    // R$ 2,00 por cada 15 minutos adicionais

    let restante = minutos;

    let horas = Math.floor(minutos / 60);
    restante = restante - (horas * 60);

    let valorHoraTotal = horas * 8;
    let valorAdcionalTotal = 0;

    if(restante === 15) {
        valorAdcionalTotal = 2
    } else if(restante === 30) {
        valorAdcionalTotal = 4
    } else if(restante === 45) {
        valorAdcionalTotal = 6
    };

    let valorTotal = valorHoraTotal + valorAdcionalTotal;

    console.log(`${horas} completa: R$${valorHoraTotal} + ${restante} minutos adcionais: R$${valorAdcionalTotal} = R$${valorTotal}`);

};

calcularEstacionamento(60); // 1 completa: R$8 + 0 minutos adcionais: R$0 = R$8
calcularEstacionamento(75); // 1 completa: R$8 + 15 minutos adcionais: R$2 = R$10
calcularEstacionamento(90); // 1 completa: R$8 + 30 minutos adcionais: R$4 = R$12
calcularEstacionamento(105); // 1 completa: R$8 + 45 minutos adcionais: R$6 = R$14 // olha copilot: nesta linha no terminal retornou 8, porque?
calcularEstacionamento(120); // 2 completa: R$16 + 0 minutos adcionais: R$0 = R$16
calcularEstacionamento(122);  // 2 completa: R$16 + 2 minutos adcionais: R$0 = R$16