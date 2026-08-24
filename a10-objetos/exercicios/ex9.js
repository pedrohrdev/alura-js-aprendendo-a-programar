/*
9. Listando propriedades com for...in
Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício
*/

const usuario = {
    nome: "Pedro",
    saudacao: function() {
        console.log(`Olá ${usuario.nome}`)
    }
};

for(const item in usuario) {
    console.log(`Chave: ${item}, Valor: ${usuario[item]} \n`)
}