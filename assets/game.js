//Game variables//
var wins = 0;
var losses = 0;
var guesses = 9;
var guessedLetters = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var computerChoice = "";

//User keypress converted to lower/uppercase to compare to alphabet array//
document.onkeypress = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//sets the beginning condition from guesses and chooses/logs computer choice based on math of array//
    if (guesses === 9) {
        var computerChose = alphabet[Math.floor(Math.random() * alphabet.length)];
        computerChoice = computerChose;
        console.log("the computer chose " + computerChoice);
    }

//Checks and logs user choice into guessedLetter blank array//
    var userCheck = guessedLetters.indexOf(userGuess);
    if (userCheck < 0) {

//if user wins, resets guesses and array, records win//
        if (userGuess === computerChoice) {
            wins++;
            guesses = 9;
            guessedLetters = [];
//wrong guess, subtracts one guess and adds letter to array of wrong guesses//            
        } else {
            guessedLetters.push(userGuess);
            guesses--;
        }
    }
//when player runs out of guesses (loses) records loss and  resets beginning parameters//
    if (guesses === 0) {
        losses++;
        guesses = 9;
        guessedLetters = [];
    }

//statically records game stas//
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('guessed').innerHTML = "Letters Guessed: " + guessedLetters;


};//end of main function