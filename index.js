const game = ['Rocks', 'Paper', 'Scissor', 'Lizard', 'Spock'];
const result = ['Match Draw', 'You Win', 'Computer Wins'];

const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');
const userSelection = document.getElementById('userSelection');
const computerSelection = document.getElementById('computerSelection');
const resultDisplay = document.getElementById('result');
const pantagon = document.getElementById('pantagon');
const selection = document.getElementById('selection');
const end = document.getElementById('end');
const winner = document.getElementById('winner');

let draw = 0, win = 0, lose = 0;

const comp_choice = () => {
  const user_val = clicked[0];
  const computer = Math.floor(Math.random() * game.length);
  userSelection.innerText = `You choose: "${user_val}"`;
  computerSelection.innerText = `Computer choose: "${game[computer]}"`;

  const userIndex = game.indexOf(user_val);
  const computerIndex = computer;

  if (userIndex === computerIndex) return result[0]; // Draw

  if ((userIndex + 1) % game.length === computerIndex || (userIndex + 3) % game.length === computerIndex) {
    win++;
    userScore.innerText = win;
    return result[1]; // User wins
  } else {
    lose++;
    computerScore.innerText = lose;
    return result[2]; // Computer wins
  }
};

const button = (click1) => {
  clicked.push(click1);
  const data = comp_choice();

  if (win === 9 && data === result[1]) {
    endGame('user');
  } else if (lose === 9 && data === result[2]) {
    endGame('computer');
  } else {
    if (data === result[0]) {
      draw++;
    } else if (data === result[1]) {
      win++;
    } else {
      lose++;
    }
    updateUI(data);
  }

  clicked.shift();
};

const updateUI = (data) => {
  resultDisplay.innerText = data;
  userScore.innerText = win;
  computerScore.innerText = lose;
  pantagon.style.visibility = 'hidden';
  selection.style.visibility = 'hidden';
  end.style.visibility = 'visible';
  winner.innerText = `Game winner is ${data === result[1] ? 'user' : 'computer'}`;
};

const endGame = (winner) => {
  pantagon.style.visibility = 'hidden';
  selection.style.visibility = 'hidden';
  end.style.visibility = 'visible';
  winner.innerText = `Game winner is ${winner}`;
};
