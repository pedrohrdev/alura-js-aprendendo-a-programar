/*
1. Destructuring em objetos
Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.
*/

let pessoa = {
    nameUser: "Pedro",
    age: 16,
    email: "pedrohrdev@gmail.com"
};

const { nameUser, age, email } = pessoa;
console.log(nameUser, age, email)