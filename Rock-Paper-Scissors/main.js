const getUserChoice = userInput => {
  userInput.toLowerCase();
  if( userInput==="rock" || userInput ==="paper" || userInput === "scissors" || userInput === "bomb"){
    return userInput;
  } else {
    console.log("Error! Your input is not valid, please choose between: paper, scissors or rock");
  }
}

const getComputerChoice = () =>{
  let num = Math.floor(Math.random() * 3);
  switch(num) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === computerChoice ) {
  return "The game is a tie!";
  }
  if(userChoice === "bomb") {
    return "You won!";
  }
  if(userChoice === "rock") {
    if(computerChoice ==="paper") {
      return "The Computer won!";
    } else {
      return "You won!";
    }
  }
  if(userChoice === "paper") {
    if(computerChoice === "rock"){
      return "You won!";
      } else {
        return "The Computer won!";
      }
  }
  if(userChoice === "scissors") {
    if(computerChoice === "rock") {
      return "The Computer won!";
    } else {
      return "You won!";
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log(`Your choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
