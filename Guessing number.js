let gameNum = 50;
let userNum = prompt("Guess a Number between 1 and 100");

{
    while (userNum != gameNum) 
    {
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
    alert("Congratulations! You guessed the number.");            
}