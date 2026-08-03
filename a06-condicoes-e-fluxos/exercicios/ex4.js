/*
4. Conversão de nota em conceito

Crie uma variável nota entre 0 e 10. Use]
if/else if/else para retornar: 

-- A (9 - 10),
-- B (8 - 9),
-- C (6 - 7.9),
-- D (4 - 5.9),
-- E (0 - 3.9).
*/

const notaNumerica = 276;
let notaFinal = null;

if(notaNumerica >= 0 && notaNumerica <= 10) {

    if(notaNumerica >= 9 && notaNumerica <= 10) {

        notaFinal = 'Nota final: A';

    } else if(notaNumerica >= 8 && notaNumerica < 9) {

        notaFinal = 'Nota final: B';

    } else if(notaNumerica >= 6 && notaNumerica < 8) {

        notaFinal = 'Nota final: C';

    } else if(notaNumerica >= 4 && notaNumerica < 6) {

        notaFinal = 'Nota final: D';

    } else {

        notaFinal = 'Nota final: E';

    };

    console.log(notaFinal)

} else {

    console.log(`A nota tem que ser entre 0 e 10`);

};
