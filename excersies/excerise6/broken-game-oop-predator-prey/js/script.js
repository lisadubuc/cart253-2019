"use strict";

// Predator-Prey Simulation
// by Lisa Dubuc
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

////////////////////
// 10 ERRORS IN HERE
////////////////////

// Our predator
let tiger;

// The three prey
let antelope;
let zebra;
let bee;

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  ////////Fixed: added space between function and setup
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(100, 100, 5, color(200, 200, 0), 40);
  ///add the missing y value fixed
  antelope = new Prey(100, 100, 10, color(255, 100, 10), 50);
  ///add missing e fixed
  zebra = new Prey(100, 100, 8, color(255, 255, 255), 60);
  ///add missing diameter fixed
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);
  ///missing the d fixed

  // Handle input for the tiger
  tiger.handleInput();
  ///add in the handle input fixed
  // Move all the "animals"
  tiger.move();
  antelope.move();
  ///put the missing e fixed
  zebra.move();
  bee.move();
  ///add move for bee fixed

  // Handle the tiger eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);

  // Display all the "animals"
  tiger.display();
  antelope.display();
  zebra.display();
  ///not an o but an a fixed
  bee.display();
  ///missing a b fixed
}
