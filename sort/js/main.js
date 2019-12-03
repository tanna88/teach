var drawOnMe; // context
var x = 100;
var y = 100;

var array = [];

var currentSNT;

function run() {
  // khoi tao moi truong ve 2D
  var canvas = document.getElementById('mycanvas');
  drawOnMe = canvas.getContext('2d');
  drawOnMe.font = "15px Georgia";

  randomArray();
  redraw();
}

function randomArray() {
  for(var i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100))
  }
}

function redraw() {
  drawOnMe.fillStyle = 'rgba(0, 0, 0, 1)';
  drawOnMe.fillRect(0, 0, 1000, 100);
  drawOnMe.fillStyle = 'rgba(255, 255, 255, 1)';
  drawOnMe.fillRect(10, 10, 980, 80);

  drawOnMe.fillStyle = 'rgba(0, 0, 0, 1)';

  // Ve day so
  for ( var i = 0; i < array.length; i++) {
    drawOnMe.fillText(array[i],i * 30 + 20, 50);
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  run();
})

// You code below here

function sort() {

}
