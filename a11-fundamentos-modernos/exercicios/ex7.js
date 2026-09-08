/*
7. Trabalhando com datas
Crie uma variável com a data atual e exiba o dia, mês e ano formatados.
*/

const data = new Date();

// Dia do mes
let dia = data.getDate();
console.log(dia);

let mes = data.getMonth() + 1;
console.log(mes);

let ano = data.getFullYear();
console.log(ano);

console.log(`${dia}/${mes}/${ano}`);

// Ou:

let dataEmBr = data.toLocaleDateString('pt-BR');
console.log(dataEmBr)