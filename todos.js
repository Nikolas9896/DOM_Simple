var list = document.querySelectorAll("li");

firstLI.addEventListener("mouseover", function(){
    this.style.color = "green";
});

firstLI.addEventListener("mouseout", function(){
    this.style.color = "black";
});