/*
5. Receber números até digitar 0
Simule a digitação de números usando uma variável numeroDigitado.
Use um do...while para repetir a execução até que o valor seja 0.
Conte quantos números diferentes de zero foram digitados e mostre o total no console ao final.

📌 Observação:
Considere que o valor de numeroDigitado é alterado manualmente a cada repetição.
*/

let numeroDigitado = 10;
let numerosDigitadosDiferentesDeZero = null;

do {

    console.log(numeroDigitado);

    if(numeroDigitado !== 0) {
        numerosDigitadosDiferentesDeZero++
    }

    numeroDigitado--

} while(numeroDigitado >= 0);

console.log(`Foram digitados ${numerosDigitadosDiferentesDeZero} numeros diferente de 0`)
