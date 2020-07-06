var canvas = document.getElementById("can").getContext("2d");

var fondo = new Image()
fondo.src="title.png"
fondo.addEventListener("load", fondan);

function fondan()
{
    canvas.drawImage(fondo, 0, 0);
}