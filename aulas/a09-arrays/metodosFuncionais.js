// filter -> filtrar algo com base em uma condicao, recebe uma callback e retorna outro array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 !== 0;
})

// console.log(numeros);
// console.log(numerosPares);
// console.log(numerosImpares);

// map -> percorre um array, aplica uma funcao em cada item e retorna um novo array
const numerosDobrados = numeros.map((numero) => {
    return numero * 2;
});

console.log(numerosDobrados);