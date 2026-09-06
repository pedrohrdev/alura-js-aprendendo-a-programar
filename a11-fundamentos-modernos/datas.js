const data = new Date();

let ano = data.getFullYear();
let mes = data.getMonth() + 1;
let diaDoMes = data.getDate();
let diaDaSemanaEmNumero = data.getDay();
let diaDaSemana = '';

switch(diaDaSemanaEmNumero) {

    case 0:
        diaDaSemana = 'Domingo';
        break;

    case 1:
        diaDaSemana = 'Segunda';
        break;
        
    case 2:
        diaDaSemana = 'Terça';
        break;

    case 3:
        diaDaSemana = 'Quarta';
        break;

    case 4:
        diaDaSemana = 'Quinta';
        break;

    case 5:
        diaDaSemana = 'Sexta';
        break;

    case 6:
        diaDaSemana = 'Sábado';
        break;

    default:
        diaDaSemana = 'Dia invalido'
                
}

console.log(`Ano atual: ${ano}`);
console.log(`Mes atual: ${mes}`);
console.log(`Dia do mes: ${diaDoMes}`);
console.log(`Dia da semana: ${diaDaSemana}`);

const nascimento = new Date('2010-04-10:22:00.000Z');
const nascimentoEmBR = nascimento.toLocaleDateString('pt-BR');
console.log(nascimentoEmBR)