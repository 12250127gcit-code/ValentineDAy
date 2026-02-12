function startGame() {
  let Choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  let choices = ["rock", "paper", "scissors"];
  let cChoice = choices[Math.floor(Math.random() * 3)];

  alert("Computer chose: " + cChoice);

  if (Choice === cChoice) {
    alert("It's a tie!");
  } else if (
    (Choice === "rock" && cChoice === "scissors") ||
    (Choice === "paper" && cChoice === "rock") ||
    (Choice === "scissors" && cChoice === "paper")
  ) {
    alert("You win!");
  } else {
    alert("You lose!");
  }
}