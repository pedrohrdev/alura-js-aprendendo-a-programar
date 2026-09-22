function velocidadeMedia(distancia, tempo) {

    let velocidadeMedia = distancia / tempo;

    if(distancia <= 0 || tempo <= 0) {
        console.log(`Voce deve informar um valor diferente de zero, voce tentou ${distancia}km e ${tempo} hrs\n\n`)
    } else {
        console.log(`A velocidade media foi de ${velocidadeMedia} km/h\n\n`)
    }

};

velocidadeMedia(100, 2);
velocidadeMedia(100, 0);
velocidadeMedia(0, 2);