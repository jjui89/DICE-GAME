
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";




var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImg);

image2.setAttribute("src", randomDiceImg2);


var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🎈 PLAYER 1 WINS!";
} else if (randomNumber2 > randomNumber1) {
  heading.innerHTML = "PLAYER 2  WINS! 🎈";
} else {
  heading.innerHTML = "DRAW!";
}
