var winScore = 0;
var lossesScore = 0;
var guessLeftScore = 9;
var userGuesses = [];
var computerChoose = [];
var resetCC = 1;
var computerGuess = "";

var winsTally = document.getElementById("wins");
var lossesTally = document.getElementById("losses");
var guessLeftText = document.getElementById("guessLeft");
var userText = document.getElementById("userGuess");
var computerText = document.getElementById("computerChoice");

// Creates an array that lists alphabet.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    userText.textContent += userGuess+",";
    if (resetCC) {
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        //computerText.textContent = computerGuess;
        resetCC=0;
    }
    userGuess = userGuess.toLowerCase();
    var chk = computerChoices.indexOf(userGuess);

    if (chk < 0) {
        alert("Please enter letters from a/A-z/Z only.");
    } else if (computerGuess === userGuess) {
        winScore++;
        winsTally.textContent = winScore;
        guessLeftText.textContent = 0;
        resetCC = 1;
        userText.textContent = "";
        computerText.textContent = "";
        guessLeftScore = 9;
    } else {
        guessLeftScore--;
        guessLeftText.textContent = guessLeftScore;
        if (guessLeftScore==0) {
            lossesScore++;
            lossesTally.textContent = lossesScore;
            guessLeftText.textContent = 0;
            resetCC = 1;
            userText.textContent = "";
            computerText.textContent = "";
            guessLeftScore = 9;
        }
    }
    /*

    

    if (winsTally.textContent == 10) {
        alert("You win.");
        window.location.href = 'index.html';
    } else if (guessLeftText.textContent == 0) {
        alert("You lost.");
        window.location.href = 'index.html';
    }
    */
};