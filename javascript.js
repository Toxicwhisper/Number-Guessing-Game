var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guesses_num = [];

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please Enter a number Between 1 to 100");
    } else {
        guesses_num.push(user_guess);
        no_of_guesses += 1;
        if (user_guess < answer) {
            msg1.textContent = "Too low"
            msg2.textContent = "No. Of Guesses : " + no_of_guesses;
            msg3.textContent = "Guessed Number Are: " + guesses_num;
        } else if (user_guess > answer) {
            msg1.textContent = "Too high"
            msg2.textContent = "No. Of Guesses : " + no_of_guesses;
            msg3.textContent = "Guessed Number Are: " + guesses_num;
        } else if (user_guess == answer) {
            msg1.textContent = "Bra jobbat!"
            msg2.textContent = "Det rätta svaret var: " + answer;
        }
    }
}

