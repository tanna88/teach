var CELL_UNIT = 20;
var OFFSET = 10;

class BaseMatrixDrawable {
  constructor(data, color) {
    this.data = data;
    this.color = color;
  }

  draw(ctx, x = 0, y = 0) {
    ctx.fillStyle = this.color;
    for (var dong = 0; dong < this.data.length; dong++) {
      for( var cot = 0; cot < this.data[dong].length; cot ++) {
        var value = this.data[dong][cot];

        if (value != 0) {
          var pointX = (x + cot) * CELL_UNIT;
          var pointY = (y + dong) * CELL_UNIT;
          if (showDebug) {
            ctx.fillText(value, pointX + OFFSET, pointY + OFFSET);
          } else {
            ctx.fillRect(pointX, pointY, CELL_UNIT, CELL_UNIT);
          }
        }
      }
    }
  }
}

