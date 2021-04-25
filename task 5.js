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
