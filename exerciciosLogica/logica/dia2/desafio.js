// Desafio - Caixa eletrônico
// Mostrar ao usuario quantas notas de cada nota é possivel sacar
// apartir do valor do saque, considerando que as notas de maior
// valor que sao consideradas primeiro;

// a logica é calcular o valor do saque dividio pela nota, depois o valor que vai sobrando/tirando pq ja pegou uma nota
// entao a verdadeira logica esta em calcular o valor restante para dividir pelo valor da nota

let valorSaque = 14125;

// 3 notas de cem(387)
let notasDeCem = Math.floor(
    valorSaque / 100
);

// 1 nota de cinquenta(87)
let notasDeCinquenta = Math.floor(

    (valorSaque - (notasDeCem * 100)) / 50

);

// 1 nota de vinte(37)
let notasDeVinte = Math.floor(

    (valorSaque - ((notasDeCem * 100) + (notasDeCinquenta * 50))) / 20

);

// 1 nota de dez(17)
let notasDeDez = Math.floor(

    (valorSaque - ((notasDeCem * 100) + (notasDeCinquenta * 50) + (notasDeVinte * 20))) / 10

);

// 1 nota de cinco(7)
let notasDeCinco = Math.floor(

    (valorSaque - ((notasDeCem * 100) + (notasDeCinquenta * 50) + (notasDeVinte * 20) + (notasDeDez * 10))) / 5

);

// 1 nota de dois(2)
let notasDeDois = Math.floor(

    (valorSaque - ((notasDeCem * 100) + (notasDeCinquenta * 50) + (notasDeVinte * 20) + (notasDeDez * 10) + (notasDeCinco * 5))) / 2

);

// 1 nota de dois(2)
let notasDeUm = Math.floor(

    (valorSaque - ((notasDeCem * 100) + (notasDeCinquenta * 50) + (notasDeVinte * 20) + (notasDeDez * 10) + (notasDeCinco * 5) + (notasDeDois * 2))) / 1

);


console.log(`Notas de cem: ${notasDeCem}`);
console.log(`Notas de quinquenta: ${notasDeCinquenta}`);
console.log(`Notas de vinte: ${notasDeVinte}`);
console.log(`Notas de dez: ${notasDeDez}`);
console.log(`Notas de cinco: ${notasDeCinco}`);
console.log(`Notas de dois: ${notasDeDois}`);
console.log(`Notas de um: ${notasDeUm}`);