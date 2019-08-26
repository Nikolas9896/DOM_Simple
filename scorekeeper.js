var p1Button    =  document.querySelector("#player1");
var p2Button    =  document.querySelector("#player2");
var resetButton =  document.querySelector("#reset");
var rButton     =  document.querySelector("#reset");
var d1          =  document.querySelector("#p1Display");
var d2          =  document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameover = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameover)
    {
        p1Score++;
        if(p1Score === winningScore)
        {
            gameover = true;
        }
        d1.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameover)
    {
        p2Score++;
        if(p2Score ===winningScore)
        {
            gameover = true;
        }
        d2.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    gameover = false;
    p1Score = 0;
    p2Score = 0;
    d1.textContent = p1Score;
    d2.textContent = p2Score;
});