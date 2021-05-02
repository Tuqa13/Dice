// var P1 = document.getElementById("player1Name").value;
// document.getElementById("player1").innerHTML = P1;
// var P2 = document.getElementById("player2Name").value;
// document.getElementById("player2").innerHTML = P2;


var randomNum1 = Math.ceil(Math.random() * 6);
var randomNum2 = Math.ceil(Math.random() * 6);

var randomImageSource = "images/dice" + randomNum1 + ".png";
var randomImageSource2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNum1 < randomNum2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
