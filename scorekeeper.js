var p1Button    =  document.querySelector("#player1");
var p2Button    =  document.querySelector("#player2");
var rButton     =  document.querySelector("#reset");
var d1          =  document.querySelector("#p1Display");
var d2          =  document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function(){
    p1Score++;
    d1.textContent = p1Score;
});

p2Button.addEventListener("click", function(){
    p2Score++;
    d2.textContent = p2Score;
});