let gameNum = Math.floor(Math.random() * 100) + 1;

let inputNum = document.querySelector("#input-num");
let enterBtn = document.querySelector("#enter-btn");
let message = document.querySelector("#message");
let attemptsText = document.querySelector("#attempts");
let newGameBtn = document.querySelector("#new-game-btn");

let count = 0;


// Guess Button
enterBtn.addEventListener("click", () => {

    let userNum = Number(inputNum.value);

    // Validate input
    if (userNum < 1 || userNum > 100 || inputNum.value === "") {
        message.innerText = "Please enter a valid number between 1 and 100";
        return;
    }

    count++;

    attemptsText.innerText = count;

    // Check user's guess
    if (userNum === gameNum) {

        message.innerText =
            "Congratulations! You guessed the number in " + count + " attempts.";

        enterBtn.disabled = true;

    } 
    else if (userNum > gameNum) {

        message.innerText = "Lower! Try again.";

    } 
    else {

        message.innerText = "Higher! Try again.";

    }

    inputNum.value = "";
});

// Press Enter to Guess
inputNum.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        enterBtn.click();
    }
});


// New Game Button
newGameBtn.addEventListener("click", () => {

    gameNum = Math.floor(Math.random() * 100) + 1;

    count = 0;

    attemptsText.innerText = "0";

    message.innerText = "Guess a number between 1 and 100";

    inputNum.value = "";

    enterBtn.disabled = false;
});