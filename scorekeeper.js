var p1Button    =  document.querySelector("#player1");
var p2Button    =  document.querySelector("#player2");
var rButton     =  document.querySelector("#reset");
var h2          =  document.querySelector("h2");
var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function(){
    p1Score++;
    h2.textContent = p1Score;
});