/*
5. Número par ou ímpar

Crie uma função ehPar(numero) que retorna true se
o número for par e false se for ímpar. Teste a
função com diferentes valores.
*/

function ehPar(numero) {
    
    const verificacao = numero % 2 === 0 ? true : false;

    return verificacao;
};

console.log(ehPar(1));
console.log(ehPar(10));
console.log(ehPar(53));