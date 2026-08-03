/*
6. Verificação de login
Crie duas variáveis booleanas: temLogin e temSenha.
Exiba no console o resultado da expressão lógica que verifica se ambas são verdadeiras.
*/

const temLogin = true;
const temSenha = true;

const podeEntrar = temLogin && temSenha;

if(!podeEntrar) {
    console.log(`Voce precisa de login e senha`)
} else {
    console.log(`Tudo ok, pode entrar`)
}