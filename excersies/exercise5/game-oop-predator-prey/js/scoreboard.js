
//add scoreboard class
class scoreboard {


  // constructor
  //make scores for each predator
  constructor(scoreP1,scoreP2,scoreP3) {
this.scoreP1=scoreP1;
this.scoreP2=scoreP2;
this.scoreP3=scoreP3;

  }

//update the scores
updateScores(scoreP1,scoreP2,scoreP3) {
this.scoreP1=scoreP1;
this.scoreP2=scoreP2;
this.scoreP3=scoreP3;
}

//to display the scores with text
display(){
push();
fill(0);
textSize(40);
text(this.scoreP1, 300,40);
text(this.scoreP2, 500,40);
text(this.scoreP3, 900,40);
pop();
}

}
