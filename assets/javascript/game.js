


var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 11;
var guessesLeft = 11;
var guessedLetters = [];
var letterToGuess = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var updateGuessesLeft = function() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
    
};

var updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
    
};

var updateGuessesSoFar = function() {
    document.querySelector('#soFar').innerHTML = "our Guesses so far: " + guessedLetters.join(', ');

};

var reset = function () {
    totalGuesses = 11;
    guessesLeft= 11;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    guessedLetters();
}

updateLetterToGuess();
updateGuessesLeft();


document.onkeyup = function (event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();

    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

        if (guessesLeft > 0) {
            wins++;
            document.querySelector ('wins').innerHTML = "wins: " + wins;
            alert("yes, you are psychic!");
            reset();

        }else if (guessesLeft == 0) {
            losses ++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            // alert("Sorry, you're not psychic, maybe try again?");
            alert("Not quite buddy, try a little harder?");
            reset();
        }

    };
    

