/*

Nem sempre teremos variaveis com true ou false,
oque e super normal, por exemplo queremos
que o usuario insira o nome dele, a intencao disso
é ser uma string, porem o javascript converte tudo pra 
Truthy ou Fals, entao isso facilita, pois
imagina que ele nao mandou o nome e precisamos verificar,
se ele nao mandou é false, pois é uma string vazia, ou null ou undefined

agora se ele mandou tambem e bom, pois sabemos que é true

Valores Falsy:
    false
    0
    -0
    0n          // BigInt zero
    ""          // string vazia (também '' e ``)
    null
    undefined
    NaN

Valores Truthy: 
    "0"         // string com o caractere "0" → truthy!
    "false"     // string "false" → truthy!
    []          // array vazio → truthy!
    {}          // objeto vazio → truthy!
    " "         // string só com espaço → truthy!
    function(){}  // funções → truthy
    -1          // qualquer número diferente de 0 → truthy
    Infinity
    -Infinity    

*/

let nome = ""; // neste cenario, nome é falsy

if(nome) {
    console.log`Olá ${nome}`;
} else {
    console.log(`Voce nao inseriu o seu nome`)
}