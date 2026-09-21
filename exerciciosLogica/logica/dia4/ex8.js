function inverterNumero(numero) {
    let resultado = 0;

    while(numero > 0) {
        let digito = numero % 10; // Pega o ultimo digito
        resultado = resultado * 10 + digito; // Empurra o resultado e encaixa o digito
        numero = Math.trunc(numero / 10);
    };

    return resultado

};

console.log(inverterNumero(1234)); // 4321
console.log(inverterNumero(987));  // 789
console.log(inverterNumero(120));  // 21