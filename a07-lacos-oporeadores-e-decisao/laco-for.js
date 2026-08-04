// O Laço for é usado quando voce sabe
// (ou pode) calcular quantas vezes quer
// repetir um bloco de codigo

// Em que a sua estrutura é, inicializacao, condicao e incremento

// Ex: contar de 1 a 10;
for(let i = 1; i <= 10; i++) {
    console.log(i)
};

console.log('\n')

// Contar os numeros pares de 1 a 30
for(let numero = 0; numero <= 30; numero++) {

    if(numero % 2 === 0) {
        console.log(numero)
    }

};

const palavra = 'Pedro Rossi';

for(let numero = 0; numero < palavra.length; numero++) {
    console.log(palavra[numero]);
}