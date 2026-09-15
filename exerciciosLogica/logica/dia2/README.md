# 🚀 100 DIAS DE CÓDIGO — DIA 2

## 📌 Fase 1 — Fundamentos de Lógica

**Dia:** 2/100
**Tema:** Fundamentos de Lógica
**Nível:** 🟢 Fácil → 🟡 Médio → 🔴 Difícil → 🏆 Desafio

---

## 🎯 Objetivo do dia

Continuar desenvolvendo o raciocínio lógico através de problemas que exigem:

* Variáveis
* Entrada e saída de dados
* Operações matemáticas
* Divisão
* Resto da divisão (`%`)
* Conversão de valores
* Decomposição de problemas
* Construção de algoritmos passo a passo

### 🧠 Regra principal

**Tente resolver sozinho antes de procurar qualquer solução.**

Se travar:

1. Releia o problema.
2. Escreva no papel o que você sabe.
3. Divida o problema em etapas menores.
4. Tente novamente.
5. Só depois procure ajuda.

O objetivo não é simplesmente fazer o código funcionar.

> **O objetivo é entender por que ele funciona.**

---

# 📁 Estrutura do dia

Os exercícios deste dia devem ficar separados em arquivos:

```text
dia-02/
├── README.md
├── exercicio-01.js
├── exercicio-02.js
├── exercicio-03.js
├── exercicio-04.js
├── exercicio-05.js
├── exercicio-06.js
├── exercicio-07.js
├── exercicio-08.js
├── exercicio-09.js
└── exercicio-10.js
```

---

# 🟢 FÁCIL

## Exercício 01 — Dobro de um número

Crie um programa que receba um número e mostre o dobro desse número.

### Exemplo

```text
Entrada:
7

Saída:
14
```

### Requisitos

* Receber um número.
* Calcular o dobro.
* Exibir o resultado.

---

## Exercício 02 — Área de um retângulo

Crie um programa que receba a largura e a altura de um retângulo e calcule sua área.

### Fórmula

```text
área = largura × altura
```

### Exemplo

```text
Entrada:
10
5

Saída:
50
```

### Requisitos

* Receber largura.
* Receber altura.
* Calcular a área.
* Exibir o resultado.

---

## Exercício 03 — Conversão de minutos

Crie um programa que receba uma quantidade de minutos e transforme esse valor em horas e minutos restantes.

### Exemplo

```text
Entrada:
135

Saída:
2 horas e 15 minutos
```

### Requisitos

O programa deve descobrir:

* Quantas horas completas existem.
* Quantos minutos sobraram.

---

# 🟡 MÉDIO

## Exercício 04 — Média de três números

Crie um programa que receba três números e calcule a média aritmética deles.

### Exemplo

```text
Entrada:
8
7
10

Saída:
8.333333333
```

### Fórmula

```text
média = (número1 + número2 + número3) / 3
```

---

## Exercício 05 — Calculando o troco

Crie um programa que receba:

* O preço de um produto.
* O valor pago pelo cliente.

O programa deve calcular o troco.

### Exemplo

```text
Preço:
37

Valor pago:
50

Saída:
13
```

### Requisito

Considere que o valor pago será sempre suficiente para pagar o produto.

---

## Exercício 06 — Conversão de temperatura

Crie um programa que receba uma temperatura em Celsius e converta para Fahrenheit.

### Fórmula

```text
F = (C × 9 / 5) + 32
```

### Exemplo

```text
Entrada:
25

Saída:
77
```

### Requisitos

* Receber a temperatura em Celsius.
* Aplicar a fórmula.
* Exibir a temperatura em Fahrenheit.

---

# 🔴 DIFÍCIL

## Exercício 07 — Decompondo segundos

Receba uma quantidade inteira de segundos e transforme esse valor em:

* Horas.
* Minutos.
* Segundos restantes.

### Exemplo

```text
Entrada:
7384

Saída:
2 horas
3 minutos
4 segundos
```

### Regras

Não utilize loops.

Resolva utilizando operações matemáticas.

### 💡 Pense

Você precisará descobrir como separar:

```text
7384 segundos
↓
horas
↓
minutos restantes
↓
segundos restantes
```

---

## Exercício 08 — Salário líquido

Crie um programa que receba:

* Salário bruto.
* Percentual de desconto.

O programa deve calcular o salário líquido.

### Exemplo

```text
Salário bruto:
3000

Desconto:
10%

Saída:
2700
```

### Requisitos

O programa deve:

1. Calcular quanto será descontado.
2. Subtrair o desconto do salário bruto.
3. Exibir o salário líquido.

### Regra

Não utilize `if` ou `else`.

---

## Exercício 09 — Conta do restaurante

Crie um programa que receba:

* Valor consumido no restaurante.
* Quantidade de pessoas.

A taxa de serviço é de **10%**.

O programa deve calcular:

1. Valor da taxa de serviço.
2. Valor total da conta.
3. Valor que cada pessoa deverá pagar.

### Exemplo

```text
Consumo:
150

Pessoas:
3

Taxa:
15

Total:
165

Por pessoa:
55
```

### Regras

Não utilize:

```javascript
if
else
for
while
```

Resolva o problema utilizando apenas operações e variáveis.

---

# 🏆 DESAFIO DO DIA

## Exercício 10 — Caixa eletrônico

Você está criando a lógica de um caixa eletrônico.

O programa recebe um valor inteiro que representa o valor do saque.

O caixa possui apenas notas de:

```text
100
50
20
10
5
2
1
```

Seu programa deve descobrir **quantas notas de cada valor são necessárias** para formar exatamente o valor solicitado.

### Exemplo

```text
Entrada:
387

Saída:
3 notas de 100
1 nota de 50
1 nota de 20
1 nota de 10
1 nota de 5
1 nota de 2
```

### ⚠️ Regras

Neste desafio você **não pode utilizar**:

```javascript
if
else
for
while
switch
```

Utilize apenas:

* Variáveis.
* Operações matemáticas.
* Divisão.
* Resto (`%`).
* Conversões quando necessárias.

### 🧠 Desafio real

Não tente simplesmente decorar uma solução.

Pegue, por exemplo:

```text
387
```

e pense:

```text
Quantas notas de 100 cabem aqui?
Quanto sobra?

Quantas notas de 50 cabem no que sobrou?
Quanto sobra?

E assim por diante...
```

Depois transforme esse raciocínio em código.

### 🔥 Bônus

Depois de terminar, teste com diferentes valores:

```text
387
250
99
73
41
18
7
```

Verifique se o programa consegue representar corretamente todos eles.

---

# 📋 CHECKLIST

## 🟢 Fáceis

* [x] Exercício 01 — Dobro de um número
* [x] Exercício 02 — Área de um retângulo
* [x] Exercício 03 — Conversão de minutos

## 🟡 Médios

* [x] Exercício 04 — Média de três números
* [x] Exercício 05 — Calculando o troco
* [x] Exercício 06 — Conversão de temperatura

## 🔴 Difíceis

* [x] Exercício 07 — Decompondo segundos
* [ ] Exercício 08 — Salário líquido
* [ ] Exercício 09 — Conta do restaurante

## 🏆 Desafio

* [ ] Exercício 10 — Caixa eletrônico

---

# 📊 PROGRESSO

```text
Dia 02/100

Exercícios: 7/10
Fáceis:     3/3
Médios:     3/3
Difíceis:   1/3
Desafio:    ⬜
```

---

# 💭 REFLEXÃO DO DIA

Depois de terminar os 10 exercícios, responda:

### 1. Qual exercício mais me fez pensar?

Resposta:

### 2. Em qual exercício eu precisei de ajuda?

Resposta:

### 3. O que eu aprendi hoje que não sabia ontem?

Resposta:

### 4. Eu consigo explicar a lógica dos meus códigos sem olhar para eles?

Resposta:

---

# 🧠 REGRA DOS 100 DIAS

**Não conte apenas exercícios concluídos. Conte problemas que você realmente aprendeu a resolver.**

10 exercícios feitos sem entender valem menos que 3 exercícios entendidos profundamente.

**Consistência > pressa.**

---

## ✅ FIM DO DIA 2

Amanhã: **Dia 3 — Fundamentos de Lógica**

Continue.
