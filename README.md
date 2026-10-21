Bloco 1: Lógica e Fundamentos
Desafio 1: O "Efeito" das Aspas
Pergunta: Se eu criar uma variável let numero = "50" e outra let numeroReal = 50, qual a diferença técnica entre elas que o computador enxerga? O que acontece se você tentar somar numero + 5 comparado a numeroReal + 5?

Resposta:

A variável numero é do tipo string (texto), porque o valor "50" está entre aspas. Já numeroReal é do tipo number (número), porque o valor 50 não está entre aspas.

Exemplo:


let numero = "50";
let numeroReal = 50;

console.log(typeof numero);     // string
console.log(typeof numeroReal); // number

console.log(numero + 5);     // "505"
console.log(numeroReal + 5); // 55
Isso acontece porque o JavaScript junta os valores quando usa + com uma string, mas realiza uma soma matemática quando os valores são números.

Desafio 2: Decisão Rápida (Ternário)
Tarefa: Escreva o código usando o operador ternário para a variável idade = 17. A estrutura deve salvar o resultado numa variável chamada status.

Resposta:


let idade = 17;

let status = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(status);
O resultado será "Menor de idade", porque 17 é menor que 18.

Desafio 3: Estrutura de Repetição
Tarefa: Escreva apenas a estrutura do laço for (a linha inicial com let i...). Como você define o ponto de parada para que ele vá exatamente até 10?

Resposta:


for (let i = 1; i <= 10; i++) {
O ponto de parada é i <= 10, porque o laço continua enquanto i for menor ou igual a 10. O i++ aumenta o valor em 1 a cada repetição.

Bloco 2: Manipulação de Dados (Arrays e Funções)
Desafio 4: Onde entra o item?
Pergunta: Imagine que você tem um array lista = ['Banana', 'Maçã']. Na revisão, vimos push, pop e unshift.

1. Qual comando você usa para colocar 'Uva' no início da lista?

Resposta:


lista.unshift("Uva");
O unshift() adiciona um elemento no início do array.

2. Qual comando você usa para remover 'Maçã' (que está no final)?

Resposta:


lista.pop();
O pop() remove o último elemento do array.

3. Se você usar push('Melão'), em que posição (índice numérico) ele vai ficar?

Resposta:


lista.push("Melão");
Se o array original ainda for ["Banana", "Maçã"], "Melão" ficará no índice 2, porque os índices começam em 0.

Desafio 5: Arrow Function
Tarefa: Converta a função abaixo para uma Arrow Function de uma linha só, conforme praticado no Exercício 6.

Função original:


function somar(a, b) {
    return a + b;
}
Resposta:


const somar = (a, b) => a + b;
A Arrow Function permite escrever a função de forma mais curta. Como existe apenas uma expressão, não precisamos usar chaves nem escrever return.

Desafio 6: A Peneira de Dados
Raciocínio: O .filter() modifica a lista original de alunos ou cria uma nova? Se você não salvar o resultado do filter numa variável, o que acontece com os dados filtrados?

Resposta:

O .filter() cria e retorna um novo array, sem modificar o array original.

Exemplo:


let alunos = [5, 8, 9, 4];

alunos.filter(nota => nota >= 7);
Nesse caso, o novo array [8, 9] é retornado, mas não foi salvo em nenhuma variável. Assim, não temos uma referência para utilizá-lo posteriormente.

O correto seria:


let aprovados = alunos.filter(nota => nota >= 7);

console.log(aprovados); // [8, 9]
Bloco 3: DOM e Interação (O "Coração" da Prova)
Desafio 7: Capturando Valores
Pergunta: Por que é obrigatório usar Number() ou parseFloat() ao pegar o .value de um input numérico? O que o JavaScript faz se você esquecer essa conversão e tentar fazer valor1 + valor2?

Resposta:

O .value de um input HTML retorna uma string, mesmo quando o usuário digita números. Por isso, precisamos converter os valores para números antes de realizar operações matemáticas.

Exemplo sem conversão:


let valor1 = "10";
let valor2 = "20";

console.log(valor1 + valor2); // "1020"
O JavaScript concatena os valores, juntando-os como texto.

Exemplo com conversão:


let valor1 = Number("10");
let valor2 = Number("20");

console.log(valor1 + valor2); // 30
Agora o JavaScript realiza a soma matemática.

Desafio 8: Seletores CSS no JS
Pergunta: Qual a diferença entre usar document.querySelector('.paragrafo') e document.querySelectorAll('.paragrafo')? Se você usar o primeiro (sem o All), quantos parágrafos serão pintados?

Resposta:

document.querySelector('.paragrafo') seleciona apenas o primeiro elemento que corresponde ao seletor.

document.querySelectorAll('.paragrafo') seleciona todos os elementos que correspondem ao seletor.

Se você usar querySelector() sem o All, apenas um parágrafo será pintado: o primeiro encontrado.

Exemplo para selecionar todos e pintar de vermelho:


document.querySelectorAll(".paragrafo").forEach(paragrafo => {
    paragrafo.style.color = "red";
});
Desafio 9: Eventos
Tarefa: Escreva a linha de código que adiciona esse "ouvinte de evento" no elemento btnSoma, para executar uma função chamada calcular quando o botão for clicado. Não vale usar onclick no HTML.

Resposta:


btnSoma.addEventListener("click", calcular);
O addEventListener() registra o evento, "click" indica que ele será acionado pelo clique e calcular é a função que será executada.

Atenção: escreva calcular sem parênteses, para passar a função como referência.

Desafio Integrado: Simulação de Prova
Situação-problema: Você criou a calculadora do Desafio Final. O usuário digitou "10" no primeiro campo e "0" no segundo campo e clicou em Dividir.

1. O que o seu código deve verificar antes de fazer a conta?
Resposta:

O código deve verificar se o segundo número, que é o divisor, é igual a zero. A divisão por zero não deve ser realizada, pois em JavaScript uma operação como 10 / 0 retorna Infinity.

2. Escreva a estrutura if que impede o programa de quebrar ou mostrar "Infinity".
Resposta:


if (valor2 === 0) {
    resultado.innerText = "Não se divide por 0";
} else {
    resultado.innerText = valor1 / valor2;
}
Se valor2 for igual a zero, o programa exibirá uma mensagem de erro. Caso contrário, realizará a divisão normalmente.
