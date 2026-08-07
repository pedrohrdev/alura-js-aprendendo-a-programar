/*
O node ja tem uma forma de interagir com o terminal
o nome dassa funcionalidade se chama 'readline' -> ler da linha;

quando queremos importar algo, usamos a funcao global chamada import ou o require
*/

import { createInterface } from 'readline';


const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("What's your name? ", (nome) => {
    
    console.log(`Hello ${nome}\n`);

    const data = new Date();
    let hours = data.getHours();

    // Greeting the user based on the current time
    if(hours >= 4 && hours < 12) {

        console.log(`Good morning, ${hours}am`);

    } else if(hours > 12 && hours <= 18) {

        console.log(`Good afternoon, ${hours}pm`);

    } else {

        console.log(`Good night, ${hours}pm`);

    };

    function askAge() {

        leitor.question("What's your age? ", (age) => {

            const ageNumber = Number(age);

            if(age.trim() === '' || isNaN(ageNumber)) {

                console.log('Your age needs to be a number, try again');
                askAge();
                return;

            };
            
            const ofLegalAge = ageNumber >= 18
            ? "You can get your driver's license now!"
            : "You can't get a driver's license";

            console.log(ofLegalAge);

            leitor.close();

        });

    };

    askAge();

})