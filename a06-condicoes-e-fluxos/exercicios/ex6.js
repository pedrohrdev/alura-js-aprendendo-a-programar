/*
6. Menu com switch-case

Crie uma variável opcao com valores de 1 a 3. Use
switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".
*/

const opcao = 11;

switch(true) {
    case opcao === 1: 
        console.log('Cadastrar');
        break

    case opcao === 2:
        console.log('Listar');
        break;

    case opcao === 3:
        console.log('Sair');
        break;

    default:
        console.log(`Apenas opcoes de 1 a 3 sao permitidas, voce tentou ${opcao}`)
}