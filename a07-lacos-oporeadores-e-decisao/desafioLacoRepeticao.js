/*

O desafio é contar quantos numeros pares
e impares temos entre  1 e 100

*/

let totalNumerosPares = 0;
let totalNumerosImpares = 0;

for(let i = 1; i <= 100; i++) {

    if(i % 2 === 0) {
        totalNumerosPares++;
    }

    if(i % 2 === 1) {
        totalNumerosImpares++;
    }

};

console.log(`O total de numeros pares entre 1 e 100 é: ${totalNumerosPares}`)

console.log(`O total de numeros impares entre 1 e 100 é: ${totalNumerosImpares}`);