import readline from 'readline-sync';

export const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

