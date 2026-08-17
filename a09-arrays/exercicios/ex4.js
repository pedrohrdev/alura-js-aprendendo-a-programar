/*
4. Somar todos os números

Crie um array com 10 números. Use for para somar
todos os valores e mostrar o total no final.
*/

//                  3  6  10 15 21 28 36 45 55
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somaTotal = 0;

for(let i = 0; i < numeros.length; i++) {

    somaTotal += numeros[i];

};

console.log(somaTotal)