console.log(`Welcome player one!`);

//Computer decision function

function computerPlay() {
  let sign = '';
  let key = 0;
  key = Math.floor(Math.random() * 3) + 1;

  switch (key) {
    case 1:
      sign = 'Rock';
      break;
    case 2:
      sign = 'Paper';
      break;

    default:
      sign = 'Scissors';
      break;
  }
  return sign;
}

//One round of play

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  //   console.log(player);
  //   console.log(computer);

  if (player === computer) {
    return `Its a tie! ${player[0].toUpperCase()}${player.slice(
      1
    )} and ${computer}`;
  } else if (player === 'rock' && computer === 'scissors') {
    return `WOW You win! ${player[0].toUpperCase()}${player.slice(
      1
    )} beats ${computer}`;
  } else if (player === 'paper' && computer === 'rock') {
    return `WOW You win! ${player[0].toUpperCase()}${player.slice(
      1
    )} beats ${computer}`;
  } else if (player === 'scissors' && computer === 'paper') {
    return `WOW You win! ${player[0].toUpperCase()}${player.slice(
      1
    )} beats ${computer}`;
  } else if (player === 'rock' && computer === 'paper') {
    return `You Loose! ${player[0].toUpperCase()}${player.slice(
      1
    )} looses to ${computer}`;
  }
  if (player === 'scissors' && computer === 'rock') {
    return `You Loose! ${player[0].toUpperCase()}${player.slice(
      1
    )} looses to ${computer}`;
  } else if (player === 'paper' && computer === 'scissors') {
    return `You Loose! ${player[0].toUpperCase()}${player.slice(
      1
    )} looses to ${computer}`;
  }
}

const playerSelection = 'paper';

//launching  games in a row with same player variant

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(`*********** Game ${i + 1} **********`);
    console.log(playRound(playerSelection, computerPlay()));
  }
}

game();
