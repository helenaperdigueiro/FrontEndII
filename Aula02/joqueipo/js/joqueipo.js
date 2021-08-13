let opcoao1Jogador = prompt("Escolha 1 opcao entre 'pedra', 'papel', 'tesoura':");
let opcao2Jogador = prompt("Escolha 1 opcao entre 'pedra', 'papel', 'tesoura':");
let opcao3Jogador = prompt("Escolha 1 opcao entre 'pedra', 'papel', 'tesoura':");
let opcoesJogador = [];
opcoesJogador.push(opcoao1Jogador, opcao2Jogador, opcao3Jogador);

let pontosJogador;
let pontosComputador;

let melhorDeTres = arrayDeOpcoesJogador => {
    arrayDeOpcoesJogador.forEach((opcaoJogador, index) => {
    let opcaoComputador;
    let numero = Math.floor(Math.random() * 3);
    if (numero <= 0) {
        opcaoComputador = "pedra";
    } else if (numero <= 1) {
        opcaoComputador = "papel";
    } else {
        opcaoComputador = "tesoura";
    }

    console.log(`----------\nRodada ${index+1}\nJogador: ${opcaoJogador} X Computador: ${opcaoComputador}`);

    if(opcaoComputador == "pedra") {
        if(opcaoJogador == "pedra") {
            console.log("Empatou");
        } else if(opcaoJogador == "tesoura") {
            pontosComputador++;
            console.log("Computador ganhou");
        } else {
            pontosJogador++;
            console.log("Jogador ganhou");
        }
    } else if(opcaoComputador == "papel") {
        if(opcaoJogador == "papel") {
            console.log("Empatou");
        } else if(opcaoJogador == "pedra") {
            pontosComputador++;
            console.log("Computador ganhou");
        } else {
            pontosJogador++;
            console.log("Jogador ganhou");
        }
    } else {
        if(opcaoJogador == "tesoura") {
            console.log("Empatou");
        } else if(opcaoJogador == "papel") {
            pontosComputador++;
            console.log("Computador ganhou");
        } else {
            pontosJogador++;
            console.log("Jogador ganhou");
        }
    }
}
)
    console.log(`----------\nResultado da melhor de tres:`);

    if(pontosJogador > pontosComputador) {
        console.log("O jogador ganhou!")
    } else if(pontosComputador > pontosJogador) {
        console.log("O computador ganhou!")
    } else {
        console.log("Empatou!")
    }
}


melhorDeTres(opcoesJogador);