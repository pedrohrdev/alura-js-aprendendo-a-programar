/*
7. Idade ao longo dos anos

Crie uma variável anoNascimento e anoAtual. Use 
um for para listar a idade da pessoa ano a ano
até o ano atual.
*/

// Primeiro exercicio que nao consegui fazer sozinho e busquei a resposta no gabarito

const anoNascimento = 2010;
const anoAtual = 2026;

for(let ano = anoNascimento; ano <= anoAtual; ano++) {
    console.log(`Em ${ano} voce tinha ${ano - anoNascimento} anos`)
}