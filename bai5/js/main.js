var HANG_DOI = 20;

function run() {
  var canvas = document.getElementById('mycanvas');
  var ctx = canvas.getContext('2d');
  // background
  ctx.fillStyle = 'rgba(255, 255, 255)';
  ctx.fillRect(0, 0, 800, 800);
  ctx.fillStyle = 'rgba(0, 0, 200, 1)';
  ctx.fillRect(0, 0, 800, 800);
  drawT(ctx, 100, 50);
  // drawL(ctx, 120, 80);
  // viduVongLapFor();
  // drawBackground(ctx);
}

function viduVongLapFor() {
  var array1 = [1,2,4]
  var array2 = [3,5,7]
  var array3 = [6,8,9]
  var array = [
    array1,
    array2,
    array3
  ]

  for (var dong = 0; dong <= 2; dong++) {
    console.log(array[dong]);
    for( var cot = 0; cot <= 2; cot ++) {
      console.log(array[dong][cot]);
    }
  }
}

function drawT(ctx, x, y) {
  ctx.fillStyle = 'rgb(200, 0, 0)';
  var tBick = [
    [1,1,1],
    [0,1,0],
    [0,1,0],
  ]
  for (var dong = 0; dong <= 2; dong++) {
    for( var cot = 0; cot <= 2; cot ++) {
      var value = tBick[dong][cot];

      var pointX = x + cot * HANG_DOI;
      var pointY = y + dong * HANG_DOI;
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
      var pointX = x + j * HANG_DOI;
      var pointY = y + i * HANG_DOI;
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
      var pointX = j * HANG_DOI;
      var pointY = i * HANG_DOI;
      ctx.fillText(value, pointX, pointY);
    }
  }
}
