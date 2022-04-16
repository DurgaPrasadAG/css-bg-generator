var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color = document.getElementById("color");
var bg = document.getElementById("background");


function setGradient() {
  bg.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";  
  color.textContent = bg.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);