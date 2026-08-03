/*
10. Ordem de operações

Escreva a expressão 2 + 3 * 5. Mostre o
resultado e explique por que a
multiplicação foi feita antes da soma
*/

const expressao = 2 + 3 * 5;
console.log(expressao);

// Deu 17 pois o operador de vezes tem a ordem de precedencia
// maior doque o operador de mais, ou seja, 3 x 5: 15, mais 2 é igual a17