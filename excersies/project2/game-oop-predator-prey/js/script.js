// Predator-Prey Simulation
// by Lisa Dubuc
//
//it is a predator and prey game where different animals are chasing others
//the size and speed of the preys change
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so they must keep eating to survive.

// add variables for images
let clownImage;
let pumpkinImage;
let ghostImage;
let danceImage;
let guardImage;
let angelImage;
let hauntedImage;
//add variables to do start page
let playGame;
let buttonX;
let buttonY;

//add variable for socreboard
let scoreBoard;
//add start and end screen variables
let startScreen;
let endScreen;

let gameSound;
//preload images

//create empty groups arrays for prey and predator
let predatorGroup = [];
let preyGroup = [];

function preload() {
  clownImage = loadImage('assets/images/clown.png');
  pumpkinImage = loadImage('assets/images/pumpkin.png');
  ghostImage = loadImage('assets/images/ghost.png');
  danceImage = loadImage('assets/images/dance.png');
  guardImage = loadImage('assets/images/guard.png');
  angelImage = loadImage('assets/images/angel.png');
  hauntedImage = loadImage('assets/images/haunted.jpg');
  startImage = loadImage('assets/images/cold.jpg');
  endImage = loadImage('assets/images/jackie.jpg');
  gameSound = loadSound('assets/sounds/hauntedhouse.mp3');
}


// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
//give the two new predators code keys
//add images in set up
//add sprint to the set up and to all predators with individual keycodes
function setup() {
  createCanvas(windowWidth, windowHeight);
  //add set ups for the start page
  playGame = "S";
  bottonX = width / 2;
  bottonY = height / 2;
  //put the predators in array group
  predatorGroup[0] = new Predator(100, 100, 5, color(200, 200, 0), 40, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, clownImage, SHIFT);
  predatorGroup[1] = new Predator(100, 100, 5, color(200, 100, 0), 40, 87, 83, 65, 63, pumpkinImage, 32);
  predatorGroup[2] = new Predator(100, 100, 5, color(100, 200, 0), 40, 85, 74, 72, 75, ghostImage, ENTER);
  //put the preys in array groups
  preyGroup[0] = new Prey(100, 100, 10, color(255, 100, 10), 50, danceImage);
  preyGroup[1] = new Prey(100, 100, 8, color(255, 255, 255), 60, guardImage);
  preyGroup[2] = new Prey(100, 100, 20, color(255, 255, 0), 10, angelImage);
  scoreBoard = new ScoreBoard(predatorGroup[0].score, predatorGroup[1].score, predatorGroup[2].score, "Clown", "Pumpkin", "Ghost");
  //add end and start page set ups
  startScreen = new Screens(startImage, bottonX, bottonY, 100, 100, color('transparent'), "Start Game!", color(255, 0, 0));
  endScreen = new Screens(endImage, bottonX, bottonY, 100, 100, color('transparent'), "Game Over!", color(255, 0, 0))

}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  if (playGame === "P") {


    //put backcground image
    background(hauntedImage);


    //put in all the things the predators need to do
    for (let i = 0; i < predatorGroup.length; i++) {
      predatorGroup[i].handleInput();
      predatorGroup[i].move();
      predatorGroup[i].handleEating(preyGroup[0]);
      predatorGroup[i].handleEating(preyGroup[1]);
      predatorGroup[i].handleEating(preyGroup[2]);
      predatorGroup[i].display();

    }
    //put all needed for prey to excit
    for (let i = 0; i < preyGroup.length; i++) {
      preyGroup[i].move();
      preyGroup[i].display();

    }

    //put scoreboard in display
    //replace with the array group
    scoreBoard.updateScores(predatorGroup[0].score, predatorGroup[1].score, predatorGroup[2].score);
    scoreBoard.display();
    //display gameover
    checkGameOver();
    // display start page
  } else if (playGame === "S") {
    startScreen.display();


  }
  //add a gameover page in diplay
  else if (playGame === "E") {
    endScreen.display();

  }
}
//create mouse press function to have a botton to press to start
function mousePressed() {
  let d = dist(mouseX, mouseY, bottonX, bottonY);
  if (d < 50) {
    playGame = "P";
  //put the sound on loop 
    gameSound.loop();
  }
}
//make a checkgameover function to know when the game is over
//replace with the array group in
function checkGameOver() {
  if (predatorGroup[0].health <= 1 || predatorGroup[1].health <= 1 || predatorGroup[2].health <= 1) {
    playGame = "E";
    console.log("game over");
  }
}
