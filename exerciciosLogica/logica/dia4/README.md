# 🚀 100 Dias de Código — Dia 4

## 🧠 Fase 1 — Fundamentos de Lógica

**Dia:** 4/100
**Tema:** Fundamentos de lógica
**Objetivo:** Desenvolver raciocínio lógico através de problemas que exigem análise, decomposição e construção de algoritmos.

---

## 🎯 Objetivos do dia

Hoje o foco não é aprender uma funcionalidade nova do JavaScript.

O foco é **pensar melhor antes de programar**.

Você vai praticar:

* Entrada e saída de dados.
* Variáveis.
* Operações matemáticas.
* Ordem de execução.
* Construção de algoritmos.
* Manipulação de valores.
* Decomposição de problemas.
* Raciocínio passo a passo.

### ⚠️ Regra do dia

Antes de escrever código, tente responder:

> **"Quais são exatamente os passos necessários para resolver esse problema?"**

Não pule direto para o código.

---

# 🟢 Exercícios Fáceis

## 01 — Troca de valores

Você possui duas variáveis:

```js
let a = 10;
let b = 20;
```

Faça um algoritmo que troque os valores das duas variáveis.

Ao final:

```text
a = 20
b = 10
```

### Requisito

Não simplesmente escreva os valores novamente.

O algoritmo deve realmente realizar a troca.

---

## 02 — Conversor de temperatura

Crie um programa que receba uma temperatura em Celsius e converta para Fahrenheit.

Utilize:

```text
F = C × 9/5 + 32
```

### Exemplo

```text
Entrada: 25
Saída: 77
```

Teste com pelo menos três temperaturas diferentes.

---

## 03 — Média de três números

Crie uma função chamada:

```js
calcularMedia(a, b, c)
```

Ela deve receber três números e retornar a média aritmética deles.

### Exemplos

```js
calcularMedia(10, 20, 30) // 20
calcularMedia(5, 7, 9) // 7
```

### Requisito

Não arredonde o resultado.

---

# 🟡 Exercícios Médios

## 04 — Troco

Crie uma função chamada:

```js
calcularTroco(preco, valorPago)
```

Ela deve calcular quanto dinheiro deve ser devolvido ao cliente.

### Exemplos

```js
calcularTroco(35, 50) // 15
calcularTroco(72, 100) // 28
```

### Requisito

Considere que o cliente sempre pagará um valor igual ou superior ao preço.

---

## 05 — Conversão de segundos

Crie uma função chamada:

```js
converterSegundos(segundos)
```

Ela deve transformar uma quantidade de segundos em:

* horas;
* minutos;
* segundos restantes.

### Exemplo

```text
Entrada:
3665

Saída:
1 hora
1 minuto
5 segundos
```

### Requisito

Não utilize bibliotecas ou funções prontas para fazer a conversão.

Pense matematicamente em como separar cada unidade.

---

## 06 — Conta de restaurante

Uma mesa de restaurante possui:

```text
Valor da comida: R$ 120
Taxa de serviço: 10%
Número de pessoas: 4
```

Crie uma função:

```js
dividirConta(valor, taxa, pessoas)
```

Ela deve calcular quanto cada pessoa deverá pagar.

### Exemplo

```js
dividirConta(120, 10, 4)
```

Resultado:

```text
R$ 33 por pessoa
```

### Desafio extra

Faça funcionar para qualquer porcentagem de taxa e quantidade de pessoas.

---

# 🔴 Exercícios Difíceis

## 07 — Caixa eletrônico

Crie uma função:

```js
sacar(valor)
```

Ela deve determinar quantas notas de cada valor são necessárias para formar o saque.

Considere apenas notas de:

```text
100
50
20
10
5
2
```

### Exemplo

```text
Entrada:
187

Saída:
1 nota de 100
1 nota de 50
1 nota de 20
1 nota de 10
1 nota de 5
1 nota de 2
```

### Requisitos

* Utilizar a menor quantidade possível de notas.
* Informar a quantidade de cada nota utilizada.
* Não utilizar notas que não sejam necessárias.

### Desafio extra

Descubra como seu algoritmo deve reagir quando o valor não puder ser formado exatamente.

---

## 08 — Inverter número

Crie uma função:

```js
inverterNumero(numero)
```

que receba um número inteiro e retorne seus algarismos invertidos.

### Exemplos

```js
inverterNumero(1234) // 4321
inverterNumero(987) // 789
inverterNumero(120) // 21
```

### Requisito

Tente resolver utilizando matemática e operações com números, sem transformar o número diretamente em string.

---

## 09 — Distância entre dois pontos

Considere dois pontos em um plano:

```text
A(x1, y1)
B(x2, y2)
```

A distância entre eles pode ser calculada usando:

```text
d = √((x2 - x1)² + (y2 - y1)²)
```

Crie uma função:

```js
calcularDistancia(x1, y1, x2, y2)
```

### Exemplo

```js
calcularDistancia(0, 0, 3, 4)
```

Resultado:

```text
5
```

### Requisito

Construa a fórmula manualmente utilizando as operações matemáticas disponíveis no JavaScript.

---

# 🏆 10 — DESAFIO DO DIA

## Máquina de troco

Você está programando o sistema de uma máquina de vendas.

Crie uma função:

```js
calcularTroco(preco, valorPago)
```

A função deve descobrir:

1. Quanto de troco deve ser devolvido.
2. Quantas notas/moedas de cada valor serão necessárias.

Considere os valores:

```text
100
50
20
10
5
2
1
0.50
0.25
0.10
0.05
0.01
```

### Exemplo

```js
calcularTroco(37.50, 100)
```

O algoritmo deverá identificar que o troco é:

```text
R$ 62,50
```

E decompor esse valor utilizando as maiores denominações possíveis.

### Requisitos

* Calcular o troco.
* Decompor o valor.
* Informar a quantidade de cada denominação.
* Não utilizar uma solução fixa para esse exemplo.
* A função deve funcionar para diferentes preços e valores pagos.

### 🔥 Desafio extra

Faça o algoritmo lidar corretamente com os problemas de precisão de números decimais do JavaScript.

Por exemplo:

```js
0.1 + 0.2
```

não produz exatamente `0.3` internamente.

Descubra uma forma segura de trabalhar com dinheiro.

---

# 🧠 Checklist do Dia 4

* [x] 01 — Troca de valores
* [x] 02 — Conversor de temperatura
* [x] 03 — Média de três números
* [x] 04 — Troco
* [x] 05 — Conversão de segundos
* [x] 06 — Conta de restaurante
* [x] 07 — Caixa eletrônico
* [x] 08 — Inverter número
* [x] 09 — Distância entre dois pontos
* [ ] 10 — Máquina de troco

---

# 📊 Reflexão

Depois de terminar, responda:

1. Qual exercício exigiu mais raciocínio?
2. Em qual exercício você ficou travado?
3. Você conseguiu planejar o algoritmo antes de escrever o código?
4. Qual problema você resolveria de uma maneira diferente se fizesse novamente?
5. O que você aprendeu sobre decomposição de problemas hoje?

---

# 🔥 Regra do desafio

**Não conte apenas exercícios resolvidos. Conte problemas que você realmente entendeu.**

Se precisar olhar uma solução, tudo bem.

Mas depois:

**entenda → feche a solução → faça sozinho.**

O objetivo desses 100 dias não é terminar 100 dias.

É chegar no dia 100 pensando como programador.
