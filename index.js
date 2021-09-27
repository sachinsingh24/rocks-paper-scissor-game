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

//Primary variable
const clicked = [];
let draw = 0,
  win = 0,
  lose = 0;

//perform click function and display results
const button = (click1) => {
  clicked.push(click1);
  const data = comp_choice();
  // display winner
  if (win == 10) {
    document.getElementById('pantagon').style.visibility = 'hidden';
    document.getElementById('selection').style.visibility = 'hidden';
    document.getElementById('end').style.visibility = 'visible';
    document.getElementById('winner').innerText = `Game winner is user`;
  } else if (lose == 10) {
    document.getElementById('selection').style.visibility = 'hidden';
    document.getElementById('pantagon').style.visibility = 'hidden';
    document.getElementById('end').style.visibility = 'visible';
    document.getElementById('winner').innerText = `Game winner is computer`;
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
  
//this function for computer choose random values and compare with users value
function comp_choice() {
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
}
