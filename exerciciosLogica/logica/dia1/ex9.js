/*
## 09 — Distância entre Dois Pontos

Crie um programa que receba as coordenadas `x1`, `y1`, `x2` e `y2` de dois pontos no plano cartesiano e calcule a distância entre eles.

### Fórmula

```text
d = √((x2 - x1)² + (y2 - y1)²)
```

### Entrada

```text
x1 = 1
y1 = 2
x2 = 4
y2 = 6
```

### Saída

```text
5
```

---

*/

let x1 = 1;
let y1 = 2;
let x2 = 4;
let y2 = 6;

// d = √((x2 - x1)² + (y2 - y1)²)
// (x2 - x1)²

let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(distancia)