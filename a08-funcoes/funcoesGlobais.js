// O proprio js, o node ou o js do navegador
// nos dao funcoes globais prontas para usarmos, veja:

// SetTimeout: Executa um bloco de codigo/funcao depois de um determinado tempo
function saudacao() {
    console.log('Eai, bao?')
}

// Primeiro passamos oque queremos fazer, e depois o tempo em milisegundos
// setTimeout(saudacao, 2000)

// SetInterval: Executa uma bloco de codigo por um tempo determinado
// Recebe 2 parametros: oque queremos fazer, e de quanto tem quanto tempo
let contador = 0;

const id = setInterval(() => {

    contador++;

    if(contador === 1) {
        console.log(`${contador} segundo`)
    } else {
        console.log(`${contador} segundos`);
    }


    if(contador === 10) {
        clearInterval(id); // a funcao clear Interval literalmente para a execucao do setTimeout com base no id que a funcao setTimeout retorna
    }

}, 1000)
