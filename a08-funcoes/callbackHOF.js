/*

HOF: Higher Order Functions: Funcoes de ordem superior;

Que nao sao nada mais nada menos doque funcoes que recebem
funcoes como parametro

e quando estamos passando uma funcao como argumento, essas 
funcoes sao chamadas de callbacks

*/

// Isso é uma HOF porque recebe uma funcao como parametro
function calcular(num1, num2, operacao) {
    return operacao(num1, num2);
};

// Funcao que soma um numero pelo outro
function somar(num1, num2) {
    return num1 + num2;
}

// Funcao que subtrai um numero pelo outro
function subtrair(num1, num2) {
    return num1 - num2;
}

// Funcao que multiplica um numero pelo outro
function multiplicar(num1, num2) {
    return num1 * num2;
}

// Funcao que divide um numero pelo outro
function dividir(num1, num2) {
    return num1 / num2;
}

// 3 elevado a x potencia
function exponenciar(num1, potencia) {
    return num1 ** potencia;
};

const resultadoDaSoma = calcular(2, 2, somar);
const resultadoDaSubtracao = calcular(10, 2, subtrair);
const resultadoDaMultiplicacao = calcular(2, 2, multiplicar);
const resultadoDaDivisao = calcular(10, 2, dividir);
const resultadoDaExponenciacao = calcular(3, 3, exponenciar);

console.log(`2 + 2 = ${resultadoDaSoma}`);
console.log(`10 - 2 = ${resultadoDaSubtracao}`);
console.log(`2 x 2 = ${resultadoDaMultiplicacao}`);
console.log(`10 / 2 = ${resultadoDaDivisao}`);
console.log(`3 elevado a 3 = ${resultadoDaExponenciacao}`);

