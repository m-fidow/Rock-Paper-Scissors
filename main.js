let gamesPlayed = 0;
let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfDraws = 0;
let rockIcon = document.querySelector("#rock");
let paperIcon = document.querySelector("#paper");
let scissorsIcon = document.querySelector("#scissors");
let moves = ["rock", "paper", "scissors"];

//Score handling
let incrementGamesPlayed = function () {
  gamesPlayed++;
  document.querySelector(".games span").innerHTML = gamesPlayed;
};
let incrementWins = function () {
  numberOfWins++; //First increase the numberOfWins, then display it.
  document.querySelector(".wins span").innerHTML = numberOfWins;
  incrementGamesPlayed();
};
let incrementLosses = function () {
  numberOfLosses++;
  document.querySelector(".losses span").innerHTML = numberOfLosses;
  incrementGamesPlayed();
};
let incrementDraws = function () {
  numberOfDraws++;
  document.querySelector(".draws span").innerHTML = numberOfDraws;
  incrementGamesPlayed();
};

// Computer and Player moves
function computerMove() {
  let random = Math.floor(Math.random() * 3);
  return moves[random];
}

function rockMove() {
  computerChoice = computerMove();
  if (computerChoice === "rock") {
    incrementDraws();
  } else if (computerChoice === "paper") {
    incrementLosses();
  } else if (computerChoice === "scissors") {
    incrementWins();
  }
}
rockIcon.addEventListener("click", rockMove);

function paperMove() {
  computerChoice = computerMove();
  if (computerChoice === "rock") {
    incrementWins();
  } else if (computerChoice === "paper") {
    incrementDraws();
  } else if (computerChoice === "scissors") {
    incrementLosses();
  }
}
paperIcon.addEventListener("click", paperMove);

function scissorsMove() {
  computerChoice = computerMove();
  if (computerChoice === "rock") {
    incrementLosses();
  } else if (computerChoice === "paper") {
    incrementWins();
    console.log(numberOfWins);
  } else if (computerChoice === "scissors") {
    incrementDraws();
  }
}
scissorsIcon.addEventListener("click", scissorsMove);
//Username input handling
let playerNameInput = document.querySelector("input");
let playerName = document.querySelector(".player-name");
let submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", function () {
  playerName.textContent = playerNameInput.value;
});
//Reset button
let resetButton = document.querySelector(".reset-button");
function resetFunction() {
  gamesPlayed = 0;
  numberOfWins = 0;
  numberOfLosses = 0;
  numberOfDraws = 0;
  document.querySelector(".games span").innerHTML = gamesPlayed;
  document.querySelector(".wins span").innerHTML = numberOfWins;
  document.querySelector(".losses span").innerHTML = numberOfLosses;
  document.querySelector(".draws span").innerHTML = numberOfDraws;
}
resetButton.addEventListener("click", resetFunction);
