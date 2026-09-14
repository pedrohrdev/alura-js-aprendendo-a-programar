/*
7. Reajuste de salário:

Crie uma variável chamada salario com valor 3000. Calcule
um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.
*/

let salario = 3000;

let dezPorCentoDoSalario = salario * 0.10;

salario += dezPorCentoDoSalario;

console.log(`Novo salario com aumento de ${dezPorCentoDoSalario}(10%): ${salario}`)