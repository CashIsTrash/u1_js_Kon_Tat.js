var playerScore = 0;    // Lägg till score varje gång spelare drar kort
var computerScore = 0;  // Lägg till score till computer varje gång computer drar kort
var drawCardForPlayer = 0; // Variabel där ska ta resultat från random funktion som generates en siffra från 1 till 11
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
       
function checkKeyPress(key){  // om key är pressat och är D draw kort för spelare
if (key.keyCode == "68")
    drawCard_Player();
    if(playerScore == 21) // om spelare drar 21. vinn genast
         alert('Congratulations you win!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);
   else if (playerScore>=22) // om spelaren drar mer än 21 förlåra genast    
         alert('Haha you loose!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);
    else if (computerScore == 21)
        alert('Haha you loose!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);

    else  if (computerScore>=22) // om spelaren drar mer än 21 förlåra genast    
    alert('Congratulations you win!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);
    
    
    if (key.keyCode == "83"){ // trycker man på S tanget så spelaren drar inte längre kot
    console.log('Player stopped!');
    console.log('');
    
    if (computerScore <17) // nu testa computerScore har det mindre än 17 drar kort för computer
        drawCard_Dealer();
        
    if (playerScore == computerScore)    //kolla vem som vinner
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
    drawCardForPlayer = Math.floor((Math.random()) *11)+1; //Generera ett nummer mellan 1 - 11 lägg den till variabeln
    playerScore+= drawCardForPlayer;  // uppdatera spelares score
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