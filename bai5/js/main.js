function run() {
  var canvas = document.getElementById('mycanvas');
  var ctx = canvas.getContext('2d');
  // background
  ctx.fillStyle = 'rgba(255, 255, 255)';
  ctx.fillRect(0, 0, 800, 800);
  ctx.fillStyle = 'rgba(0, 0, 200, 0.1)';
  ctx.fillRect(0, 0, 800, 800);
  drawT(ctx, 100, 30);
  drawL(ctx, 120, 80);
  drawBackground(ctx);
}

function drawT(ctx, x, y) {
  ctx.fillStyle = 'rgb(200, 0, 0)';
  var tBick = [
    [1,1,1],
    [0,1,0],
    [0,1,0],
  ]
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var value = tBick[i][j];
      var pointX = x + j * 10;
      var pointY = y + i * 10;
      ctx.fillText(value, pointX, pointY);
    }
  }
}

function drawL(ctx, x, y) {
  ctx.fillStyle = 'rgb(200, 0, 0)';
  var tBick = [
    [1,0,0],
    [1,0,0],
    [1,1,0],
  ]
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var value = tBick[i][j];
      var pointX = x + j * 10;
      var pointY = y + i * 10;
      if (value === 1) {
        ctx.fillText(value, pointX, pointY);
      }
    }
  }
}

function drawBackground(ctx) {
  ctx.fillStyle = 'rgb(200, 200, 0)';
  var background = [
    [-1,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,2,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,2,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,2,2,0,0,0,0,0,0,0,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  ]
  for (var i = 0; i < background.length; i++) {
    for (var j = 0; j < background[i].length; j++) {
      var value = background[i][j];
      var pointX = j * 10;
      var pointY = i * 10;
      ctx.fillText(value, pointX, pointY);
    }
  }
}
