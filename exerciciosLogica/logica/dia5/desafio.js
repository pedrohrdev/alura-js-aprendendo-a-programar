function fecharCompra(preco, valorPago) {

    let valorTroco = valorPago - preco;

    if(valorTroco < 0) {
        console.log(`O valor pago é insuficiente para a compra. Faltam R$ ${Math.abs(valorTroco).toFixed(2)}\n\n`);
    }

    let cedulas = [100, 50, 20, 10, 5, 2, 1];
    let restanteTroco = valorTroco;

    let cedulasDeCem = Math.floor(valorTroco / cedulas[0]);
    restanteTroco -= cedulasDeCem * cedulas[0];

    let cedulasDeCinquenta = Math.floor(restanteTroco / cedulas[1]);
    restanteTroco -= cedulasDeCinquenta * cedulas[1];

    let cedulasDeVinte = Math.floor(restanteTroco / cedulas[2]);
    restanteTroco -= cedulasDeVinte * cedulas[2];

    let cedulasDeDez = Math.floor(restanteTroco / cedulas[3]);
    restanteTroco -= cedulasDeDez * cedulas[3];

    let cedulasDeCinco = Math.floor(restanteTroco / cedulas[4]);
    restanteTroco -= cedulasDeCinco * cedulas[4];

    let cedulasDeDois = Math.floor(restanteTroco / cedulas [5]);
    restanteTroco -= cedulasDeDois * cedulas[5];

    let cedulasDeUm = Math.floor(restanteTroco / cedulas[6]);
    restanteTroco -= cedulasDeUm * cedulas[6];

    console.log(`Troco = ${preco} - ${valorPago} = ${valorTroco} `);

    console.log(`Notas de R$ 100: ${cedulasDeCem}`);
    console.log(`Notas de R$ 50: ${cedulasDeCinquenta}`);
    console.log(`Notas de R$ 20: ${cedulasDeVinte}`);
    console.log(`Notas de R$ 10: ${cedulasDeDez}`);
    console.log(`Notas de R$ 5: ${cedulasDeCinco}`);
    console.log(`Notas de R$ 2: ${cedulasDeDois}`);
    console.log(`Notas de R$ 1: ${cedulasDeUm}\n\n`);
};

fecharCompra(150, 200);
fecharCompra(150, 100);
fecharCompra(150, 150);