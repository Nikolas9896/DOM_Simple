var isOrange=false;
var button = document.querySelector("button");
var buttonCss = document.getElementsByTagName("button")[1];
//Solution with style tag
button.addEventListener("click", function(){
	if(isOrange){
		
		document.body.style.background = "white";
	}
	else {document.body.style.background = "orange";}
	isOrange = !isOrange;
});
//Solution with specialBackground Class
buttonCss.addEventListener("click", function(){
	document.body.classList.toggle("specialBackground");
});