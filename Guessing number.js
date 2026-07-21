let gameNum = Math.floor(Math.random() * 100) + 1;
let userNum = prompt("Guess a Number between 1 and 100");
let count = 0;

{
    while (userNum != gameNum) 
    {
        count++;
        if( userNum >= 1 && userNum <= 100)
        {
            if (userNum > gameNum) 
            {
                alert("Lower");
            } 
            else 
            {
                alert("Higher");
            }
            userNum = prompt("Guess a Number");
        }
        else
        {
            alert("Please enter a valid number between 1 and 100");
            userNum = prompt("Guess a Number between 1 and 100");
        }
    }
    alert("Congratulations! You guessed the number in " + count + " attempts.");            
}