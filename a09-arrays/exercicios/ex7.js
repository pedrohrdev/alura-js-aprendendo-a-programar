/*
7. Descontos com map

Crie um array com preços de produtos. Use map
para aplicar 10% de desconto em cada um e mostre os preços com desconto.
*/

const precosProdutos = [124.23, 12, 561.34, 773];

const precosProdutosComDesconto = precosProdutos.map((produto) => {
    
    const desconto = produto * 0.10;

    const produtoComDesconto = produto - desconto;

    return produtoComDesconto

});

console.log(precosProdutos);
console.log('\n');
console.log(precosProdutosComDesconto)