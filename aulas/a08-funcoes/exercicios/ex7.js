/*
7. Reutilizando código

Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
A função deve receber dois parâmetros: valorCompra e valorPago.

A função deve:

calcular o valor do troco
retornar o valor calculado
Depois, utilize o retorno da função para exibir o valor do troco no console.
*/

function calcularTroco(valorPago, valorCompra) {

    let troco = 0;

    if(valorPago > valorCompra) {

        let conta = valorPago - valorCompra;

        troco += conta;

    };

    return troco;

};

const valorCompra = 50;
const valorPago = 55;

console.log(`Valor compra: ${valorCompra}$ \n Valor pago: ${valorPago}$, seu troco: ${calcularTroco(valorPago, valorCompra)}$`);