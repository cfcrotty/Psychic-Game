var winScore = 0;
var lossesScore = 0;
var guessLeftScore = 10;

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
    userText.textContent = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerText.textContent = computerGuess;
    userGuess = userGuess.toLowerCase();
    var chk = computerChoices.indexOf(userGuess);

    if (chk < 0) {
        alert("Please enter letters only(a-z).");
    } else if (computerGuess === userGuess) {
        winScore++;
        winsTally.textContent = winScore;
        guessLeftScore--;
        guessLeftText.textContent = guessLeftScore;
    } else {
        lossesScore++;
        lossesTally.textContent = lossesScore;
        guessLeftScore--;
        guessLeftText.textContent = guessLeftScore;
    }
    if (winsTally.textContent == 10) {
        alert("You win.");
        window.location.href = 'index.html';
    } else if (guessLeftText.textContent == 0) {
        alert("You lost.");
        window.location.href = 'index.html';
    }
};