
// Exercício 1: Calculadora de Média
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

let media = calcularMedia(8, 7, 9);

if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

console.log("Média:", media);


// Exercício 2: Verificador de Tipo
function verificarTipo(variavel) {
    console.log("A variável é do tipo " + typeof variavel);
}

verificarTipo("Olá");
verificarTipo(25);
verificarTipo(true);


// Exercício 3: Operador Ternário para Status
let idade = 17;

let status = idade >= 18
    ? "Maior de idade"
    : "Menor de idade";

console.log(status);


// Exercício 4: Tabuada com for
let numero = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}


// Exercício 5: Dia da Semana com switch
let diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido");
}

// Exercício 6: Arrow Function
const calcularArea = (base, altura) => base * altura;

console.log("Área:", calcularArea(5, 3));


// Exercício 7: Lista de Compras
let listaDeCompras = ["Arroz", "Feijão", "Batata"];

listaDeCompras.push("Macarrão");
listaDeCompras.unshift("Suco");
listaDeCompras.pop();

console.log("Lista final:", listaDeCompras);


// Exercício 8: Filtrar, Mapear, Reduzir e Encontrar
const alunos = [
    { nome: "Ana", nota: 8.5, idade: 20 },
    { nome: "João", nota: 6.7, idade: 22 },
    { nome: "Maria", nota: 9.3, idade: 19 },
    { nome: "Carlos", nota: 5.0, idade: 21 },
    { nome: "Beatriz", nota: 7.8, idade: 20 }
];

// 1. Filtrar aprovados
const aprovados = alunos.filter(aluno => aluno.nota >= 7);

console.log("Aprovados:", aprovados);


// 2. Criar um array apenas com os nomes
const nomesAlunos = alunos.map(aluno => aluno.nome);

console.log("Nomes:", nomesAlunos);


// 3. Calcular a média de idade
const somaIdades = alunos.reduce((soma, aluno) => {
    return soma + aluno.idade;
}, 0);

const mediaIdade = somaIdades / alunos.length;

console.log("Soma das idades:", somaIdades);
console.log("Média de idade:", mediaIdade);


// 4. Encontrar o primeiro aluno com nota menor que 6
const alunoNotaBaixa = alunos.find(aluno => aluno.nota < 6);

console.log("Primeiro aluno com nota menor que 6:", alunoNotaBaixa);
