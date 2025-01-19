//pseudokod
// create function called getComputerChoice
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33){
        return "scissors"
    } else if(randomNumber < 0.66) {
        return "paper"
    } else {
        return "rock"
    }
}


console.log(getComputerChoice())
//