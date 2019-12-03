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
  drawOnMe.fillRect(0, 100, 1000, 100);
  drawOnMe.fillStyle = 'rgba(255, 255, 255, 1)';
  drawOnMe.fillRect(10, 110, 980, 80);

  drawOnMe.fillStyle = 'rgba(0, 0, 0, 1)';

  // Ve day so
  for ( var i = 0; i < array.length; i++) {
    drawItem(i);
  }
}

function drawItem(index, color) {
  drawOnMe.fillStyle = color || 'rgba(0, 0, 0, 1)';
  drawOnMe.fillText(array[index], index * 30 + 20, 150);
}

document.addEventListener('DOMContentLoaded', (event) => {
  run();
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function drawAwait() {
  drawOnMe.fillText("Cho xi, Dung bam nua. Neu thay sai roi thi refresh", 20, 20);
}

function drawDone() {
  drawOnMe.fillText("Xong roi", 20, 70);
}

// You code below here

async function sort() {
  drawAwait();
  redraw();
  drawItem(0, 'rgba(255, 0, 0, 1)');
  await sleep(1000);
  redraw();
  drawItem(1, 'rgba(255, 0, 0, 1)');
  await sleep(1000);
  redraw();
  drawItem(2, 'rgba(255, 0, 0, 1)');
  await sleep(1000);
  redraw();
  drawItem(3, 'rgba(255, 0, 0, 1)');
  await sleep(1000);
  drawDone();
}
