var isOrange=false;
var button = document.querySelector("button");
button.addEventListener("click", function(){
	if(isOrange){
		
		document.body.style.background = "white";
	}
	else {document.body.style.background = "orange";}
	isOrange = !isOrange;
});