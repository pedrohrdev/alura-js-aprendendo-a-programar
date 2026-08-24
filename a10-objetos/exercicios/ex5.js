/*
5. Função com objeto
Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.
*/

function comprimenta(objetoPessoa) {

    return `Olá ${objetoPessoa.nome}! \nQue massa eu tambem tenho ${objetoPessoa.idade} anos.\nCara que massa eu tambem quero trabalhar sendo um ${objetoPessoa.profissao}`;

};

const pessoa1 = {
    nome: "Pedro",
    idade: 16,
    profissao: "Desenvolvedor de Software Autônomo"
};

const comprimentoDaPessoa1 = comprimenta(pessoa1);

console.log(comprimentoDaPessoa1)
