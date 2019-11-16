var playerScore = 0;
var computerScore = 0;
var drawCardForPlayer = 0;
var drawCardForComputer = 0;


if(window.addEventListener("keydown", checkKeyPress))


welcomeMessage();
drawCard_Player();
drawCard_Dealer();
drawCard_Dealer();
 
// FUNKTIONER OMRÅDE +  FUNKTIONER OMRÅDE  FUNKTIONER OMRÅDE  FUNKTIONER OMRÅDE // FUNKTIONER OMRÅDE +  FUNKTIONER OMRÅDE  FUNKTIONER OMRÅDE  FUNKTIONER OMRÅDE
function welcomeMessage(){
    console.log('Press "D" to draw card');
    console.log('Press "S" to stop');
    console.log('');
}
       
function checkKeyPress(key){
if (key.keyCode == "68")
    drawCard_Player();
    if(playerScore == 21)
         alert('Congratulations you win!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);
    if (playerScore>=22)     
         alert('Haha you loose!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);

    if (key.keyCode == "83"){
    console.log('Player stopped!');
    console.log('');
    

    if (computerScore <17)
        drawCard_Dealer();
        
    if (playerScore == computerScore)    
        alert('It is a Draw!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);

     if (computerScore < playerScore && playerScore <22)
        alert('Congratulations you win!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);
     else if ((computerScore < playerScore && playerScore >=22))
        alert('Haha you loose!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);

     if (computerScore > playerScore && computerScore <22)
        alert('Haha you loose!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);
    else  if (computerScore > playerScore && computerScore >21)
         alert('Congratulations you win!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);
    }

}

function drawCard_Player(){
    drawCardForPlayer = Math.floor((Math.random()) *11)+1;
    playerScore+= drawCardForPlayer;
    console.log('Player drew '+drawCardForPlayer);
    console.log('Player score = '+playerScore);
    console.log('');
}

function drawCard_Dealer(){
    drawCardForComputer = Math.floor((Math.random()) *11)+1;
    computerScore+= drawCardForComputer;
    console.log('Computer drew '+drawCardForComputer);
    console.log('Computer score = '+computerScore);
    console.log('');
}