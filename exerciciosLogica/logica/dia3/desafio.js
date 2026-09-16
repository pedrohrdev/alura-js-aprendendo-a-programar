// Sistema de pagamento

/*
* preço de um produto;
* quantidade comprada;
* porcentagem de desconto.

Depois deve calcular:

1. O valor total sem desconto.
2. O valor do desconto.
3. O valor final da compra.
4. Quanto cada pessoa pagaria caso a compra fosse dividida igualmente entre 3 pessoas.
*/

// considerei que se houver a situacao em que nao dê uma divisao
// exata alguem vai pagar o restinho pra fechar

// Vamos simular pizzas

// Dados de entrada
let precoPizza = 123.50;
let quantidadeComprada = 4;
let porcentagemDeDesconto = 0.10;

// Valor sem desconto
let valorFinalSemDesconto = precoPizza * quantidadeComprada;

// Valor do desconto total
let valorDoDesconto = valorFinalSemDesconto * porcentagemDeDesconto;

// Valor final da compra
let valorFinalDaCompra = valorFinalSemDesconto - valorDoDesconto;

// Divisao enmtre 3 pessoas
let quantidadePessoas = 3;

let cadaPessoaPagaria = Math.floor((valorFinalDaCompra / quantidadePessoas) * 100) / 100;

//resto
let totalPagoBase = cadaPessoaPagaria * quantidadePessoas;
let restinhoQueAlguemVaiPagar = valorFinalDaCompra - totalPagoBase

// Exibição dos resultados (formatando com .toFixed apenas no console)
console.log(`Preço da pizza: R$ ${precoPizza.toFixed(2)}`);
console.log(`Pizzas compradas: ${quantidadeComprada}`);
console.log(`Desconto: ${porcentagemDeDesconto * 100}%\n`);

console.log(`Valor total sem desconto: R$ ${valorFinalSemDesconto.toFixed(2)}`);
console.log(`Valor do desconto: R$ ${valorDoDesconto.toFixed(2)}`);
console.log(`Valor final: R$ ${valorFinalDaCompra.toFixed(2)}`);
console.log(`Dividido entre ${quantidadePessoas} pessoas (base): R$ ${cadaPessoaPagaria.toFixed(2)} por pessoa`);

if (restinhoQueAlguemVaiPagar > 0) {
    console.log(`\n Sobram R$ ${restinhoQueAlguemVaiPagar.toFixed(2)} centavos de resto.`);
    console.log(`Uma das pessoas pagará R$ ${(cadaPessoaPagaria + restinhoQueAlguemVaiPagar).toFixed(2)} para fechar o total.`);
}