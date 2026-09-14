/*
4. Verificar aprovação

Crie uma função verificarAprovacao(nota) que retorna
"Aprovado" se nota >= 7 ou "Reprovado" caso contrário.
*/

function verificarAprovacao(nota) {

    if(nota >= 7) {
        return 'Aprovado';
    }

    return 'Reprovado';

};

let passeiDeAno = verificarAprovacao(6);

console.log(passeiDeAno);

console.log('Fiz recuperacao');

passeiDeAno = verificarAprovacao(8);

console.log(passeiDeAno)