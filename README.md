## Atividades de algoritmos

### Antes de Desenvolver
Fazer o clone deste repositório no github(HTTPS ou SSH):

HTTPS: `https://github.com/GabrielAraujoNeves/atividades.git`

SSH: `git@github.com:GabrielAraujoNeves/atividades.git`

#### Em seguida

+ Rodar `npm install` no diratório do projeto.

+ Instalar `mocha` `chai` para rodar os testes(`npm install mocha`, `npm install chai`).

+ Instalar `nyc` e configurar para conseguir visualizar a cobertura de testes(`npm install nyc`).

+ Mudar para uma nova branch com o comando `git checkout -b 'resolusao'`


OBS:Lembre-se de manter o projeto organizado, então faça cada exercício em um arquivo separado(ex: somaDeNumeros.js, encontraMaiorNumero.js)
e todos eles devem ser exportados e importador para `main.js` para serem chamados na função `main()` que deverar controlar todas as chamadas usando controle de fluxo(`swich-case`)

### Durante o Desenvolvimento

Para manter o trabalho seguro lembre de fazer commits regulares a cada algoritmo completo e a cada teste escrito. O commit deve ser escrito com o que foi feito.

#### Para commit
+ git add .
+ git commit -m 'descrever o que foi feito'
+ git push (na primeira vez que der o comando push, pode usar o `git push -u origin main` para registar o push e depois poder simplificar só com 'git push'

OBS: Commits reguilares e descritivos serão cobrados para mander as boas práticas de desenvolvimento

### Testes

Para garantir a confiabilidade do código, escrever testes unitários que tenham uma cobertura de 100% para todo o projeto.
Os testes devem seguir o mesmo padrão de organização de código, cada sessão separada em seu respectivo arquivo(ex: somaDeNumeros.spec.js, encontraMaiorNumero.spec.js)

OBS: certifique-se de instalar as bibliotecas citadas no `Antes de Desenvolver`

### Algoritmo 1: Soma de Números

Escreva uma função chamada `somarNumeros` que recebe um array de números e retorna a soma de todos os elementos no array.

Exemplo de entrada:
```javascript
somarNumeros([1, 2, 3, 4, 5])
```

Saída esperada:
```
15
```

### Algoritmo 2: Encontrar o Maior Número

Escreva uma função chamada `encontrarMaiorNumero` que recebe um array de números e retorna o maior número presente no array.

Exemplo de entrada:
```javascript
encontrarMaiorNumero([10, 3, 5, 8, 2])
```

Saída esperada:
```
10
```

### Algoritmo 3: Verificar Palíndromo

Escreva uma função chamada `verificarPalindromo` que recebe uma string e verifica se ela é um palíndromo. Um palíndromo é uma palavra que pode ser lida da mesma forma da esquerda para a direita e da direita para a esquerda.

Exemplo de entrada:
```javascript
verificarPalindromo("radar")
```

Saída esperada:
```
true
```

### Algoritmo 4: Calcular Fatorial

Escreva uma função chamada `calcularFatorial` que recebe um número inteiro não negativo e retorna o seu fatorial. O fatorial de um número `n` é o produto de todos os números inteiros positivos menores ou iguais a `n`.

Exemplo de entrada:
```javascript
calcularFatorial(5)
```

Saída esperada:
```
120
```

### Algoritmo 5: Ordenar Array

Escreva uma função chamada `ordenarArray` que recebe um array de números e retorna o array ordenado em ordem crescente.

Exemplo de entrada:
```javascript
ordenarArray([5, 2, 9, 1, 5])
```

Saída esperada:
```
[1, 2, 5, 5, 9]
```

### Algoritmo 6: Média Aritmética

Escreva uma função chamada `calcularMediaAritmetica` que recebe um array de números e retorna a média aritmética de todos os elementos no array.

Exemplo de entrada:
```javascript
calcularMediaAritmetica([10, 20, 30, 40, 50])
```

Saída esperada:
```
30
```

### Algoritmo 7: Remover Duplicatas

Escreva uma função chamada `removerDuplicatas` que recebe um array de números e retorna um novo array sem os elementos duplicados.

Exemplo de entrada:
```javascript
removerDuplicatas([1, 2, 2, 3, 3, 4, 5, 5])
```

Saída esperada:
```
[1, 2, 3, 4, 5]
```

### Algoritmo 8: Converter para CamelCase

Escreva uma função chamada `converterCamelCase` que recebe uma string em formato snake_case e retorna a mesma string em formato camelCase.

Exemplo de entrada:
```javascript
converterCamelCase("hello_world_in_js")
```

Saída esperada:
```
helloWorldInJs
```

### Algoritmo 9: Verificar Anagrama

Escreva uma função chamada `verificarAnagrama` que recebe duas strings e verifica se elas são anagramas. Um anagrama é uma palavra ou frase formada pela transposição das letras de outra palavra ou frase.

Exemplo de entrada:
```javascript
verificarAnagrama("listen", "silent")
```

Saída esperada:
```
true
```

### Algoritmo 10: Ordenar Objetos por Propriedade

Escreva uma função chamada `ordenarObjetosPorPropriedade` que recebe um array de objetos e uma propriedade como parâmetro, e retorna o array de objetos ordenado com base nessa propriedade.

Exemplo de entrada:
```javascript
const pessoas = [
  { nome: "Maria", idade: 30 },
  { nome: "João", idade: 25 },
  { nome: "Ana", idade: 35 }
];

ordenarObjetosPorPropriedade(pessoas, "idade");
```

Saída esperada:
```
[
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Ana", idade: 35 }
]
```
## Tenha um bom teste, entrega 30/07.
