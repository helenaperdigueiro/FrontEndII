let opcoesJogador = [];
let regex = /^(pedra|papel|tesoura)$/;
let tresCertas = 0;

while(tresCertas < 3) {
    let opcaoImputada = prompt("Escolha 1 opcao entre 'pedra', 'papel', 'tesoura':").toLocaleLowerCase();
    if(regex.test(opcaoImputada)) {
        opcoesJogador.push(opcaoImputada);
        tresCertas++;
    } else {
        alert("Essa opção é inválida.");
    }
}

let resultadosDasRodadas = [];
let opcoesComputador = [];
let resultadoDaMelhorDeTres = 0;

let pontosJogador = 0;
let pontosComputador = 0;

let melhorDeTres = arrayDeOpcoesJogador => {

    arrayDeOpcoesJogador.forEach((opcaoJogador, index) => {
        const options = ["pedra", "papel", "tesoura"];
        let opcaoComputador = array => array[Math.floor(Math.random() * options.length)];
        opcoesComputador.push(opcaoComputador(options));

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

document.getElementById("rodada1").innerHTML = resultadosDasRodadas[0];
document.getElementById("rodada2").innerHTML = resultadosDasRodadas[1];
document.getElementById("rodada3").innerHTML = resultadosDasRodadas[2];

document.getElementById("escolhaJogador1").innerHTML = opcoesJogador[0];
document.getElementById("escolhaJogador2").innerHTML = opcoesJogador[1];
document.getElementById("escolhaJogador3").innerHTML = opcoesJogador[2];

document.getElementById("escolhaComputador1").innerHTML = opcoesComputador[0];
document.getElementById("escolhaComputador2").innerHTML = opcoesComputador[1];
document.getElementById("escolhaComputador3").innerHTML = opcoesComputador[2];

document.getElementById("resultadoDaMelhorDeTres").innerHTML = resultadoDaMelhorDeTres;