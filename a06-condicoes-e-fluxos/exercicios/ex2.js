/*
2. Saudação de acordo com a hora
Crie uma variável horaAtual. Se estiver entre 6 e 12,
mostre "Bom dia"; entre 12 e 18, "Boa tarde";
caso contrário, "Boa noite".
*/

const data = new Date();
let horaAtual = data.getHours();
let mensagemSaudacao = null;

if(horaAtual >= 6 || horaAtual < 12) {

    mensagemSaudacao = 'Bom dia';

} else if(horaAtual >= 12 ||  horaAtual < 18) {

    mensagemSaudacao = 'Boa tarde';

} else if (horaAtual >= 19 || horaAtual < 24) {

    mensagemSaudacao = 'Boa noite'
    
} else {

    mensagemSaudacao = 'Ta de madrugada'

};

console.log(mensagemSaudacao)