# 🚀 100 Dias de Código — Dia 6

## 📚 Fase 1 — Fundamentos de Lógica

**Dia:** 6/100
**Tema:** Fundamentos de lógica
**Linguagem:** JavaScript
**Quantidade:** 10 exercícios

---

## 🎯 Objetivo do dia

Continuar fortalecendo raciocínio lógico e manipulação de valores.

Hoje o foco é trabalhar principalmente com:

* Variáveis
* Operadores aritméticos
* Divisão
* Resto da divisão (`%`)
* `Math.floor()`
* Conversão e decomposição de valores
* Cálculos com tempo
* Porcentagem
* Construção de algoritmos em etapas

> ⚠️ Tente resolver cada exercício sozinho antes de procurar qualquer solução.

---

# 🟢 FÁCEIS

## 01 — Conversor de minutos

Crie uma função:

```js
converterMinutos(minutos)
```

Ela recebe uma quantidade total de minutos e deve descobrir quantas **horas completas** e quantos **minutos restantes** existem.

### Exemplo

```js
converterMinutos(135)
```

Resultado esperado:

```text
2 hora(s) e 15 minuto(s)
```

### Requisitos

* Use divisão.
* Use `Math.floor()`.
* Use o operador `%`.
* Não utilize bibliotecas externas.

---

## 02 — Idade em dias

Crie uma função:

```js
idadeEmDias(anos, meses, dias)
```

Considere:

```text
1 ano = 365 dias
1 mês = 30 dias
```

A função deve calcular aproximadamente quantos dias a pessoa já viveu.

### Exemplo

```js
idadeEmDias(16, 5, 12)
```

O programa deve transformar cada parte em dias e calcular o total.

### Requisitos

* Calcule separadamente os dias correspondentes aos anos.
* Calcule separadamente os dias correspondentes aos meses.
* Some tudo ao final.

---

## 03 — Média de velocidade

Uma pessoa percorreu determinada distância durante certo período.

Crie:

```js
velocidadeMedia(distancia, horas)
```

A função deve calcular:

```text
velocidade média = distância / tempo
```

### Exemplo

```js
velocidadeMedia(240, 3)
```

Resultado:

```text
80 km/h
```

### Extra

Calcule também quantos quilômetros, em média, foram percorridos por minuto.

---

# 🟡 MÉDIOS

## 04 — Decompondo segundos

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

O programa deve descobrir quantas horas completas existem, depois quantos minutos completos sobraram e finalmente os segundos restantes.

### Dica

Você provavelmente vai precisar usar várias vezes:

```js
Math.floor()
%
```

### Restrição

Não utilize `Date`.

---

## 05 — Consumo de combustível

Crie:

```js
calcularConsumo(distancia, litros)
```

A função recebe:

* Distância percorrida em quilômetros
* Quantidade de litros utilizados

Ela deve calcular o consumo médio:

```text
km/l
```

Depois, calcule quantos litros seriam necessários para percorrer **1.000 km**, mantendo exatamente o mesmo consumo.

### Exemplo

```js
calcularConsumo(600, 40)
```

Primeiro descubra quantos quilômetros o veículo percorre por litro.

Depois utilize esse resultado para calcular o consumo em uma viagem de 1.000 km.

---

## 06 — Divisão de conta

Um grupo de amigos foi a um restaurante.

Crie:

```js
dividirConta(valorConta, pessoas, gorjeta)
```

Onde:

* `valorConta` é o preço total.
* `pessoas` é a quantidade de pessoas.
* `gorjeta` é a porcentagem da gorjeta.

### Exemplo

```js
dividirConta(250, 4, 10)
```

O algoritmo deve calcular:

1. Valor da gorjeta.
2. Valor total após adicionar a gorjeta.
3. Quanto cada pessoa deverá pagar.

### Resultado

Exiba todas as informações de forma organizada.

---

# 🔴 DIFÍCEIS

## 07 — Relógio após meia-noite

Desde meia-noite já se passaram determinada quantidade de segundos.

Crie:

```js
horarioAtual(segundos)
```

A função deve converter esse valor para:

```text
HH:MM:SS
```

### Exemplo

```js
horarioAtual(45296)
```

Você deve descobrir:

* Hora atual
* Minuto atual
* Segundo atual

### Desafio extra

Faça funcionar também quando o número ultrapassar **86.400 segundos**, considerando que depois de `23:59:59` começa um novo dia.

Exemplo:

```js
horarioAtual(90000)
```

O horário deve representar o horário correspondente do **dia seguinte**, e não uma hora maior que 23.

---

## 08 — Caixa de supermercado

Crie uma função:

```js
calcularCompra(precoUnitario, quantidade, desconto)
```

Ela deve calcular:

1. Valor bruto da compra.
2. Valor economizado com o desconto.
3. Valor final.
4. Valor de cada parcela caso a compra seja dividida em **3 parcelas iguais**.

### Exemplo

```js
calcularCompra(79.90, 5, 12)
```

Onde:

```text
Preço unitário: R$ 79,90
Quantidade: 5
Desconto: 12%
```

### Atenção

Valores monetários podem gerar problemas de precisão com números decimais no JavaScript.

Tente apresentar os resultados com duas casas decimais.

---

## 09 — Tempo de download

Você precisa calcular quanto tempo um download levará.

Crie:

```js
tempoDownload(tamanhoMB, velocidadeMbps)
```

Atenção:

```text
1 byte = 8 bits
```

O tamanho do arquivo está em **MB**, enquanto a velocidade está em **Mbps**.

Portanto, primeiro será necessário converter corretamente as unidades.

Depois, descubra o tempo total do download e transforme-o em:

```text
horas
minutos
segundos
```

### Exemplo

```js
tempoDownload(5000, 100)
```

O algoritmo deve informar aproximadamente quanto tempo o download levará.

### Requisitos

* Faça a conversão entre bytes e bits.
* Calcule o tempo total em segundos.
* Converta os segundos para horas, minutos e segundos.

---

# 🏆 DESAFIO DO DIA

## 10 — Estacionamento automático

Um estacionamento cobra pelo tempo que o veículo permaneceu estacionado.

Crie:

```js
calcularEstacionamento(entradaHoras, entradaMinutos, saidaHoras, saidaMinutos, valorHora)
```

### Exemplo

```js
calcularEstacionamento(
    13,
    45,
    17,
    20,
    8
)
```

Significa:

```text
Entrada: 13:45
Saída:   17:20
Valor por hora: R$ 8,00
```

O algoritmo deve descobrir:

1. Quantos minutos o veículo permaneceu estacionado.
2. Quantas horas completas isso representa.
3. Quantos minutos sobraram.
4. Quanto deverá ser pago.

### Regra de cobrança

Qualquer hora iniciada deve ser cobrada como **uma hora inteira**.

Exemplo:

```text
1h00 → cobra 1 hora
1h01 → cobra 2 horas
2h00 → cobra 2 horas
2h30 → cobra 3 horas
```

### Restrição importante

Não utilize:

```js
Date
```

Faça os cálculos manualmente utilizando matemática.

### Dica de raciocínio

Uma estratégia possível é transformar os horários em uma única unidade antes de calcular a diferença.

Você precisa descobrir **qual unidade faz mais sentido**.

### ⭐ Extra

Faça seu algoritmo funcionar também quando o veículo entrar antes da meia-noite e sair depois dela.

Exemplo:

```text
Entrada: 22:30
Saída:   01:15
```

---

# ✅ Checklist — Dia 6

* [x] 01 — Conversor de minutos
* [x] 02 — Idade em dias
* [x] 03 — Média de velocidade
* [ ] 04 — Decompondo segundos
* [ ] 05 — Consumo de combustível
* [ ] 06 — Divisão de conta
* [ ] 07 — Relógio após meia-noite
* [ ] 08 — Caixa de supermercado
* [ ] 09 — Tempo de download
* [ ] 10 — Estacionamento automático

---

## 🧠 Regra do desafio

Antes de considerar um exercício concluído:

1. Tente resolver sozinho.
2. Rode vários testes.
3. Tente encontrar casos em que seu código quebra.
4. Se travar de verdade, estude a solução.
5. Entenda **por que** ela funciona.
6. Apague a solução.
7. Faça novamente sozinho.

O objetivo não é completar 10 arquivos.

O objetivo é chegar ao **Dia 100 pensando melhor como programador**.

---

**Progresso: `6 / 100` 🔥**
