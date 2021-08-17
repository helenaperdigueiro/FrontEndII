// Exercício 1:
// Crie um algoritmo que liste todos os 12 meses do ano. Para isso, você deve criar um vetor que irá conter, em cada índice, o nome de um mês. 
//Com este vetor criado, utilize o for…of pra realizar a leitura destes doze elementos.

let meses = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
for(var mes of meses) {
    console.log(mes);
}

// Exercício 2:
// Crie um vetor que tenha 10 objetos em seu interior. Cada objeto deverá possuir três propriedades: 
//nome: nomeDoAluno, idade: idadeDoAluno, matricula: matriculaDoAluno. Crie 10 alunos fictícios. 
//Após a criação deste vetor com objetos, utilize o laço for…of para realizar a leitura desta lista de objetos.
// Obs: Todas as propriedades devem ser mostradas no console.

let alunos = [
    {
        nome: "Helena",
        idade: 30,
        matricula: 1,
    },
    {
        nome: "Joao",
        idade: 30,
        matricula: 2,
    },
    {
        nome: "Maria",
        idade: 30,
        matricula: 3,
    },
    {
        nome: "Rafael",
        idade: 30,
        matricula: 4,
    },
    {
        nome: "William",
        idade: 30,
        matricula: 5,
    },
    {
        nome: "Marcelo",
        idade: 30,
        matricula: 6,
    },
    {
        nome: "Marcela",
        idade: 30,
        matricula: 7,
    },
    {
        nome: "Beatriz",
        idade: 30,
        matricula: 8,
    },
    {
        nome: "Natalia",
        idade: 30,
        matricula: 9,
    },
    {
        nome: "Roberto",
        idade: 30,
        matricula: 10,
    },
]

for(let aluno of alunos) {
    console.log(aluno);
}

let roberto = {
    nome: "Roberto",
    idade: 30,
    matricula: 10,
}

for(let dado in roberto) {
    console.log(dado, roberto[dado]);
}

// Exercício 3:
// Crie uma lista de elementos que contenha 10 números. Os números devem estar na seguinte ordem: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]. 
//Utilize o laço for…of para realizar a leitura desta lista. Exiba no console os valores da lista.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for(let numero of numeros) {
    console.log(numero);
}