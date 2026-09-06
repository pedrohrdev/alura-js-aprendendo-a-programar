import { somar } from './somar.js';
import { subtrair } from './subtrair.js';
import readline from 'readline-sync';

const n1 = readline.question('Digite o primeiro numero: ');
const operacao = readline.question('Digite a operacao: +, -: ');
const n2 = readline.question('Digite o segundo numero: ');

const num1 = Number(n1);
const num2 = Number(n2);

if(operacao === '+') {
    console.log(somar(num1, num2));
}

if(operacao === '-') {
    console.log(subtrair(num1, num2));
}