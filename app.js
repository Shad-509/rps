function computerPlay() {
  const random = Math.random();
  if (random < 0.34) {
    return 'rock';
  } else if (random <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
//console.log(computerPlay());
// let playerSelection = prompt('rock paper or scissors?');
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection === 'rock') {
      return 'Tie';
    } else if (computerSelection === 'paper') {
      computerScore++;
      return 'Computer Wins! Paper beats Rock';
    } else {
      playerScore++;
      return 'Player Wins! Rock beats Scissors';
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++;
      return 'Player Wins! Paper beats Rock';
    } else if (computerSelection === 'scissors') {
      computerScore++;
      return 'Computer Wins! Scissors beats Paper';
    } else {
      return 'Tie';
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      computerScore++;
      return 'Computer Wins! Rock beats Scissors';
    } else if (computerSelection === 'paper') {
      playerScore++;
      return 'Player Wins! Scissors beats Paper ';
    } else {
      return 'Tie';
    }
  }
}

playerScore = parseInt(0);
computerScore = parseInt(0);

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Pick a move rock paper or scissors');
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log('your score = ' + playerScore);
    console.log("Computer's score = " + computerScore);
  }
}
game();
