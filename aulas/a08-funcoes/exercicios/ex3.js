/*
3. Cálculo de IMC

Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
A função deve calcular o IMC utilizando a fórmula:

IMC = peso / (altura * altura)

A função deve retornar o valor do IMC.
Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.
*/

function calcularImc(peso, altura) {
    const imc = (peso / (altura ** altura)).toFixed(2);

    return imc;
};

let meuImc = calcularImc(70, 1.80);

console.log(`Meu imc: ${meuImc}`)