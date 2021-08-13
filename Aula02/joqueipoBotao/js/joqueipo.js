let opcoesJogador = [];

for(i = 1; i <= 3; i++) {
    let opcaoImputada = prompt("Escolha 1 opcao entre 'pedra', 'papel', 'tesoura':");
    // if(opcaoImputada != /^(pedra|papel|tesoura)$/) {
    //     alert("Essa opção é inválida.");
    // } else {
        opcoesJogador.push(opcaoImputada);
    // }
}

// for (i = 1; i <= 3; i++) {
//     let opcaoImputada = prompt("Escolha 1 opcao entre 'pedra', 'papel', 'tesoura':");

//     while (opcaoImputada != /^(pedra|papel|tesoura)$/) {
//         alert("Essa opção é inválida.")
//     }
//     opcoesJogador.push(opcaoImputada);
// }


// for(i = 1; i <=3; i++) {
//     let opcaoImputada = prompt("Escolha 1 opcao entre 'pedra', 'papel', 'tesoura':");
//     if(opcaoImputada == /^(pedra|papel|tesoura)$/) {
//         opcoesJogador.push(opcaoImputada);
//         break;
//     } else {
//         alert("Essa opção é inválida.");
//     }
// }


let opcoesValidas = ["pedra", "papel", "tesoura"];


let resultadoDaRodada1 = document.getElementById("rodada1");
let resultadoDaRodada2 = document.getElementById("rodada2");
let resultadoDaRodada3 = document.getElementById("rodada3");

let escolhaJogador1 = document.getElementById("escolhaJogador1");
let escolhaJogador2 = document.getElementById("escolhaJogador2");
let escolhaJogador3 = document.getElementById("escolhaJogador3");

let escolhaComputador1 = document.getElementById("escolhaComputador1");
let escolhaComputador2 = document.getElementById("escolhaComputador2");
let escolhaComputador3 = document.getElementById("escolhaComputador3");

let resultadoDaMelhorDeTres2 = document.getElementById("resultadoDaMelhorDeTres");

let resultadosDasRodadas = [];
let opcoesComputador = [];
let resultadoDaMelhorDeTres = 0;

let pontosJogador = 0;
let pontosComputador = 0;

let melhorDeTres = arrayDeOpcoesJogador => {

    arrayDeOpcoesJogador.forEach((opcaoJogador, index) => {
        let numero = Math.floor(Math.random() * 3);
        if (numero <= 0) {
            opcoesComputador.push("pedra");
        } else if (numero <= 1) {
            opcoesComputador.push("papel");
        } else {
            opcoesComputador.push("tesoura");
        }

        if (opcoesComputador[index] == "pedra") {
            if (opcaoJogador == "pedra") {
                resultadosDasRodadas.push("Empatou");
            } else if (opcaoJogador == "tesoura") {
                pontosComputador++;
                resultadosDasRodadas.push("Computador ganhou");
            } else {
                pontosJogador++;
                resultadosDasRodadas.push("Jogador ganhou");
            }
        } else if (opcoesComputador[index] == "papel") {
            if (opcaoJogador == "papel") {
                resultadosDasRodadas.push("Empatou");
            } else if (opcaoJogador == "pedra") {
                pontosComputador++;
                resultadosDasRodadas.push("Computador ganhou");
            } else {
                pontosJogador++;
                resultadosDasRodadas.push("Jogador ganhou");
            }
        } else {
            if (opcaoJogador == "tesoura") {
                resultadosDasRodadas.push("Empatou");
            } else if (opcaoJogador == "papel") {
                pontosComputador++;
                resultadosDasRodadas.push("Computador ganhou");
            } else {
                pontosJogador++;
                resultadosDasRodadas.push("Jogador ganhou");
            }
        }
    }
    )

    if (pontosJogador > pontosComputador) {
        resultadoDaMelhorDeTres = "O jogador ganhou!";
    } else if (pontosComputador > pontosJogador) {
        resultadoDaMelhorDeTres = "O computador ganhou!";
    } else {
        resultadoDaMelhorDeTres = "Empatou!";
    }
}


melhorDeTres(opcoesJogador);

resultadoDaRodada1.innerHTML = resultadosDasRodadas[0];
resultadoDaRodada2.innerHTML = resultadosDasRodadas[1];
resultadoDaRodada3.innerHTML = resultadosDasRodadas[2];

escolhaJogador1.innerHTML = opcoesJogador[0];
escolhaJogador2.innerHTML = opcoesJogador[1];
escolhaJogador3.innerHTML = opcoesJogador[2];

escolhaComputador1.innerHTML = opcoesComputador[0];
escolhaComputador2.innerHTML = opcoesComputador[1];
escolhaComputador3.innerHTML = opcoesComputador[2];

resultadoDaMelhorDeTres2.innerHTML = resultadoDaMelhorDeTres;