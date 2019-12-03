/******************************************************

Game - racetrack
Lisa Dubuc

This is a neverending race game where you do laps and try not to
collide in enemy cars to have the highest amount of laps.

******************************************************/

// avatar size and position
let avatarX;
let avatarY;
let avatarSize = 100;

// The speed and velocity of avatar
let avatarSpeed = 10;
let avatarVX = 0;
let avatarVY = 0;

//the start button
let buttonX;
let buttonY;


// How many dodges the player has made
let dodges = 0;

//add image variables
let avatarImage
let enemyImageTemp
let carImage
let raceImage
let trackImage
let startImage;
let explotionImage;
let trackImageX = 0;

//track speed variable
let trackSpeed = 10;

//start game variable
let startGame = false;

//start screen variable
let startScreen;

//sound variable
let gameSound;

//array variable
let enemys = [];

//explosion variable
let explosion;


//preload images and sound
function preload() {
  avatarImage = loadImage('assets/images/car3.png');
  enemyImageTemp = loadImage('assets/images/car1.png');
  carImage = loadImage('assets/images/car2.png');
  raceImage = loadImage('assets/images/car4.png');
  trackImage = loadImage('assets/images/track1.jpg');
  gameSound = loadSound('assets/sounds/racing.mp3');
  startImage = loadImage('assets/images/startscreen.jpg')
  explotionImage = loadImage('assets/images/boom.png')

}


// setup()
//
// Make the canvas, position the avatar and enemys
function setup() {
  // Create our playing area
  createCanvas(1440, 716);
  // Put the avatar in the centre
  avatarX = width / 2;
  avatarY = height / 2;

  bottonX = width / 2.2;
  bottonY = height / 2;

  //add classes and arrays
  enemys[0] = new Enemy(enemyImageTemp, 0, random(0, height), random(5, 12), 90);
  enemys[1] = new Enemy(carImage, 0, random(0, height), random(5, 12), 90);
  enemys[2] = new Enemy(raceImage, 0, random(0, height), random(5, 12), 90);
  startScreen = new Screens(startImage, bottonX, bottonY, 100, 100, color('transparent'), "START RACING!", color(3, 161, 252));
  explosion = new StarExplosion(explotionImage, 0);


  // No stroke so it looks cleaner
  noStroke();
}

// draw
function draw() {
  //start game function to have start screen and game
  if (startGame === true) {
    playGame();

  } else {
    startScreen.display();
  }


}
//to have continues track
function playGame() {
  background(0);
  image(trackImage, trackImageX, 0, width, height);
  image(trackImage, trackImageX - width, 0, width, height);
  if (trackImageX < (width)) {
    trackImageX = trackImageX + trackSpeed;
  } else {
    trackImageX = 0;
  }


  // Default the avatar's velocity to 0 in case no key is pressed this frame
  avatarVX = 0;
  avatarVY = 0;

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately



  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
  } else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
  }

  // Move the avatar according to its calculated velocity
  if (enemys[0].collided === false && enemys[1].collided === false && enemys[2].collided === false) {
    avatarX = avatarX + avatarVX;
    avatarY = avatarY + avatarVY;
  }
  //display all what enemy needs
  for (let i = 0; i < enemys.length; i++) {
    enemys[i].update();
    enemys[i].collision(avatarX, avatarY, avatarSize);
    enemys[i].resetAfterCollision();
    enemys[i].reset();
    enemys[i].display();
  }



  // Check if the avatar has gone off the screen (cheating!)
  if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
    // If they went off the screen they lose in the same way as above.
    console.log("YOU LOSE!");
    avatarX = width / 2;
    avatarY = height / 2;
    dodges = 0;
  }




  //add avatar image
  image(avatarImage, avatarX, avatarY, avatarSize, avatarSize);


  // display the number of dodges
  textAlign(RIGHT, TOP);
  textSize(64);
  fill(3, 161, 252);
  text(dodges, width, 0);

}
//for the button to be pressed
function mousePressed() {
  let d = dist(mouseX, mouseY, bottonX, bottonY);
  if (d < 50) {
    startGame = true;
    //put the sound on loop
    gameSound.loop();
  }
}
