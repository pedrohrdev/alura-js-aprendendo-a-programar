/*

   1  2  3  4  5  6  7  8  9  10  
  |------------------------------|
 1|a                             |
 2|                              |  
 3|                              |  
 4|                              |  
 5|                              |  
 6|                        b     |  
 7|                              |  
 8|                              |  
 9|                              |  
10|------------------------------|
*/

function calcularDistancia(x1, y1, x2, y2) {

    let distancia = Math.sqrt(
        ((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1))
    );

    return distancia.toFixed(2);

};


console.log(calcularDistancia(0, 0, 3, 4));

console.log(calcularDistancia(1, 1, 9, 6));