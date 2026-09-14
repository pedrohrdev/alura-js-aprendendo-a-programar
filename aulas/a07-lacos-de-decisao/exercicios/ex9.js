/*
9. Contar múltiplos de 3 entre 1 e 100

Mostre no console quantos números entre
1 e 100 são divisíveis por 3.

*/

let contador = 0;

for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0) {
        console.log(`Numero divisivel por 3: ${i}`);
        contador++;
    }
}

console.log(`Existem ${contador} numeros divisiveis por 3 ente 1 e 100`)