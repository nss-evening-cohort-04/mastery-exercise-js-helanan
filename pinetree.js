function tree(height, character) {
  var growtree = [];
  growtree[height] = character;

  for (var i = 0; i < growtree.length; i++) {
   growtree[i];
  }

  for (var j = 0; j < height; j++) {
    growtree[height - j] = character;

    var treeOutput = growtree.join(" ");
    console.log(treeOutput);
  }
};

var nameInput = document.getElementById("height");
var btn = document.getElementById("btn");
btn.addEventListener("click", validation);

function validation(){
var heightinput = document.getElementById("height").value;
var shapeinput = document.getElementById("shape").value;
if (heightinput === "" && shapeinput === "") {
  alert ("Need A Value");
  } 
  else {
    tree (heightinput, shapeinput)
  }
}


  