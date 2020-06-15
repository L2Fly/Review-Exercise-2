var name = prompt ("Please enter your name:");
var favanimal = prompt ("Please enter your favorite animal:");
var favnumber = prompt ("Please enter your favorite number:");
var favletter = prompt ("Please enter your favorite letter:")
///////////////////////////////////////////////////////////////////////////


if (favanimal =="dog"){
 document.querySelector("#animal").innerHTML = "WoOf WoOf";
}
if (favanimal =="cat"){
  document.querySelector("#animal").innerHTML = "MeOw";
}

/////////////////////////////////////////////////////////////

function writeNumber(){
  document.querySelector("#numbery").innerHTML = favnumber;  
}

function addMe(){
  favnumber = (+favnumber) +6;
  writeNumber();
}
document.querySelector("#button").addEventListener("click", addMe);
///////////////////////////////////////////////////////////////

document.querySelector(".namey").innerHTML = name;
document.querySelector(".lettery").innerHTML = favletter;