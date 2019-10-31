//add class for screens (start and end)
class screens {


  // constructor
  //make scores for each predator
  constructor(screenImage, tempBottonX, tempBottonY, bottonWidth, bottonColor, bottonHeight, screenText, textColor) {
    this.screenImage = screenImage;
    this.bottonX = tempBottonX;
    this.bottonY = tempBottonY;
    this.bottonWidth = bottonWidth;
    this.bottonHeight = bottonHeight;
    this.bottonColor = bottonColor;
    this.screenText = screenText;
    this.textColor = textColor

  }
  //make the diplay
  display() {
    push();
    background(this.screenImage);
    rectMode(CENTER);
    fill(this.bottonColor);
    textSize(30);
    rect(this.bottonX, this.bottonY, this.bottonWidth, this.bottonHeight);
    fill(this.textColor);
    text(this.screenText, this.bottonX - this.bottonWidth / 2, this.bottonY);
    pop();
  }
}
