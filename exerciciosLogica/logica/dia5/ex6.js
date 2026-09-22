/*
Você deve descobrir separadamente:

```text
milhares
centenas
dezenas
unidades
```

0 - 9999
*/

function decomporNumero(numero) {

    let restante = numero

    if(numero >= 0 && numero <= 9999) {

        // Quantos milhares
        let milhares = Math.floor(restante / 1000);
        restante -= milhares * 1000;

        // Quantas centenas
        let centenas = Math.floor(restante / 100);
        restante -= centenas * 100;

        // Quantas dezenas
        let dezenas = Math.floor(restante / 10);
        restante -= dezenas * 10;

        let unidaes = restante;

        console.log(`Numero: ${numero}\n\nResultado:\nMilhares: ${milhares}\nCentenas: ${centenas}\nDezenas: ${dezenas}\nUnidades: ${unidaes}\n\n`)

    } else {
        console.log(`O numero deve ser entre 0 e 9999\n\n`);
    }

};

decomporNumero(9999);
decomporNumero(10);
decomporNumero(-500);
decomporNumero(67);
decomporNumero(4121);
