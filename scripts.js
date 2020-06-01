//// NUMBER GUESSING GAME:
//// Credit/Inspiration: Number Guessing Game:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash 
// Original Content is marked.

// Generate a Random Number from 1 to 100: 
let randomNum = Math.floor(Math.random() * (100 - 1) + 1);

//Log the winning number: Testing Only
//console.log(randomNum);

//CONSTANT Variables: UI:
const guesses = document.querySelector('.guesses');           //<p> : displays user guesses
const prevResult = document.querySelector('.prev-result');    //<p> : displays right or wrong
const lowerHigher = document.querySelector('.lower-higher');  //<p> : displays lower or higher
const guessSubmit = document.querySelector('.guess-submit');
const guessField = document.querySelector('.guess-field');
const resetButton = document.querySelector('.start-new-game')

//original: used for number 'validation', game logic checks if user input included in numsArray:
const numsArray = []; 
for(let i=1; i<=100; i++) {numsArray.push(i);}

// Track guesses:
let guessesCount = 1;
//original: array that holds guesses for checking if user guessed number already:
let guessedArray = []; 

//Each user submission click runs this function:
function checkGuess() {
    // Variable that holds each submitted guess:
    let inputValue = Number(guessField.value);
    //original: variable that holds winAlert toggle "try" or "tries":
    let winAlert;
    // Once the first guess has been made, displays guesses to screen:
    if (guessesCount === 1) {
        winAlert = 'try';
        guesses.textContent = `Previous guesses: `;
    } else {
        winAlert = 'tries';
    }

    //GUESS CHECKING LOGIC: 
    if (numsArray.includes(inputValue)) {   
    //original: checks if user input is in the numsArray: 1 to 100:    
        if (inputValue === randomNum) {
        //checks if the user input is the winning number:
            prevResult.textContent = `Congratulations, you picked the correct number! It took you ${guessesCount} ${winAlert}!`;
            prevResult.style.backgroundColor = 'green';
            lowerHigher.textContent = '';
            resetButton.hidden = false;
            guessSubmit.disabled = true;
             
        } else if (guessesCount === 10) {
          //checks if the user has used all 10 guesses:
            prevResult.textContent = `Game Over! The winning number was ${randomNum}.`;
            resetButton.hidden = false;
            guessSubmit.disabled = true;
          
        } else if (inputValue !== randomNum && guessedArray.includes(inputValue)) { 
          //original: checks if user input is any other number than winning number and hasn't been guessed yet:
            prevResult.textContent = `You already chose that number`;
            prevResult.style.backgroundColor = 'yellow';
            guessesCount -= 1;   
          
        } else {
          //checks if user input is wrong:
            prevResult.textContent = 'Wrong';
            prevResult.style.backgroundColor = 'red';
            guesses.textContent += inputValue + ', ';
            guessedArray.push(inputValue);
            
            if (inputValue < randomNum) { //displays hint:
                lowerHigher.textContent = `Your last guess was too low!`;
            } else if (inputValue > randomNum) {
                lowerHigher.textContent = `Your last guess was too high!`;
            }
        } 
      
    } else { 
      //original:checks if user input is not in numsArray:
        prevResult.textContent = `Invalid Entry: Please choose a number from 1 to 100.`;
        prevResult.style.backgroundColor = 'yellow';
        guessesCount -= 1; 

    }
    
    guessesCount++;
    guessField.value = '';
    guessField.focus();
}

//original:
function resetGame(){
    resetButton.hidden = true;
    guessSubmit.disabled = false;
    guessedArray = [];
    randomNum = Math.floor(Math.random() * (100 - 1) + 1);
    prevResult.textContent = '';
    lowerHigher.textContent = '';
    guesses.textContent = '';
    guessesCount = 1;
}

guessSubmit.addEventListener('click', checkGuess, false);
resetButton.addEventListener('click', resetGame, false); //Original




