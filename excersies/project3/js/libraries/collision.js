class StarExplosion {

  //constructor and all that is needed in it
  constructor(collisionImage, backgroundColor, ) {
    this.collisionImage = collisionImage;
    this.backgroundColor = backgroundColor;
    this.x = 0;
    this.y = 0;
    this.sizeX = 50;
    this.sizeY = 50;
    this.scaleSpeed = 1;
    //this.collisionImage.resize(0, 0);

  }
  //the display and position
  display() {
    image(this.collisionImage, this.x, this.y, this.sizeX, this.sizeY);
  }
  update() {
    this.sizeX += this.scaleSpeed;
    this.sizeY += this.scaleSpeed;
  }

}
