function tree(height, character) {
  var growtree = [];
  growtree[height] = character;

  for (var i = 0; i < growtree.length; i++) {
   growtree[i] = "" + " ";
  }

  for (var j = 0; j < height; j++) {
    growtree[height - j] = " " + character + "";

    var treeOutput = growtree.join("");
    console.log(treeOutput);
  }
};

var nameInput = document.getElementById("height");
var btn = document.getElementById("btn");
btn.addEventListener("click", validation);

function validation(){
var heightbtn = document.getElementById("height").value;
var shapebtn = document.getElementById("shape").value;
if (heightbtn === "" && shapebtn === "") {
  alert ("Need A Value");
  } 
  else {
    tree (heightbtn, shapebtn)
  }
}



function checkKeyPressed(e) {
    if (e.charCode == "13") {
    console.log(nameInput);
    }

   
}