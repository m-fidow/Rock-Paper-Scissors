//Task 6: Scores
// Keep track of how many games have been played,
// as well as the number of wins, losses, and draws.

// This will be deemed as complete
// when this information is displayed after each round.

/* Plan
What I need
1. Games played
    - add to it at each turn
2. Number of wins
    - if player 1 wins and 1 is returned
3. Number of losses
    - if player2 wins and -1 is returned
4. Number of draws
      - if 0 is retuned.

[x] DEFINE GAMES_PLAYED VARIABLE
    [x]- INCREASE COUNT WHILE LOOP IS RUNNING
    [x]- ALERT BEFORE CONFIRM
DEFINE NUMBER_OF_WINS VARIABLE
- INCREASE COUNT IF RESULT =  1
- ALERT BEFORE CONFIRM
DEFINE NUMBER_OF_LOSSES VARIABLE
- INCREASE COUNT IF RESULT =  -1
- ALERT BEFORE CONFIRM
DEFINE NUMBER_OF_DRAWS VARIABLE
- INCREASE COUNT IF RESULT =  0
- ALERT BEFORE CONFIRM

*/
let gamesPlayed = 1;
let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfDraws = 0;
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
  if (result === "1") {
    numberOfWins++;
    console.log(numberOfWins);
  } else if (result === "-1") {
    numberOfLosses++;
    console.log(numberOfLosses);
  } else if (result === "0") {
    numberOfDraws++;
    console.log(numberOfDraws);
  }
  alert(result);
  gamesPlayed++;
  playagain = confirm("Do you want to play again?");

  if (playagain === false) {
    alert(
      `you have played ${gamesPlayed++} games. Wins: ${numberOfWins} times. Losses: ${numberOfLosses}. Draws: ${numberOfDraws}`
    );
  }
}
