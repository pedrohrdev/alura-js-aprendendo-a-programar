/*
9. Simulando carrinho de compras

Crie um array com os preços de produtos em um carrinho de compras.
Utilize um laço for ou for...of para calcular o valor total da compra.

Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console.
*/

const precoProdutosCarrinho = [9.89, 69.90, 14.49];

let valorTotalCompra = 0;

for(const preco of precoProdutosCarrinho) {
    valorTotalCompra += preco;
};

const desconto = valorTotalCompra * 0.20;

valorTotalCompra -= desconto;

console.log(valorTotalCompra)