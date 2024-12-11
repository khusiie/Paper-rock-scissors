let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genComputerChoice = () => {
  const options = ["rock", "scissors", "paper"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const showWinning = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    console.log("You win!");
    msg.innerText = `You win!  ${userChoice} beats  (${compChoice}).`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    console.log("You lose!");
    msg.innerText = `You lose!  ${compChoice}  beats  (${userChoice}).`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  console.log("Game is a Draw");
  msg.innerText = "Game is a Draw!";
  msg.style.backgroundColor = "black";
};

const playgame = (userChoice) => {
  console.log("User Choice = ", userChoice);
  const compChoice = genComputerChoice();
  console.log("Computer Choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = false;

    if (userChoice === "rock") {
      userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock";
    } else if (userChoice === "scissors") {
      userWin = compChoice === "paper";
    }

    showWinning(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
