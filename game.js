let userScore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara =  document.querySelector("#comp-score");
 
const gencompChoice = () =>{
    const options =["stone","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options [randIdx];
};


const drawGame =() =>{
    msg.innerText = "its a drow. paly again!";
    msg.style.backgroundColor = "gray";
};
const showWinner =(userWin , userChoice , compChoice) =>{
    if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win ! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
} else{
    compscore++;
    compScorePara.innerText = compscore;
    msg.innerText = `you lose !${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
}
}


const playGame =(userChoice) => {
const compChoice =gencompChoice();

if (userChoice === compChoice){
 drawGame();
} else{
    let userWin = true;
    if(userChoice === "stone") {
        userWin = compChoice === "paper"? false : true ;
    }else if (userChoice ==="paper") {
        userWin = compChoice === "scissor" ? false : true ;
    }else {
       userWin = compChoice === "stone" ? false : true ;
    }
    showWinner(userWin ,userChoice , compChoice);
}
};

choices.forEach((choice)=> {
choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
   
    
});
});