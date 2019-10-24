// Predator-Prey Simulation
// by Lisa Dubuc
//
//it is a predator and prey game where different animals are chasing others
//the size and speed of the preys change
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so they must keep eating to survive.

// Our predator
//create 2 new predators
let tiger;
let snake;
let wolf;

// The three prey
let chicken;
let bunny;
let bee;

// add variables for images
let tigerImage;
let snakeImage;
let wolfImage;
let chickenImage;
let bunnyImage;
let beeImage;
let safariImage;
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
function preload() {
  tigerImage = loadImage('assets/images/clown.png');
  snakeImage = loadImage('assets/images/pumpkin.png');
  wolfImage = loadImage('assets/images/ghost.png');
  chickenImage = loadImage('assets/images/dance.png');
  bunnyImage = loadImage('assets/images/guard.png');
  beeImage = loadImage('assets/images/angel.png');
  safariImage = loadImage('assets/images/haunted.jpg');
  startImage=loadImage('assets/images/jack.png');
  endImage=loadImage('assets/images/halloween.jpeg');
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
  playGame="S";
  bottonX=width/2;
  bottonY=height/2;
  tiger = new Predator(100, 100, 5, color(200, 200, 0), 40, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, tigerImage, SHIFT);
  snake = new Predator(100, 100, 5, color(200, 100, 0), 40, 87, 83, 65, 63, snakeImage, 32);
  wolf = new Predator(100, 100, 5, color(100, 200, 0), 40, 85, 74, 72, 75, wolfImage, ENTER);
  bunny = new Prey(100, 100, 10, color(255, 100, 10), 50, bunnyImage);
  chicken = new Prey(100, 100, 8, color(255, 255, 255), 60, chickenImage);
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10, beeImage);
  scoreBoard = new scoreboard(tiger.score, snake.score, wolf.score);
  //add end and start page set ups
  startScreen=new screens (startImage, bottonX, bottonY, 100, 100, color(148,6,6),"Start Game!");
  endScreen=new screens (endImage, bottonX, bottonY, 100, 100, color(148,6,6),"Game Over!")

}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  if (playGame==="P"){


  // Clear the background to black
  background(safariImage);

  gameSound.play();

  // Handle input for the tiger
  // give the 2 new predators handle input
  tiger.handleInput();
  wolf.handleInput();
  snake.handleInput();

  // Move all the "animals"
  wolf.move();
  snake.move();
  tiger.move();
  bunny.move();
  chicken.move();
  bee.move();

  // Handle the tiger eating any of the prey
  //give them to the two new predators too
  tiger.handleEating(chicken);
  tiger.handleEating(bunny);
  tiger.handleEating(bee);
  wolf.handleEating(chicken);
  wolf.handleEating(bunny);
  wolf.handleEating(bee);
  snake.handleEating(chicken);
  snake.handleEating(bunny);
  snake.handleEating(bee);

  // Display all the "animals"
  snake.display();
  wolf.display();
  tiger.display();
  chicken.display();
  bunny.display();
  bee.display();

  //put scoreboard in display
  scoreBoard.updateScores(tiger.score, snake.score, wolf.score);
  scoreBoard.display();
  //display gameover
   checkGameOver();
// display start page
}
else  if (playGame ==="S"){
startScreen.display();

}
//add a gameover page in diplay
else  if (playGame ==="E"){
endScreen.display();
}
}
//create mouse press function to have a botton to press to start
function mousePressed(){
  let d = dist(mouseX, mouseY, bottonX, bottonY);
  if(d<50){
    playGame="P";
  }
}
//make a checkgameover function to know when the game is over
  function checkGameOver() {
  if(snake.health<=1||wolf.health<=1||tiger.health<=1){
    playGame="E";
    console.log("game over");
  }
}
