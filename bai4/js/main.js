var x = 0;
var y = 0;
var drawOnMe; // context

var CELL_UNIT = 20;

function run() {
  // khoi tao moi truong ve 2D
  var canvas = document.getElementById('mycanvas');
  drawOnMe = canvas.getContext('2d');

  // Bat su kien phim mui ten
  document.body.onkeydown = function(e){
    if (e.keyCode === 40) {
      moveDown();
    }
    if (e.keyCode === 38) {
      moveUp();
    }
    if (e.keyCode === 39) {
      moveRight();
    }
    if (e.keyCode === 37) {
      moveLeft();
    }
  };
  redraw();
}

function moveRight() {
  x += CELL_UNIT;
  redraw();
}
function moveLeft() {
  x -= CELL_UNIT;
  redraw();
}
function moveDown() {
  y += CELL_UNIT;
  redraw();
}
function moveUp() {
  y -= CELL_UNIT;
  redraw();
}

function redraw() {
  drawOnMe.fillStyle = 'rgba(0, 0, 200, 1)';
  drawOnMe.fillRect(0, 0, 800, 800);
  drawOnMe.fillStyle = 'rgba(200, 0, 0, 1)';
  drawOnMe.fillRect(x, y, 20, 20);

  var debug = document.getElementById('debug');
  debug.innerHTML = "X: " + x + "  Y:" + y;
}

