var tree = function(height) {
  var pinetree = [];
  pinetree[height] = "*";

  for (var j = 0; j < pinetree.length; j++) {
    pinetree[j] = " ";
  }

  for (var i = 0; i < height; i++) {
    pinetree[height - i] = "*";
    pinetree[height + i] = "*";

    var pineOutput = pinetree.join("");
    console.log(pineOutput);
  }
};
tree(6);

var nameInput = document.getElementById("height");
window.addEventListener("keypress", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.charCode == "13") {
    console.log(nameInput);
    }
}