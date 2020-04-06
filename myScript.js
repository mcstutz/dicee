//  declare dice as variables

var d1 = 0;
var d2 = 0;

function rollTheDice() {

  // randomly generate the dice rolls

  d1 = Math.floor(Math.random() * 6 + 1);
  d2 = Math.floor(Math.random() * 6 + 1);

  // change the dice image

  document.getElementById("img1").src = "images/dice" + d1 + ".png";
  document.getElementById("img2").src = "images/dice" + d2 + ".png";

  // Display winner or draw and show flag to winner

  if (d1 > d2) {

    document.getElementById("clickMe").innerHTML = `<i id="flag1" class="fas fa-flag flag"></i> Player 1 Wins! <i id="flag2" class="fas fa-flag flag"></i>`;
    document.getElementById("flag1").style.visibility = "visible";
    document.getElementById("flag2").style.visibility = "hidden";
    return;
  } else if (d2 > d1) {

    document.getElementById("clickMe").innerHTML = `<i id="flag1" class="fas fa-flag flag"></i> Player 2 Wins! <i id="flag2" class="fas fa-flag flag"></i>`;
    document.getElementById("flag2").style.visibility = "visible";
    document.getElementById("flag1").style.visibility = "hidden";
    return;
  } else

    document.getElementById("clickMe").innerHTML = `<i id="flag1" class="fas fa-flag flag"></i> Draw! <i id="flag2" class="fas fa-flag flag"></i>`;
  document.getElementById("flag1").style.visibility = "hidden";
  document.getElementById("flag2").style.visibility = "hidden";
  return;
}
