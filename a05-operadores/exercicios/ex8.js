/*
8. Condições compostas
Crie duas variáveis numéricas.
Exiba no console o resultado da expressão que verifica se:

os dois números são pares e
os dois números são iguais.
*/

const numero1 = 50;
const numero2 = 10;

const osDoisSaoPares = (numero1 % 2 === 0) && (numero2 % 2 === 0);
const osDoisSaoIguais = numero1 === numero2;

console.log(`Os dois sao pares: ${osDoisSaoPares}, Os dois sao iguais?: ${osDoisSaoIguais}`)