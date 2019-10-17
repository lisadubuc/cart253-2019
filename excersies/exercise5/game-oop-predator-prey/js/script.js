// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
//create 2 new predators
let tiger;
let snake;
let wolf;

// The three prey
let chicken;
let bunny;
let bee;

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
//give the two new predators code keys
function setup() {
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(100, 100, 5, color(200, 200, 0), 40, UP_ARROW, DOWN_ARROW,LEFT_ARROW, RIGHT_ARROW);
  snake= new Predator(100, 100,5, color(200,100,0), 40, 87,83,65,63);
  wolf= new Predator(100,100,5, color(100,200,0), 40, 85,74,72,75);
  bunny = new Prey(100, 100, 10, color(255, 100, 10), 50);
  chicken = new Prey(100, 100, 8, color(255, 255, 255), 60);
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);

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
}
