// Com um laço de repeticao, voce repete um bloco
// de codigo quantas vezes voce quiser

// Dessa vez, vamos ver o laço de repeticao while e do while
// Que na tradução é: enquanto e faça enquanto


// While - primeiro verifica, se a primeira condicao for falsa ele nunca executa
let contador = 1;

while(contador <= 10) {
    console.log(`Numero atual ${contador}`);

    contador++;
};

// Do while - faca x enquanto isso for verdadeiro, o do while faz e verifica

let numero = 1;

do {
    
    console.log(`numero atual ${numero}`);
    numero++

} while(numero <= 10)