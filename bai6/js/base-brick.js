class BaseBrick extends BaseMatrixDrawable {
  constructor(data, color = 'rgb(200, 100, 0)') {
    super(data, color);
    this.x = 12;
    this.y = 0;
  }

  moveLeft() {
    this.x -= 1;
  }

  moveRight() {
    this.x += 1;
  }

  moveUp() {
    this.y -= 1;
  }

  moveDown() {
    this.y += 1;
  }

  draw(ctx) {
    super.draw(ctx, this.x, this.y);
  }
}
