// ## 07 — Caixa eletrônico

100
50
20
10
5
2

function sacar(valor) {

    let restante = valor

    let notasCem = Math.floor(restante / 100);
    restante %= 100

    let notasCinquenta = Math.floor(restante / 50);
    restante %= 50

    let notasVinte = Math.floor(restante / 20);
    restante %= 20

    let notasDez = Math.floor(restante / 10);
    restante %= 10

    let notasCinco = Math.floor(restante / 5);
    restante %= 5

    let notasDois = Math.floor(restante / 2);
    restante %= 2

    let valorRestante = valor - (notasCem * 100) + (notasCinquenta * 50) + (notasVinte * 20) + (notasDez * 10) + (notasCinco * 5) + (notasDois * 2);


    console.log(`Sacando: R$${valor}`)

    if(valorRestante === 1) {
        console.log(`1 Moeda de 1 real`);
        console.log(`\n`)
    } else {
        console.log(`${notasCem} nota de 100`);
        console.log(`${notasCinquenta} nota de 50`);
        console.log(`${notasVinte} nota de 20`);
        console.log(`${notasDez} nota de 10`);
        console.log(`${notasCinco} nota de 5`);
        console.log(`${notasDois} nota de 2`);

        console.log(`\n`)       
    }    

};

sacar(188);
sacar(1);
sacar(10234525);