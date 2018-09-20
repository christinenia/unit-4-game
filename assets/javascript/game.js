$(document).ready(function() {

var targetNumber = Math.floor(Math.random() * ((120 + 1) - 19)) + 19;
var counter = 0;
var winCounter = 0;
var lossCounter = 0;


var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;
var numberOptions = [crystal1, crystal2, crystal3, crystal4];


$("#number-to-guess").text(targetNumber);

function resetGame() {
  targetNumber = Math.floor(Math.random() * ((120 + 1) - 19)) + 19;
  counter = 0;
  $("#number-to-guess").text(targetNumber);
  $(".score2").html("Your total score is: " + counter);
}

for(var i = 0; i < numberOptions.length; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "assets/images/crystal.jpg");
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
$(".score2").html("Your total score is: " + counter);
 

  if (counter == targetNumber) {
      winCounter++;
    alert("You win!");
    $("#wins").text(winCounter);
    resetGame();
  }
  else if (counter >= targetNumber) {
      lossCounter++;
    alert("You lose!");
    $("#losses").text(lossCounter)
    resetGame();
  }


});

})