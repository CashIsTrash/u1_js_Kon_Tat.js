/**
 * @param number playerScore - The score that the player has achieved.
 * @param number computerScore - The score that the computer has achieved.
 * @param number drawCardForPlayer - The value of the card that the player draws.
 * @param number drawCardForComputer - The value of the card that the computer draws.
 */

var playerScore = 0;    
var computerScore = 0;  
var drawCardForPlayer = 0; 
var drawCardForComputer = 0;


(window.addEventListener("keydown", checkKeyPress))
welcomeMessage();
drawCard_Player(); 
drawCard_Dealer();
drawCard_Dealer();

/** 
 * @desc 
 * A welcome message prompting the user how to play the game.
 */
function welcomeMessage(){
    console.log('Press "D" to draw card');
    console.log('Press "S" to stop');
    console.log('');
}

/** 
* @desc 
* If key 'D' is pressed then the player can draw a card,
* if the the score is 21 the player wins.
* if the score is over 21 the player loses. 
* If the score is less than 21 the player can draw a card. 
* If the player hits the 'S' key, then the computer draws a card.
* if the computer's score is less than 17 then the computer draws a card.
* if the computer's score is over 21 it loses immediately, 
* if it's 21 it wins.
* @param object key - key to hit.
*/
function checkKeyPress(key){  
if (key.keyCode == "68")
    drawCard_Player();
    if(playerScore == 21) 
         alert('Congratulations you win!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);
   else if (playerScore>=22) 
         alert('Haha you loose!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);
    else if (computerScore == 21)
        alert('Haha you loose!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);

    else  if (computerScore>=22) 
    alert('Congratulations you win!\nComputer score: '+computerScore+'\nPlayer score: '+playerScore);
    
    
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

/**
 * @desc Draws a card for the player between 1 - 11. 
 *  Updates the player's score
 *  Displays the card number that the player got
 *  Logs the player's score on the console.
 *  leaves an empty line 
 */
function drawCard_Player(){
    drawCardForPlayer = Math.floor((Math.random()) *11)+1; 
    playerScore+= drawCardForPlayer;  
    console.log('Player drew '+drawCardForPlayer);
    console.log('Player score = '+playerScore);
    console.log('');
}
/**
 * @desc Draws a card for the computer between 1 - 11. 
 *  Updates the computer's score
 *  Displays the card number that the computer got
 *  Logs the computer's score on the console.
 *  leaves an empty line 
 */
function drawCard_Dealer(){
    drawCardForComputer = Math.floor((Math.random()) *11)+1;
    computerScore+= drawCardForComputer;
    console.log('Computer drew '+drawCardForComputer);
    console.log('Computer score = '+computerScore);
    console.log('');
}