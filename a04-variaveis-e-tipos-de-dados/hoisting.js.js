// Explicando com as minhas palavras sobre hoisting:

/*
Hoisting, no portugues, significa içar ou puxar algo pra cima. Apartir disso
temos a informacao que toda vez que executamos o nosso codigo, antes de executar
o javascript faz um hoisting, que é oque? pegar declaracoes de variaveis e puxar
para cima, porem so funciona com o var essa visao de que o js pegou a variavel e puxou
para cima
*/

console.log(nome);

var nome = 'Pedro';
// Neste ponto aqui, o js fez o hoisting e declarou undefined em nome no console.log
// pois no hoisting ele viu que nome passou a existir, logo ele "elevou a variavel nome para cima"

// ======================================================== //

// Porem, se nao declararmos uma variavel posteriormente, nao funciona
console.log(idade)

// Nosso codigo rodou la em cima, porem aq em console.log(idade) deu erro
// pois idade nao esta definida ainda