"use strict";

// Pong
// by Lisa Dubuc
//
// funny game of pong where you hit a baby if paddles and pass it to your
//friend, the baby does not mind it finds it funny hear him laugh
//
// Up and down keys control the right hand paddle, W and S keys control
// the left hand paddle

// Whether the game has started
let playing = false;

// Game colors (using hexadecimal)
let bgColor = 0;
let fgColor = 255;
// create variables for each paddle to have their own set of points
let pointsLeft = 0;
let pointsRight = 0;
//add gameover variable
let gameOver = false;


// BALL

// A ball object with the properties of
// position, size, velocity, and speed
//change ball size
let ball = {
  x: 0,
  y: 0,
  size: 30,
  vx: 0,
  vy: 0,
  speedX: 5,
  speedY: 5
}

// PADDLES

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
//add paddle color varible with set fill
let leftPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vy: 0,
  speed: 5,
  upKey: 87,
  downKey: 83,
  paddleColor: 255
}

// RIGHT PADDLE

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
//add paddle color varible with set fill
let rightPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vy: 0,
  speed: 5,
  upKey: 38,
  downKey: 40,
  paddleColor: 255
}

//add varibles for sound and image
let gameSound
let gameImage

// preload()
//
//load image and sound
function preload() {
  //add in sound
  gameSound = loadSound('assets/sounds/babylaugh.mp3');
  //add image for ball
  gameImage = loadImage('assets/images/baby.png');


}

// setup()
//
// Creates the canvas, sets up the drawing modes,
// Sets initial values for paddle and ball positions
// and velocities.
function setup() {
  // Create canvas and set drawing modes
  createCanvas(640, 480);
  rectMode(CENTER);
  noStroke();
  fill(fgColor);
 bgColor=color(97, 223, 255);
  setupPaddles();
  resetBall();
}

// setupPaddles()
//
// Sets the starting positions of the two paddles
function setupPaddles() {
  // Initialise the left paddle position
  leftPaddle.x = 0 + leftPaddle.w;
  leftPaddle.y = height / 2;

  // Initialise the right paddle position
  rightPaddle.x = width - rightPaddle.w;
  rightPaddle.y = height / 2;
}

// draw()
//
// Calls the appropriate functions to run the game
// See how tidy it looks?!
function draw() {
  //add gameover in draw
  //change background color and add text when game over
  if (gameOver == true) {
    background(255, 97, 110);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(28);
    text("Concussion!You have reached 15 successful hits!", width / 2, height / 2);
    image(gameImage, ball.x, ball.y, ball.size, ball.size);
    ball.size = ball.size + 1;
    ball.y = ball.y - 1;
  } else {
    //fill background
    background(bgColor);
    checkGameOver();
    if (playing) {
      // If the game is in play, we handle input and move the elements around
      handleInput(leftPaddle);
      handleInput(rightPaddle);
      updatePaddle(leftPaddle);
      updatePaddle(rightPaddle);
      updateBall();

      checkBallWallCollision();
      checkBallPaddleCollision(leftPaddle);
      checkBallPaddleCollision(rightPaddle);

      // Check if the ball went out of bounds and respond if so
      // (Note how we can use a function that returns a truth value
      // inside a conditional!)
      if (ballIsOutOfBounds()) {
        // If it went off either side, reset it
        resetBall();
        // This is where we would likely count points, depending on which side
        // the ball went off...
      }
    } else {
      // Otherwise we display the message to start the game
      displayStartMessage();
    }


    // We always display the paddles and ball so it looks like Pong!
    displayPaddle(leftPaddle);
    displayPaddle(rightPaddle);
    displayBall();
  }
}

// handleInput()
//
// Checks the mouse and keyboard input to set the velocities of the
// left and right paddles respectively.
function handleInput(paddle) {
  // Move the paddle based on its up and down keys
  // If the up key is being pressed
  if (keyIsDown(paddle.upKey)) {
    // Move up
    paddle.vy = -paddle.speed;
  }
  // Otherwise if the down key is being pressed
  else if (keyIsDown(paddle.downKey)) {
    // Move down
    paddle.vy = paddle.speed;
  } else {
    // Otherwise stop moving
    paddle.vy = 0;
  }
}

// updatePositions()
//
// Sets the positions of the paddles and ball based on their velocities
function updatePaddle(paddle) {
  // Update the paddle position based on its velocity
  paddle.y += paddle.vy;
}

// updateBall()
//
// Sets the position of the ball based on its velocity
function updateBall() {
  // Update the ball's position based on velocity
  ball.x += ball.vx;
  ball.y += ball.vy;
}

// ballIsOutOfBounds()
//
// Checks if the ball has gone off the left or right
// Returns true if so, false otherwise
function ballIsOutOfBounds() {
  //create if statement and else if statement to make each side have points
  //add in paddle colors by adding a varible and setting the colors at random when a point is made for both.
  //add speed difference to each if for the winner to get the ball when reset.
  if (ball.x < 0) {
    pointsRight = pointsRight + 1;
    rightPaddle.paddleColor = color(random(0, 255), random(0, 255), random(0, 255));
    console.log(pointsRight);
    ball.speedX = 5;
    return true;

  } else if (ball.x > width) {
    pointsLeft = pointsLeft + 1;
    console.log(pointsLeft);
    leftPaddle.paddleColor = color(random(0, 255), random(0, 255), random(0, 255));
    ball.speedX = -5;
    return true;
  }
  return false;
}

// checkBallWallCollision()
//
// Check if the ball has hit the top or bottom of the canvas
// Bounce off if it has by reversing velocity
// Play a sound
function checkBallWallCollision() {
  // Check for collisions with top or bottom...
  if (ball.y < 0 || ball.y > height) {
    // It hit so reverse velocity
    ball.vy = -ball.vy;
    // change sound in game
    gameSound.currentTime = 0;
    gameSound.play();
  }
}

// checkBallPaddleCollision(paddle)
//
// Checks for collisions between the ball and the specified paddle
function checkBallPaddleCollision(paddle) {
  // VARIABLES FOR CHECKING COLLISIONS

  // We will calculate the top, bottom, left, and right of the
  // paddle and the ball to make our conditionals easier to read...
  let ballTop = ball.y - ball.size / 2;
  let ballBottom = ball.y + ball.size / 2;
  let ballLeft = ball.x - ball.size / 2;
  let ballRight = ball.x + ball.size / 2;

  let paddleTop = paddle.y - paddle.h / 2;
  let paddleBottom = paddle.y + paddle.h / 2;
  let paddleLeft = paddle.x - leftPaddle.w / 2;
  let paddleRight = paddle.x + paddle.w / 2;

  // First check the ball is in the vertical range of the paddle
  if (ballBottom > paddleTop && ballTop < paddleBottom) {
    // Then check if it is touching the paddle horizontally
    if (ballLeft < paddleRight && ballRight > paddleLeft) {
      // Then the ball is touching the paddle
      // Reverse its vx so it starts travelling in the opposite direction
      ball.vx = -ball.vx;
      // change sound
      gameSound.currentTime = 0;
      gameSound.play();
    }
  }
}

// displayPaddle(paddle)
//
// Draws the specified paddle
function displayPaddle(paddle) {
  // Draw the paddles
  //add in fill
  fill(paddle.paddleColor);
  rect(paddle.x, paddle.y, paddle.w, paddle.h);
}

// displayBall()
//
// Draws the ball on screen as a square
function displayBall() {
  // Draw the ball
  //add in fill
  //make ball image
  fill(255);
  imageMode(CENTER);
  image(gameImage, ball.x, ball.y, ball.size, ball.size);
}

// resetBall()
//
// Sets the starting position and velocity of the ball
function resetBall() {
  // Initialise the ball's position and velocity
  ball.x = width / 2;
  ball.y = height / 2;
  ball.vx = ball.speedX;
  ball.vy = ball.speedY;
}

// displayStartMessage()
//
// Shows a message about how to start the game
function displayStartMessage() {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  text("CLICK TO START", width / 2, height / 2);
  pop();
}

// mousePressed()
//
// Here to require a click to start playing the game
// Which will help us be allowed to play audio in the browser
function mousePressed() {
  playing = true;
}
//add checkgameover function
function checkGameOver() {
  if (pointsLeft >= 15 || pointsRight >= 15) {
    gameOver = true;
    ball.y = height;
    console.log("game over");
  }
}
