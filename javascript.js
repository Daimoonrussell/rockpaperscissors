// create function called getComputerChoice
function getComputerChoice(){
    randomNumber = Math.random();
    if (randomNumber<0.33){
        return "rock"
    } else if (randomNumber <0.66){
        return "paper"
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice())

// create function called getHumanChoice
function getHumanChoice(){
    const userChoice = prompt("paper,scissors or rock?\nmake a choice.")
        return userChoice
}


console.log(getHumanChoice())