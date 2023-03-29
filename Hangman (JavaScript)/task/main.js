const input = require('sync-input')

let words = ["python", "java", "swift", "javascript"];

console.log("H A N G M A N");
let wins = 0;
let losses = 0;
let choice = '';
do {
    choice = input('Type "play" to play the game, ' +
        '"results" to show the scoreboard, and "exit" to quit: ');
    switch (choice) {
        case "play":
        let index = Math.floor(Math.random() * words.length);
        let solution = words[index];
        let regExp = /./g;
        let attempts = 8;
        let guesses = [];
        do {
            let guess = solution.replaceAll(regExp, '-');
            console.log("\n" + guess);
            let answer = input('Input a letter: ');
            if (answer.length !== 1) {
                console.log("Please, input a single letter.");
            } else if (!/[a-z]/.test(answer)) {
                console.log("Please, enter a lowercase letter from the English alphabet.");
            } else if (guesses.includes(answer)) {
                console.log("You've already guessed this letter.");
            } else {
                guesses.push(answer);
                if (solution.includes(answer)) {
                    regExp = new RegExp('[^' + guesses.join('') + ']', 'g');
                    let guess = solution.replaceAll(regExp, '-');
                    if (!guess.includes('-')) {
                        console.log(`You guessed the word ${solution}!`);
                        break;
                    }
                } else {
                    console.log("That letter doesn't appear in the word.");
                    --attempts;
                }
            }
        } while (attempts > 0);
        if (attempts > 0) {
            console.log("You survived!");
            ++wins;
        } else {
            console.log("\nYou lost!");
            ++losses;
        }
        break;
        case "results":
            console.log(`You won: ${wins} times.`);
            console.log(`You lost: ${losses} times.`);
        break;
    }
} while (choice !== 'exit');