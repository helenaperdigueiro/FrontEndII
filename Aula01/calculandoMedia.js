let infoAluno = (notas) => { //funcao para somar as notas, calcular media e imprimir as mensagens no console
    let somaDasNotas = 0; //variavel que vai guardando o resultado da soma das notas feita no forEach abaixo
    notas.forEach(nota => { //o forEach percorre o array passado como parametro, pega cada elemento do array e soma com o valor armazenado na variavel acima
        somaDasNotas += nota; //isso eh a mesma coisa que somaDasNotas = somaDasNotas + nota
        console.log(`A soma de suas notas até o momento é: ${somaDasNotas}`); //imprime a soma de cada etapa no console
    });

    console.log(`Suas notas foram: ${notas}`); //imprime as notas no console

    let media = somaDasNotas/notas.length; //calcula a media
    console.log(`Média: ${media}`); //imprime a media no console

    if(media >= 7) { //esse if verifica se o aluno foi aprovado pegando a media como condicao
        console.log(`Parabéns pela conclusão do primeiro bimestre. Sua nota foi: ${media}.`); //se a media for maior que 7, vai imprimir essa mensagem no console
    } else {
        console.log(`Que pena! Sua nota não atingiu o mínimo para aprovação. Sua nota foi: ${media}.`); //se a media for menor que 7, vai imprimir essa mensagem no console
    }
    console.log("*****"); //aqui eh soh um separador para ficar mais facil de ver quando mudou de aluno
}

//invoquei a funcao duas vezes com arrays com notas diferentes
infoAluno([8, 10, 9, 7]); //aqui o aluno foi aprovado
infoAluno([5, 7, 5, 5]); //aqui o aluno foi reprovado