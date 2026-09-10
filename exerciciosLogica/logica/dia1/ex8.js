// Cedulas
// 100, 50, 20, 10, 5, 2 e 1

// as variaveis de cedula sao responsaveis para guardar quantas cedulas sao possiveis pagar
// e o calculo abaixo quanto sobra pra calcular cada cedula

let valor = 435;

// Pegando quantas notas de cem paga 400
const nota100 = Math.floor(valor / 100);
// Depois que pegamos as de 100 vamos calcular oque sobrou para calcular com as notas posteriores
valor = valor % 100; // vai dar 35
// console.log(valor)

// Agora valor é 35, entao ele ja pegou as de 400, agora vai ver se da pra pagar com a de 50 com o valor q sobrou(35) e assim sucesivamente..
const nota50 = Math.floor(valor / 50); // vai dar 0 pois sobrou 35
valor = valor % 50;

const nota20 = Math.floor(valor / 20);
valor = valor % 20;

const nota10 = Math.floor(valor / 10); // se valor for menor que dez vai dar zero entao, se for 10 pra cima da 1
valor = valor % 10;

const nota5 = Math.floor(valor / 5);
valor = valor % 5;

const nota2 = Math.floor(valor / 2);
valor = valor % 2;

const nota1 = Math.floor(valor / 1);
valor = valor % 1;

console.log(`Notas de 100: ${nota100}`);
console.log(`Notas de 50: ${nota50}`);
console.log(`Notas de 20: ${nota20}`);
console.log(`Notas de 10: ${nota10}`);
console.log(`Notas de 5: ${nota5}`);
console.log(`Notas de 2: ${nota2}`);
console.log(`Notas de 1: ${nota1}`);