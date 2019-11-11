var drawOnMe; // context
var x = 100;
var y = 100;

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
}

function moveLeft() {
  x = x - 20;
  redraw();
}
