var ctx; // context
var showDebug = true;
var currentBrick = new BaseBrick([
  [1,1,1],
  [0,1,0],
  [0,1,0],
]);
var background = new Background();

function run() {
  var canvas = document.getElementById('mycanvas');
  ctx = canvas.getContext('2d');
  document.body.onkeydown = function(e){
    if (e.keyCode === 40) {
      currentBrick.moveDown();
      redraw();
    }
    if (e.keyCode === 38) {
      currentBrick.moveUp();
      redraw();
    }
    if (e.keyCode === 39) {
      currentBrick.moveRight();
      redraw();
    }
    if (e.keyCode === 37) {
      currentBrick.moveLeft();
      redraw();
    }
  };
  redraw();
}

function redraw() {
  ctx.fillStyle = 'rgba(200, 200, 200, 1)';
  ctx.fillRect(0, 0, 800, 800);

  background.draw(ctx, 0, 0);
  currentBrick.draw(ctx)
  var debug = document.getElementById('debug');
  debug.innerHTML = "X: " + currentBrick.x +
    "<br/>  Y: " + currentBrick.y +
    "<br/>  SCORE: " + background.score;
}

function toggleDebug() {
  showDebug = !showDebug;
  redraw();
}

document.addEventListener('DOMContentLoaded', (event) => {
  run();
})
