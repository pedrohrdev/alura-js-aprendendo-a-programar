/*
8. Filtrar valores altos

Crie um array com idades. Use filter para retornar
apenas as idades maiores ou iguais a 18 e exiba o resultado.
*/

const idades = [4, 8, 135, 34, 18];

const maioresOuIguaisA18 = idades.filter((idade) => {
    return idade >= 18;
});

console.log(maioresOuIguaisA18);