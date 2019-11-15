var drawOnMe; // context
var x = 100;
var y = 100;

var array = [];

var currentSNT;

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

function increase() {
  if (!currentSNT) {
    currentSNT = 2;
    array.push(currentSNT)
  } else {
    currentSNT = findSNT(currentSNT);
    array.push(currentSNT)
  }
  redraw();
}

function isSNT(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num - 1; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function findSNT(fromNum) {
  var i = 1;
  while(true) {
    if (isSNT(fromNum + i)) {
      return fromNum + i;
    }
    i++;
  }
}

function moveLeft() {
  if (x > 20)  {
    x = x - 20;
  }
  redraw();
}

document.addEventListener('DOMContentLoaded', (event) => {
  run();
})
