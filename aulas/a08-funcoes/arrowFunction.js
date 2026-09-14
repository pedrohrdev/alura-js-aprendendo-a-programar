// Ja sabemos oque é uma funcao, e aprendemos
// a sintaxe de uma funcao convencional, agora
// vamos aprender outra forma de declarar uma
// funcao; A arrow function

let saudacao = (nome) => {
    return `Ola ${nome}!`
};

console.log(saudacao('Pedro'));

// Ela tem a mesma pegada da funcao convencional
// porem armazenamos ela numa variavel, os parametros
// é igual da funcao normal(), porem tem uma arrow, 
// obviamente, => que indica o codigo da funcao,
// que seria o {}, tem como simplificar a sintaxe mais ainda

let saudacaoDois = nome => `Olá ${nome}`;

// Na funcao acima foi possivel nao usar parenteses, pois
// so temos um parametro, e tambem foi possivel nao usar return
// pois o JS entende que tudo dps de '=>' é uma expressao unica, 
// e o resultado dessa expressao e automaticamente retornado

console.log(saudacao('Marck Zuckerberg'));