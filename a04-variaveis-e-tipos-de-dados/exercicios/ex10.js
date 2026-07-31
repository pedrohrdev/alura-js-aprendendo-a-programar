/*
10. Concatenando tipos diferentes
Crie uma variável mensagem contendo uma string e outra numero
contendo um número. Junte as duas em uma terceira variável
e exiba o resultado e o tipo final no console usando typeof.
*/

let mensagem = 'Ola mundo';
let numero = 10;

let mensagemComNumero = mensagem + numero;
let tipoDaMensagemComNumero = typeof(mensagemComNumero);

console.log(mensagemComNumero);
console.log(`Tipo da mensagem com numero: ${tipoDaMensagemComNumero}`)