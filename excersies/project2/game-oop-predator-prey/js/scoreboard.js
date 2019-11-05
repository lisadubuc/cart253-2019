//add scoreboard class
class ScoreBoard {


  // constructor
  //make scores for each predator
  constructor(scoreP1, scoreP2, scoreP3, p1Name, p2Name, p3Name) {
    this.scoreP1 = scoreP1;
    this.scoreP2 = scoreP2;
    this.scoreP3 = scoreP3;
    this.p1Name = p1Name;
    this.p2Name = p2Name;
    this.p3Name = p3Name;


  }

  //update the scores
  updateScores(scoreP1, scoreP2, scoreP3) {
    this.scoreP1 = scoreP1;
    this.scoreP2 = scoreP2;
    this.scoreP3 = scoreP3;
  }

  //to display the scores with text
  display() {
    push();
    fill(0);
    textSize(40);
    text(this.scoreP1, 150, 80);
    text(this.scoreP2, 350, 80);
    text(this.scoreP3, 550, 80);
    text(this.p1Name, 100, 40);
    text(this.p2Name, 300, 40);
    text(this.p3Name, 500, 40);
    pop();
  }

}
