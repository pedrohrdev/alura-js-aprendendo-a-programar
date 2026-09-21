# 🧠 100 Dias de Código — Dia 05

## Fase 1 — Fundamentos de Lógica

**Dia:** 05/100
**Fase:** Fundamentos de Lógica — Dias 1–10
**Quantidade:** 10 exercícios

---

## 🎯 Objetivo do dia

Treinar raciocínio lógico usando principalmente:

* Variáveis
* Operadores aritméticos
* `%` (resto da divisão)
* `Math.floor()`
* Cálculos sequenciais
* Decomposição de valores
* Manipulação básica de números
* Criação de funções simples

> Tente resolver cada exercício sozinho antes de procurar ajuda.

---

# 🟢 Fáceis

## 01 — Conversor de minutos

Crie uma função:

```js
converterMinutos(minutos)
```

Ela recebe uma quantidade total de minutos e deve descobrir quantas **horas completas** existem e quantos **minutos restam**.

### Exemplo

```js
converterMinutos(137)
```

Resultado esperado:

```text
2 hora(s)
17 minuto(s)
```

### Regras

* Use `Math.floor()`.
* Use `%`.
* Não utilize loops.

---

## 02 — Dividindo uma conta

Quatro amigos foram a uma lanchonete.

Crie uma função:

```js
dividirConta(valorTotal)
```

A função deve calcular quanto cada pessoa deve pagar.

Porém, além disso, existe uma taxa de serviço de **10%** sobre o valor original.

### Exemplo

```js
dividirConta(200)
```

Você deve descobrir:

```text
Valor da conta: R$ 200,00
Taxa de serviço: R$ 20,00
Total: R$ 220,00
Valor por pessoa: R$ 55,00
```

### Regras

* São sempre 4 pessoas.
* Não use valores prontos além da porcentagem e quantidade de pessoas.
* Calcule cada etapa separadamente.

---

## 03 — Idade em dias

Crie uma função:

```js
idadeEmDias(anos, meses, dias)
```

Ela deve calcular aproximadamente quantos dias uma pessoa viveu.

Considere:

```text
1 ano = 365 dias
1 mês = 30 dias
```

### Exemplo

```js
idadeEmDias(16, 5, 10)
```

O programa deve calcular:

```text
dias dos anos
+
dias dos meses
+
dias adicionais
```

E mostrar o total.

---

# 🟡 Médios

## 04 — Converter segundos

Crie uma função:

```js
converterSegundos(totalSegundos)
```

Ela deve transformar uma quantidade de segundos em:

```text
horas
minutos
segundos
```

### Exemplo

```js
converterSegundos(7384)
```

O resultado deve seguir este formato:

```text
2h 3min 4s
```

### Dica

Primeiro descubra quantas horas completas existem.

Depois descubra quantos segundos sobraram.

Com o restante, descubra os minutos.

Por último, descubra os segundos restantes.

---

## 05 — Caixa de produtos

Uma loja precisa organizar produtos em caixas.

Cada caixa comporta exatamente **12 produtos**.

Crie uma função:

```js
organizarProdutos(quantidade)
```

Ela deve descobrir:

* Quantas caixas completas podem ser preenchidas.
* Quantos produtos ficarão sobrando.

### Exemplo

```js
organizarProdutos(157)
```

Resultado:

```text
13 caixas completas
1 produto sobrando
```

### Regras

Resolva utilizando divisão, `Math.floor()` e `%`.

---

## 06 — Decompondo um número

Crie uma função:

```js
decomporNumero(numero)
```

Ela receberá um número inteiro entre `0` e `9999`.

Você deve descobrir separadamente:

```text
milhares
centenas
dezenas
unidades
```

### Exemplo

```js
decomporNumero(5837)
```

Resultado:

```text
Milhares: 5
Centenas: 8
Dezenas: 3
Unidades: 7
```

### Restrição

Não transforme o número em `string`.

Resolva apenas matematicamente.

---

# 🔴 Difíceis

## 07 — Estacionamento

Um estacionamento cobra:

```text
R$ 8,00 por hora completa
R$ 2,00 por cada 15 minutos adicionais
```

Crie uma função:

```js
calcularEstacionamento(minutos)
```

### Exemplo

Se um carro ficou:

```text
135 minutos
```

Você deve decompor esse tempo em:

```text
2 horas completas
15 minutos adicionais
```

E então calcular o preço correspondente.

### Importante

Neste exercício, considere que a entrada sempre terá os minutos adicionais em múltiplos de `15`.

Exemplos válidos:

```text
60
75
90
105
120
135
```

---

## 08 — Distribuição de dinheiro

Uma empresa possui determinado valor para distribuir igualmente entre **7 funcionários**.

Crie uma função:

```js
distribuirDinheiro(valor)
```

Para simplificar, o parâmetro será recebido em **reais inteiros**.

A função deve descobrir:

1. Quanto cada funcionário recebe em reais inteiros.
2. Quanto sobra para a empresa.

### Exemplo

```js
distribuirDinheiro(1000)
```

Você deve obter algo no formato:

```text
Cada funcionário recebe: R$ ...
Sobra para a empresa: R$ ...
```

### Restrição

A divisão deve ser feita em valores inteiros.

Use:

```js
Math.floor()
```

e:

```js
%
```

---

## 09 — Relógio digital

Crie uma função:

```js
relogioDigital(segundos)
```

Ela recebe a quantidade de segundos que se passaram desde `00:00:00`.

Você deve descobrir qual horário isso representa.

### Exemplo

```js
relogioDigital(45296)
```

O programa deve calcular:

```text
horas
minutos
segundos
```

E mostrar no formato:

```text
HH:MM:SS
```

### Desafio extra

Se conseguir, faça:

```text
5:3:9
```

aparecer como:

```text
05:03:09
```

Mas resolva primeiro a decomposição do tempo. A formatação é secundária.

---

# 🟣 Desafio do dia

## 10 — Máquina registradora

Você está criando parte do sistema de uma loja.

Crie uma função:

```js
fecharCompra(valorCompra, valorPago)
```

Para este exercício, considere que os valores recebidos serão em **reais inteiros**.

A função deve calcular o troco e decompor esse valor utilizando:

```text
100
50
20
10
5
2
1
```

### Exemplo

```js
fecharCompra(173, 300)
```

Primeiro:

```text
Troco = 300 - 173
```

Depois, decomponha o troco usando a maior quantidade possível de cada cédula.

O resultado deve seguir aproximadamente:

```text
Compra: R$ 173
Pago: R$ 300
Troco: R$ 127

Notas de R$100: ...
Notas de R$50: ...
Notas de R$20: ...
Notas de R$10: ...
Notas de R$5: ...
Notas de R$2: ...
Notas de R$1: ...
```

### Regras

* Não utilize arrays.
* Não utilize loops.
* Não utilize condicionais para calcular as notas.
* Resolva usando operações matemáticas.
* Use `Math.floor()` e `%`.
* Atualize o valor restante depois de calcular cada cédula.

### Objetivo

Esse exercício junta vários conceitos trabalhados nos primeiros dias:

```text
valor inicial
↓
cálculo
↓
obter parte do valor
↓
calcular restante
↓
usar restante no próximo cálculo
```

---

# ✅ Checklist do Dia 05

* [x] 01 — Conversor de minutos
* [x] 02 — Dividindo uma conta
* [x] 03 — Idade em dias
* [ ] 04 — Converter segundos
* [ ] 05 — Caixa de produtos
* [ ] 06 — Decompondo um número
* [ ] 07 — Estacionamento
* [ ] 08 — Distribuição de dinheiro
* [ ] 09 — Relógio digital
* [ ] 10 — Máquina registradora

---

## 🏁 Regra do dia

Não importa apenas fazer o código funcionar.

Antes de considerar um exercício concluído, você deve conseguir explicar:

1. O que cada variável guarda.
2. Por que utilizou divisão.
3. Por que utilizou `%`.
4. O que `Math.floor()` está fazendo.
5. Como o resultado de uma etapa influencia a próxima.

Se travar em algum exercício, tente quebrá-lo em cálculos menores antes de procurar a solução.

**Dia 05/100 — Fundamentos de Lógica.**
