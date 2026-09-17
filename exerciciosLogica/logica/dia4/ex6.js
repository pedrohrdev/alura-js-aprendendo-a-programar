// ## 06 - Conta de restaurante
/*
Valor da comida: R$ 120
Taxa de serviço: 10%
Número de pessoas: 4
*/

function dividirConta(valor, taxa, pessoas) {

    let valorComTaixa = valor + (valor / taxa);

    let cadaUmVaiPagar = valorComTaixa / pessoas;

    return `R$${cadaUmVaiPagar.toFixed(2)} por pessoa`

};

console.log(dividirConta(230, 10, 3));