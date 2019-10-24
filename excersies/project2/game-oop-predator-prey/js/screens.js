class screens {


  // constructor
  //make scores for each predator
  constructor(screenImage, tempBottonX, tempBottonY, bottonWidth, bottonHeight, bottonColor,screenText) {
    this.screenImage = screenImage;
    this.bottonX = tempBottonX;
    this.bottonY = tempBottonY;
    this.bottonWidth=bottonWidth;
    this.bottonHeight=bottonHeight;
    this.bottonColor=bottonColor;
    this.screenText=screenText;

  }
  display(){
    push();
    background(this.screenImage);
    rectMode(CENTER);
    fill(this.bottonColor);
    rect(this.bottonX,this.bottonY,this.bottonWidth,this.bottonHeight);
    fill(0);
    text(this.screenText, this.bottonX-this.bottonWidth/2, this.bottonY);
    pop();
  }
}
