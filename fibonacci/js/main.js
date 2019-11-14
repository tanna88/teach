var drawOnMe; // context
var x = 100;
var y = 100;

var array = [];

var n = 0;

function run() {
  // khoi tao moi truong ve 2D
  var canvas = document.getElementById('mycanvas');
  drawOnMe = canvas.getContext('2d');

  redraw();
}

function redraw() {
  drawOnMe.fillStyle = 'rgba(0, 0, 200, 1)';
  drawOnMe.fillRect(0, 0, 400, 400);

  drawOnMe.fillStyle = 'rgba(200, 0, 0, 1)';
  drawOnMe.fillRect(x, y, 40, 70);

  drawOnMe.fillStyle = 'rgba(200, 200, 0, 1)';

  // Ve day so
  for ( var i = 0; i < array.length; i++) {
    drawOnMe.fillText(array[i],i * 20 + 10, 10);
  }
}

function increaseFibo() {

  if (n == 0) {
    array.push(0)
  } else if (n == 1) {
    array.push(1)
  } else if (n == 2) {
    array.push(1)
  }

  n = n + 1;
  redraw();
}

function moveLeft() {
  if (x > 20)  {
    x = x - 20;
  }
  redraw();
}

