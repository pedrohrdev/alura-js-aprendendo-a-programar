// Um Set no js é uma estrutura de dados que guarda valores UNICOS, ou seja
// nenhum valor se repete, ex

let numeros = new Set();

numeros.add(1);
numeros.add(2);
numeros.add(2); // 2 ja existe, entao nao sera adcionado novamente

console.log(numeros);
console.log('\n');
// Quando usar?
// -> remover duplicatas de um array

let arrayComDuplicatas = [1, 1, 2, 2, 3, 3];
let arraySemDuplicatas = [...new Set(arrayComDuplicatas)];

console.log(arraySemDuplicatas);