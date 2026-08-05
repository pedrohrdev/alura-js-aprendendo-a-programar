// Palavra reservada function, nome da funcao, parametros, e codigo da funcao
function saudacao(nome) { // nome -> parametro da funcao saudacao
    console.log(`Ola ${nome}`)
}

// Ate agora so definimos a funcao, temos que chamar ela

saudacao();

// Rodamos a funcao, porem nao passamos o parametro
// passamos o parametro pra funcioanr corretamente

saudacao('Pedro'); // 'Pedro' é o argumento

// parametro e na definicao da funcao, entao a funcao saudacao recebe nome como parametro

// e quando executamos a funcao, agente passa o argumento, estamos passando
// o argumento 'Pedro' para a funcao saudacao que recebe nome como parametro

saudacao('Jessica');
saudacao('Kayo');

// Podemos chamar a funcao quantas vezes quisermos
// pois ela e um blocod e codigo reutilizavel