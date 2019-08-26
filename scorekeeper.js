var p1Button    =  document.querySelector("#player1");
var p2Button    =  document.querySelector("#player2");
var resetButton =  document.querySelector("#reset");
var rButton     =  document.querySelector("#reset");
var d1          =  document.querySelector("#p1Display");
var d2          =  document.querySelector("#p2Display");
var maxScope    =  document.querySelector("#maxScope");
var scoreId     =  document.querySelector("#scoreId");
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
            d1.classList.add("winner");
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
            d2.classList.add("winner");
            gameover = true;
        }
        d2.textContent = p2Score;
    }
});
maxScope.addEventListener("change", function()
{
    scoreId.textContent = Number(this.value);
    winningScore = Number(this.value);
    reset();
});


resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    gameover = false;
    p1Score = 0;
    p2Score = 0;
    d1.textContent = p1Score;
    d1.classList.remove("winner");
    d2.textContent = p2Score;
    d2.classList.remove("winner");
}