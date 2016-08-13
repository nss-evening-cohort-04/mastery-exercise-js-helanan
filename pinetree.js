
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
tree(1);
