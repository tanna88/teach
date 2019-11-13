function BaseBrick() {
  this.x = 0;
  this.y = 0;
  this.data = [
    [1,1,1],
    [1,1,1],
    [1,1,1],
  ]
}

BaseBrick.prototype.moveLeft = function() {
  this.x -= 1;
}

BaseBrick.prototype.moveRight = function() {
  this.x += 1;
}

BaseBrick.prototype.moveUp = function() {
  this.y -= 1;
}

BaseBrick.prototype.moveDown = function() {
  this.y += 1;
}

BaseBrick.prototype.draw = function() {
  this.y += 1;
}
