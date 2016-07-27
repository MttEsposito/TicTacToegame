var image = new Array ("img/0.png","img/1.png","img/2.png")
var d = new Array ("0","0","0","0","0","0","0","0","0")
var x = 1
var f = 0

function name (a) {
  if (a == 1) return document.f1.player1.value
  else return document.f1.player2.value
}

function playIn (n) {
  
	var display = document.getElementById("display");
	if ((d[n] == 0) && (f == 0)) {
    document.images[n].src = image[x]
    if (x == 1) {
    	display.setAttribute("class","gg1");
      document.f1.campo.value = "Turno di " + name(2)
      d[n] = 1
      controllo()
      x = 2
    } else {
    	display.setAttribute("class","gg2");
      document.f1.campo.value = "Turno di " + name(1)
      d[n] = 2
      controllo()
      x = 1
    }
  }
}

function play(){
       var audio = document.getElementById("audio");
       audio.play();
}
function controllo() {
  
  if (((d[0] == x)&&(d[1] == x)&&(d[2] == x)) ||
      ((d[3] == x)&&(d[4] == x)&&(d[5] == x)) ||
      ((d[6] == x)&&(d[7] == x)&&(d[8] == x)) ||
      ((d[0] == x)&&(d[3] == x)&&(d[6] == x)) ||
      ((d[1] == x)&&(d[4] == x)&&(d[7] == x)) ||
      ((d[2] == x)&&(d[5] == x)&&(d[8] == x)) ||
      ((d[0] == x)&&(d[4] == x)&&(d[8] == x)) ||
      ((d[2] == x)&&(d[4] == x)&&(d[6] == x))) {
      f = 1
  	display.setAttribute("class","win");
     document.f1.campo.value = "Vincitore : " + name(x)
  }
  if (f == 0) {
    var p = 0
    for (var i = 0; i < 9; i++) if (d[i] != 0) p++
  if (p == 9){ 
  	display.setAttribute("class","win");
	document.f1.campo.value = "Parità";
}
  }
}
function start(){
	document.getElementById("display").value = "";
}
