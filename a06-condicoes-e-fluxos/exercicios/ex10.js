/*
10. Validação de formulário completo
10. Validação de formulário completo

Crie três variáveis:

-- nome
-- email
-- idade

-- Crie também uma variável booleana
chamada formularioValido que indique
se o formulário está válido (true ou false).

Se formularioValido for verdadeiro, mostre "Formulário enviado com sucesso".
Caso contrário, mostre "Por favor, preencha todos os campos corretamente".

📌 Observação:
Considere que a verificação dos campos já
foi realizada anteriormente e o resultado
está armazenado na variável formularioValido.
*/

let nome = 'Pedro';
let email = '';
let idade = 16;

let formularioValido = null;

if(nome && email && idade) {

    formularioValido = true;

    console.log('Formulario valido')
    console.log(`Nome: ${nome}\nEmail: ${email}\nIdade: ${idade}`)

} else {
    formularioValido = false;

    console.log(`Email invalido`)

    // Mostrar oque foi ou nao digitado

    // Nome
    if(nome) {} else {
        console.log(`Voce nao digitou seu nome`);
    };

    // Email
    if(email) {} else {
        console.log(`Voce nao digituu seu email`);
    };

    // Idade
    if(idade) {} else {
        console.log(`Voce nao digitou sua idade`)
    }

};

// Aqui eu sei que se o usuario mandar a idade negativa
// vai funcionar, e tambem se o nome e email forem strings com espaco ' ',
// porem vamos deixar assim 