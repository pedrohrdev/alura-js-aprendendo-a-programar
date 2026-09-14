// Exercício 05 — Calculando o troco

let precoProduto = 67;
let valorPago = 66.99

if(valorPago < precoProduto) {
    console.log(`O produto custa ${precoProduto} R$, voce tentou pagar com ${valorPago} R$`)
} else {

    let troco = (valorPago - precoProduto).toFixed(2);
    console.log(`Seu troco: $${troco}`)
};