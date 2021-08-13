const playerChoice = 'pedra';

let pontosJogador = 0;
let pontosComputador = 0;

const jogo = () => {
	let computerChoice;
	const randomNumber = Math.floor(Math.random() * 3);
	switch (randomNumber) {
		case 0:
			computerChoice = 'pedra';
			break;
		case 1:
			computerChoice = 'papel';
			break;
		case 2:
			computerChoice = 'tesoura';
			break;
	}

	console.log(`computador: ${computerChoice} X jogador: ${playerChoice}`);

	switch (playerChoice) {
		case 'pedra':
			if (computerChoice == 'pedra') {
				console.log('Empatou');
			} else if (computerChoice == 'papel') {
				console.log('Computador ganhou');
			} else {
				console.log('Jogador ganhou');
			}
			break;
		case 'papel':
			if (computerChoice == 'papel') {
				console.log('Empatou');
			} else if (computerChoice == 'tesoura') {
				console.log('Computador ganhou');
			} else {
				console.log('Jogador ganhou');
			}
			break;
		case 'tesoura':
			if (computerChoice == 'tesoura') {
				console.log('Empatou');
			} else if (computerChoice == 'pedra') {
				console.log('Computador ganhou');
			} else {
				console.log('Jogador ganhou');
			}
			break;
	}

  if(/*computador ganhou*/){
    pontosComputador++
  } else if (/* jogador ganhou */){
    pontosJogador++
  } else {
    console.log('Ninguém pontuou! Empate')
  }

  return "";

};



console.log(jogo());