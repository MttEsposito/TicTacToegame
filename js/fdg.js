//Initialization of variabilies
var image = new Array ("img/0.png", "img/1.png", "img/2.png");
var d = new Array ("0", "0", "0", "0", "0", "0", "0", "0", "0");
var x = 1;
var f = 0;
var pl1v = 0;
var pl2v = 0;

//Changed the name in the label as the turn of the player
function name (a) {
  if (a == 1) return document.f1.player1.value;
  else return document.f1.player2.value;
}

//function of the insert X or O and call of function check
function playIn (n) {
	var display = document.getElementById("display");
	if ((d[n] == 0) && (f == 0)) {
    document.images[n + 2].src = image[x];
    if (x == 1) {
    	display.setAttribute("class","gg1");
      document.f1.result.value = "Turno di " + name(2);
      d[n] = 1;
      check();
      x = 2;
    } else {
    	display.setAttribute("class","gg2");
      document.f1.result.value = "Turno di " + name(1);
      d[n] = 2;
      check();
      x = 1;
    }
  }
}

//function to play the audio on the click
function play(){
       var audio = document.getElementById("audio");
       audio.play();
}

//function check all grid for the winner player and point assignment
function check() {
  if (((d[0] == x)&&(d[1] == x)&&(d[2] == x)) ||
      ((d[3] == x)&&(d[4] == x)&&(d[5] == x)) ||
      ((d[6] == x)&&(d[7] == x)&&(d[8] == x)) ||
      ((d[0] == x)&&(d[3] == x)&&(d[6] == x)) ||
      ((d[1] == x)&&(d[4] == x)&&(d[7] == x)) ||
      ((d[2] == x)&&(d[5] == x)&&(d[8] == x)) ||
      ((d[0] == x)&&(d[4] == x)&&(d[8] == x)) ||
      ((d[2] == x)&&(d[4] == x)&&(d[6] == x))) {
      f = 1;
  	display.setAttribute("class","win");
     document.f1.result.value = "Vincitore : " + name(x);
     document.getElementById("bnewgame").disabled = false;
     if (x == 1){
      pl1v = pl1v + 1;
      document.f1.scorepl1.value = pl1v;
      }else{
        pl2v=pl2v + 1;
        document.f1.scorepl2.value = pl2v;
      }
      
  }
  if (f == 0) {
    var p = 0;
    document.getElementById("bnewgame").disabled = true;
    for (var i = 0; i < 9; i++) if (d[i] != 0) p++;
  if (p == 9){ 
  	display.setAttribute("class","win");
	document.f1.result.value = "Parità";
	document.getElementById("bnewgame").disabled = false;
}
  }
}

//function to clean the turn player label on start 
function start(){
	document.getElementById("display").value = "";
}

//function to muted and unmuted the audio
function muted(param){
  var audiomuted = document.getElementById("audio");
  audiomuted.muted = param;
  var enbutton = document.getElementById("enableaudio");
  var dibutton = document.getElementById("disableaudio");
  if (!param){
    dibutton.setAttribute("hidden", true);
    enbutton.removeAttribute("hidden");
  }else
  {
      enbutton.setAttribute("hidden", true);
      dibutton.removeAttribute("hidden");
      
  }
}

//function for the reset and play again
function resetboard(){
this.d = ["0", "0", "0", "0", "0", "0", "0", "0", "0"]; 
  for (i = 2 ; i<=10; i++) document.images[i].src = image[0]; 
  document.getElementById("display").value = "";
  document.getElementById("display").removeAttribute("class");
  x = 1;
  f = 0;
}