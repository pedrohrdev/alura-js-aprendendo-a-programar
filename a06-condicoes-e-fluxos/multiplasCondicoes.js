// O switch é outra forma de executar condioces no codigo
// permitindo executar multiplas condicoes;

// No cenario das notas, tem q cada nota tem uma
// mensagem diferente, ele se encaixaria bem, veja

let notaFinal = 10;
let mensagemFinal = null;

switch(true) {

    case notaFinal == 10:
        mensagemFinal = 'Perfeito!';
        break;
        
    case notaFinal > 9:
        mensagemFinal = 'Excelente!';
        break;
        
    case notaFinal > 8:
        mensagemFinal = 'Otimo!';
        break;

    case notaFinal >= 6:
        mensagemFinal = 'Ok';
        break;

    case notaFinal > 3:
        mensagemFinal = 'Ruim';
        break;

    case notaFinal <= 3:
        mensagemFinal = 'Pessimo';
        break;
    
    default:
        mensagemFinal = 'Nota nao informada'
};

console.log(mensagemFinal);