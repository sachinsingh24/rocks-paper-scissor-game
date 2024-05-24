const game = ['Rocks', 'Paper', 'Scissor', 'lizard', 'spock'];
const result = [
  'Result = Match Draw',
  'Result = You Win',
  'Result = Computer Win',
];
const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');
const userSelection = document.getElementById('userSelection');
const computerSelection = document.getElementById('computerSelection');
const result1 = document.getElementById('result');
const pantagon = document.getElementById('pantagon');
const selection = document.getElementById('selection');
const end = document.getElementById('end');
const winner = document.getElementById('winner');

//Primary variable
const clicked = [];
let draw = 0,
  win = 0,
  lose = 0;

// functions

const forUser = () => {
  win++;
  userScore.innerText = win;
  pantagon.style.visibility = 'hidden';
  selection.style.visibility = 'hidden';
  end.style.visibility = 'visible';
  winner.innerText = `Game winner is user`;
};
const forComputer = () => {
  lose++;
  computerScore.innerText = lose;
  selection.style.visibility = 'hidden';
  pantagon.style.visibility = 'hidden';
  end.style.visibility = 'visible';
  winner.innerText = `Game winner is computer`;
};

//this function for computer choose random values and compare with users value
const comp_choice = () => {
  const user_val = clicked[0];
  userSelection.innerText = `You choose : "${user_val}"`;
  //computer select random values and compare with users value
  const computer = (game.computer = Math.floor(Math.random() * 5));
  computerSelection.innerText = `Computer choose : "${game[computer]}"`;
  if (computer == 0) {
    //computer choose "rocks"
    if (game[0] == user_val) {
      return result[0];
    } else if (game[1] == user_val) {
      return result[1];
    } else if (game[2] == user_val) {
      return result[2];
    } else if (game[3] == user_val) {
      return result[1];
    } else {
      return result[2];
    }
  } else if (computer == 1) {
    //computer choose "Paper"
    if (game[0] == user_val) {
      return result[2];
    } else if (game[1] == user_val) {
      return result[0];
    } else if (game[2] == user_val) {
      return result[1];
    } else if (game[3] == user_val) {
      return result[2];
    } else {
      return result[1];
    }
  } else if (computer == 2) {
    //computer choose "Scissor"
    if (game[0] == user_val) {
      return result[1];
    } else if (game[1] == user_val) {
      return result[2];
    } else if (game[2] == user_val) {
      return result[0];
    } else if (game[3] == user_val) {
      return result[1];
    } else {
      return result[2];
    }
  } else if (computer == 3) {
    //computer choose "Lizard"
    if (game[0] == user_val) {
      return result[2];
    } else if (game[1] == user_val) {
      return result[1];
    } else if (game[2] == user_val) {
      return result[2];
    } else if (game[3] == user_val) {
      return result[0];
    } else {
      return result[1];
    }
  } else {
    //computer choose "Spock"
    if (game[0] == user_val) {
      return result[1];
    } else if (game[1] == user_val) {
      return result[2];
    } else if (game[2] == user_val) {
      return result[1];
    } else if (game[3] == user_val) {
      return result[2];
    } else {
      return result[0];
    }
  }
};

//perform click function and display results
const button = (click1) => {
  clicked.push(click1);
  const data = comp_choice();
  // display winner
  if (win == 9 && data == result[1]) {
    forUser();
  } else if (lose == 9 && data == result[2]) {
    forComputer();
  } else if (data == result[0]) {
    draw++;
    result1.innerText = result[0];
  } else if (data == result[1]) {
    win++;
    userScore.innerText = win;
    result1.innerText = result[1];
  } else {
    lose++;
    computerScore.innerText = lose;
    result1.innerText = result[2];
  }
  clicked.shift();
};
