// // Task 1
// let playerMove = "scissors";
// let computerMove = "paper";

// if (playerMove === "rock" && computerMove === "rock") {
//   console.log("draw");
// }
// else if (playerMove === "rock" && computerMove === "paper") {
//   console.log("paper wins");
// }
// else if (playerMove === "rock" && computerMove === "scissors") {
//   console.log("rock wins");
// }
// else if (playerMove === "paper" && computerMove === "paper") {
//   console.log("draw");
// }
// else if (playerMove === "paper" && computerMove === "rock") {
//   console.log("paper wins");
// }
// else if (playerMove === "paper" && computerMove === "scissors") {
//   console.log("scissors win");
// }
// else if (playerMove === "scissors" && computerMove === "scissors") {
//   console.log("draw");
// }
// else if (playerMove === "scissors" && computerMove === "paper") {
//   console.log("scissors win");
// }
// else if (playerMove === "scissors" && computerMove === "rock") {
//   console.log("rock wins");
// }

// Task 2
// function getWinner(player1, player2) {
//   if (player1 === "rock" && player2 === "rock") {
//     return "0";
//   }
//   else if (player1 === "rock" && player2 === "paper") {
//     return "-1";
//   }
//   else if (player1 === "rock" && player2 === "scissors") {
//     return "1";
//   }
//   else if (player1 === "paper" && player2 === "paper") {
//     return "0";
//   }
//   else if (player1 === "paper" && player2 === "rock") {
//     return "1";
//   }
//   else if (player1 === "paper" && player2 === "scissors") {
//     return "-1";
//   }
//   else if (player1 === "scissors" && player2 === "scissors") {
//     return "0";
//   }
//   else if (player1 === "scissors" && player2 === "paper") {
//     return "1";
//   }
//   else if (player1 === "scissors" && player2 === "rock") {
//     return "-1";
//   }
// }
// let result = getWinner("rock", "rock");

//Task 3
// let player1 = prompt("Rock, paper or scissors?");
// function getWinner(player1, player2) {
//   if (player1 === "rock" && player2 === "rock") {
//     return "0";
//   }
//   else if (player1 === "rock" && player2 === "paper") {
//     return "-1";
//   }
//   else if (player1 === "rock" && player2 === "scissors") {
//     return "1";
//   }
//   else if (player1 === "paper" && player2 === "paper") {
//     return "0";
//   }
//   else if (player1 === "paper" && player2 === "rock") {
//     return "1";
//   }
//   else if (player1 === "paper" && player2 === "scissors") {
//     return "-1";
//   }
//   else if (player1 === "scissors" && player2 === "scissors") {
//     return "0";
//   }
//   else if (player1 === "scissors" && player2 === "paper") {
//     return "1";
//   }
//   else if (player1 === "scissors" && player2 === "rock") {
//     return "-1";
//   }
// }

// let result = getWinner(player1, "scissors");
// alert(result);

//Task 4
// let player1 = prompt("Rock, paper or scissors?");
// let moves = ["rock", "paper", "scissors"];
// function computerMove() {
//   let random = Math.floor(Math.random() * 3);
//   return moves[random];
// }
// let player2 = computerMove();
// function getWinner(player1, player2) {
//   if (player1 === "rock" && player2 === "rock") {
//     return "0";
//   }
//   else if (player1 === "rock" && player2 === "paper") {
//     return "-1";
//   }
//   else if (player1 === "rock" && player2 === "scissors") {
//     return "1";
//   }
//   else if (player1 === "paper" && player2 === "paper") {
//     return "0";
//   }
//   else if (player1 === "paper" && player2 === "rock") {
//     return "1";
//   }
//   else if (player1 === "paper" && player2 === "scissors") {
//     return "-1";
//   }
//   else if (player1 === "scissors" && player2 === "scissors") {
//     return "0";
//   }
//  else if (player1 === "scissors" && player2 === "paper") {
//     return "1";
//   }
//   else if (player1 === "scissors" && player2 === "rock") {
//     return "-1";
//   }
// }
// let result = getWinner(player1, player2);
// console.log(player1);
// console.log(player2);
// alert(result);

//Task 5
let playagain = true;
while (playagain === true) {
  let player1 = prompt("Rock, paper or scissors?");
  let moves = ["rock", "paper", "scissors"];
  function computerMove() {
    let random = Math.floor(Math.random() * 3);
    return moves[random];
  }
  let player2 = computerMove();
  function getWinner(player1, player2) {
    if (player1 === "rock" && player2 === "rock") {
      return "0";
    } else if (player1 === "rock" && player2 === "paper") {
      return "-1";
    } else if (player1 === "rock" && player2 === "scissors") {
      return "1";
    } else if (player1 === "paper" && player2 === "paper") {
      return "0";
    } else if (player1 === "paper" && player2 === "rock") {
      return "1";
    } else if (player1 === "paper" && player2 === "scissors") {
      return "-1";
    } else if (player1 === "scissors" && player2 === "scissors") {
      return "0";
    } else if (player1 === "scissors" && player2 === "paper") {
      return "1";
    } else if (player1 === "scissors" && player2 === "rock") {
      return "-1";
    }
  }
  let result = getWinner(player1, player2);
  console.log(player1);
  console.log(player2);

  alert(result);
  playagain = confirm("Do you want to play again?");
  if (playagain === false) {
    break;
  }
}
