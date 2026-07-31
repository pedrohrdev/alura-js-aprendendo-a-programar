// Explicando com as minhas palavras sobre hoisting:

/*
Hoisting, no portugues, significa içar ou puxar algo pra cima. Apartir disso
temos a informacao que toda vez que executamos o nosso codigo, antes de executar
o javascript faz um hoisting, que é oque? o js percorre o codigo e registra 
algumas declaracoes, como variaveis declaradas com var e funcoes, porem so
funciona com o var essa visao de que o "js pegou a variavel e puxou
para cima"
*/

// Antes de rodar o codigo, o JavaScript registrou a variavel nome.
console.log(nome);

var nome = 'Pedro'; // Nesse momento ela possui valor undefined, por isso o console.log imprime undefined

// ======================================================== //

// Porem, se nao declararmos uma variavel posteriormente, nao funciona
console.log(idade)

// Nosso codigo rodou la em cima, porem aq em console.log(idade) deu erro
// pois idade nao existe