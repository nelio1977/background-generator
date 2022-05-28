var color = document.querySelector(".color");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var color5 = document.querySelector(".color5");

var colorGenerator = document.querySelector(".color-generator");
var linearGenerator = document.querySelector(".linear-generator");
var radialGenerator = document.querySelector(".radial-generator");

var colorBackground = document.querySelector(".color-background");
var linearBackground = document.querySelector(".linear-background");
var radialBackground = document.querySelector(".radial-background");

function setColor() {
  colorGenerator.style.background = color.value;
  colorBackground.textContent = colorGenerator.style.background + ";";
}
color.addEventListener("input", setColor);

function setLinearBackground() {
  linearGenerator.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

  linearBackground.textContent = linearGenerator.style.background + ";";
}

color1.addEventListener("input", setLinearBackground);
color2.addEventListener("input", setLinearBackground);

function setRadialBackground() {
  radialGenerator.style.background =
    `radial-gradient(circle, ${color3.value}, ${color4.value}, ${color5.value })`;
  radialBackground.textContent = radialGenerator.style.background + ";";
}
color3.addEventListener("input", setRadialBackground);
color4.addEventListener("input", setRadialBackground);
color5.addEventListener("input", setRadialBackground);
