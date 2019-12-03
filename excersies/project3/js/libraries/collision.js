class StarExplosion{

//constructor and all that is needed in it
  constructor(collisionImage,backgroundColor,){
    this.collisionImage=collisionImage;
    this.backgroundColor=backgroundColor;
    this.x =0;
    this.y=0;
    this.collisionImage.resize(50, 50);

  }
  //the display and position
  display(){
    image(this.collisionImage,this.x,this.y);
  }


}
