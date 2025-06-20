function getComputerChoice(){
    var value = Math.random()
    if(value < 0.33){
        return "rock";
    };
    if(value < 0.66){
        return "paper";
    }
    if(value <= 0.99){
        return "scissors";
    }
}
function getHumanChoice(){
    var choice = prompt("enter your option 'rock' ,'paper','scissors'");
    return choice ;
}
var humanScore = 0;
var computerScore =0;
function playRound(){
    var humanChoice = getHumanChoice();
    var computerChoice=getComputerChoice();
    if(humanChoice === computerChoice){
        console.log("match tied");
    } 
    if( humanChoice==="rock" && computerChoice==="scissors" || humanChoice==="scissors" && computerChoice==="paper" || humanChoice==="paper" && computerChoice==="rock"){
        console.log(humanChoice," beats ",computerChoice);
        humanScore++;
    }
    else{
        console.log(computerChoice," beats",humanChoice);
        computerScore++;
    }
}
for(var i =0 ; i < 5;i++){
    playRound();
}
console.log("humanScore :", humanScore );
console.log("computerScore :", computerScore);
if(humanScore > computerScore){
    console.log("you won the match");
}
else{
    console.log("computer won the match");
}



