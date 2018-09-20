$(document).ready(function() {

var targetNumber = Math.floor(Math.random() * ((120 + 1) - 19)) + 19;
var counter = 0;
var winCounter = 0;
var lossCounter = 0;


var stone1 = Math.floor(Math.random() * 12) + 1;
var stone2 = Math.floor(Math.random() * 12) + 1;
var stone3 = Math.floor(Math.random() * 12) + 1;
var stone4 = Math.floor(Math.random() * 12) + 1;
var stone5 = Math.floor(Math.random() * 12) + 1;
var stone6 = Math.floor(Math.random() * 12) + 1;
var numberOptions = [stone1, stone2, stone3, stone4, stone5, stone6];
// var stone1Total = 0;
// var stone2Total = 0;
// var stone3Total = 0;
// var stone4Total = 0;
// var stone5Total = 0;
// var stone6Total = 0;


$("#number-to-guess").text(targetNumber);

function resetGame() {
  targetNumber = Math.floor(Math.random() * ((120 + 1) - 19)) + 19;
  counter = 0;
  $("#number-to-guess").text(targetNumber);
  $(".score2").html("Your total score is: " + counter);
}

// function stones(button) {
// $(button).on("click", function () {
//   var clickedPic = $(button).attr("alt");

// if(clickedPic === "stone1") {
//   counter += 1;
//   stone1Total = stone1 * counter;
//   var counter = stone1Total + stone2Total + stone3Total + stone4Total + stone5Total + stone6Total;
// }
// if(clickedPic === "stone2") {
//   counter += 1;
//   stone2Total = stone2 * counter;
//   var counter = stone1Total + stone2Total + stone3Total + stone4Total + stone5Total + stone6Total;
// }
// if(clickedPic === "stone3") {
//   counter += 1;
//   stone3Total = stone3 * counter;
//   var counter = stone1Total + stone2Total + stone3Total + stone4Total + stone5Total + stone6Total;
// }
// if(clickedPic === "stone4") {
//   counter += 1;
//   stone4Total = stone4 * counter;
//   var counter = stone1Total + stone2Total + stone3Total + stone4Total + stone5Total + stone6Total;
// }
// if(clickedPic === "stone5") {
//   counter += 1;
//   stone5Total = stone5 * counter;
//   var counter = stone1Total + stone2Total + stone3Total + stone4Total + stone5Total + stone6Total;
// }
// if(clickedPic === "stone6") {
//   counter += 1;
//   stone6Total = stone6 * counter;
//   var counter = stone1Total + stone2Total + stone3Total + stone4Total + stone5Total + stone6Total;
// }
// $(".score2").html("Your total score is: " + counter);

// })

// }

for(var i = 0; i < numberOptions.length;i++) {
  var imageStone = $("<img>");
  imageStone.addClass("stones-image");
  imageStone.attr("src", "assets/images/multiple stones.png");
  imageStone.attr("data-stonevalue", numberOptions[i]);
  $("#stones").append(imageStone);
}

$(".stones-image").on("click", function() {
  var stoneValue = ($(this).attr("data-stonevalue"));
  stoneValue = parseInt(stoneValue);
  counter += stoneValue;
$(".score2").html("Your total score is: " + counter);
 

  if (counter === targetNumber) {
      winCounter++;
    alert("You are one step closer to saving the Universe!");
    $("#wins").text(winCounter);
    resetGame();
  }
  else if (counter >= targetNumber) {
      lossCounter++;
    alert("OH NO, Thanos is one step closer to completing his Infinity Guantlet!");
    $("#losses").text(lossCounter)
    resetGame();
  }

// stones($(".stone1"));
// stones($(".stone2"));
// stones($(".stone3"));
// stones($(".stone4"));
// stones($(".stone5"));
// stones($(".stone6"));
// resetGame();
// });

})
});