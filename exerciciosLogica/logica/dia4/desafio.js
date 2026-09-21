// ```text
// 100
// 50
// 20
// 10
// 5
// 2
// 1
// 0.50
// 0.25
// 0.10
// 0.05
// 0.01
// ```

function calcularTroco(preco, valorPago) {

    let troco = 0;
    let trocoTotal = {

        notaDeCem: 0,
        notaDeCinquenta: 0,
        notaDeVinte: 0,
        notaDeDez: 0,
        notaDeCinco: 0,
        notaDeDois: 0,
        moedaDeUm: 0,
        moedaDeCinquenta: 0,
        moedaDeVinteECinco: 0,
        moedaDeDez: 0,
        moedaDeCinco: 0,
        moedaDeUmCentavo: 0

    }

    if(valorPago > preco) {

        troco = valorPago - preco;

    } else if(valorPago === preco) {

        return 'Sem troco, o valor pago é o mesmo do preco';

    } else {

        return `A conta deu ${preco}, ${valorPago} nao é o suficiente`
    };

    let restante = troco;
    
    console.log(`Valor compra: ${preco}\nTroco: ${troco}`)

    while(true) {

        // Notas de cem
        trocoTotal.notaDeCem += Math.floor(restante / 100);
        restante = restante - (trocoTotal.notaDeCem * 100);

        // Notas de cinquenta
        trocoTotal.notaDeCinquenta += Math.floor(restante / 50);
        restante = restante - (trocoTotal.notaDeCinquenta * 50);
        
        // Notas de vinte
        trocoTotal.notaDeVinte += Math.floor(restante / 20);
        restante = restante - (trocoTotal.notaDeVinte * 20);
        
        // Notas de dez
        trocoTotal.notaDeDez += Math.floor(restante / 10);
        restante = restante - (trocoTotal.notaDeDez * 10);

        // Notas de cinco
        trocoTotal.notaDeCinco += Math.floor(restante / 5);
        restante = restante - (trocoTotal.notaDeCinco * 5);

        // Notas de dois
        trocoTotal.notaDeDois += Math.floor(restante / 2);
        restante = restante - (trocoTotal.notaDeDois * 2);

        // Moedas de 1
        trocoTotal.moedaDeUm += Math.floor(restante / 1);
        restante = restante - (trocoTotal.moedaDeUm * 1);

        // Moedas de 50 centavos
        trocoTotal.moedaDeCinquenta += Math.floor(restante / 0.5);
        restante = restante - (trocoTotal.moedaDeCinquenta * 0.5);
    
        // Moedas de 25 centavos
        trocoTotal.moedaDeVinteECinco += Math.floor(restante / 0.25);
        restante = restante - (trocoTotal.moedaDeVinteECinco * 0.25);
        
        // Moedas de dez centavos
        trocoTotal.moedaDeDez += Math.floor(restante / 0.10);
        restante = restante - (trocoTotal.moedaDeDez * 0.10);
    
        // Moedas de cinco centavos
        trocoTotal.moedaDeCinco += Math.floor(restante / 0.05);
        restante = restante - (trocoTotal.moedaDeCinco * 0.05);
    
        // Moedas de 1centavo
        trocoTotal.moedaDeUmCentavo += Math.floor(restante / 0.01);
        restante = restante - (trocoTotal.moedaDeUmCentavo * 0.01);        

        break

    };

    return trocoTotal

};

console.log(calcularTroco(50, 1231.23));