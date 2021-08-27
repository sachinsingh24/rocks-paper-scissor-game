let game = ['Rocks', 'Paper', 'Scissor'];
let result = [
  'Result = Match Draw',
  'Result = You Win Computer Lose',
  'Result = You Lose Computer Win',
];
console.log(
  `Enter values in numbers 1 for "Rocks", 2 for "Paper", 3 for "Scissor" :`
);
//collect result scores in array
const draw = [],
  win = [],
  lose = [];
// play 10 users
for (let i = 0; i < 10; i++) {
  const data = comp_choice();
  console.log(data);
  if (data == result[0]) {
    draw.push('1');
  } else if (data == result[1]) {
    win.push('1');
  } else {
    lose.push('1');
  }
}
console.log(
  `Count Draw : ${draw.length}\nCount Win : ${win.length}\nCount Lose : ${lose.length}`
);
console.log(`Total User Played : ${draw.length + win.length + lose.length}`);
//this function for computer choose random values and compare with users value
function comp_choice() {
  const user_val = get_user();
  console.log(`You choose : "${user_val}"`);
  //computer select random values and compare with users value
  const computer = (game.computer = Math.floor(Math.random() * 3));
  console.log(`Computer choose : "${game[computer]}"`);
  if (computer == 0) {
    //computer choose "rocks"
    if (game[0] == user_val) {
      return result[0];
    } else if (game[1] == user_val) {
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
    } else {
      return result[1];
    }
  } else {
    //computer choose "Scissor"
    if (game[0] == user_val) {
      return result[1];
    } else if (game[1] == user_val) {
      return result[2];
    } else {
      return result[0];
    }
  }
}
//this function is for return user's value
function get_user() {
  //input user value in number 1 = rocks, 2 = paper, 3 = scissor.
  // const user = parseInt(
  //   prompt(
  //     ` Enter values in numbers 1 for "Rocks", 2 for "Paper", 3 for "Scissor" : `
  //   )
  // );
  const input = require('readline-sync');
  const user = input.question(); // optional variable if prompt error
  if (user == 1) {
    return game[0];
  } else if (user == 2) {
    return game[1];
  } else if (user == 3) {
    return game[2];
  } else {
    // alert(`enter only number 1 or 2 or 3`);
    console.log(`User Take default value 3 : "${game[2]}"`);
    return game[2];
  }
}
