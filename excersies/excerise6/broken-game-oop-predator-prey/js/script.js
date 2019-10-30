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
//changed variable to work with syntax of setup fixed
let zebra;
let bee;

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
// space between function and setup fixed
function setup() {
  createCanvas(windowWidth, windowHeight);
 tiger = new Predator(100, 100, 5, color(200, 200, 0), 40);
 // the lack of the Y variable fixed
  antelope = new Prey(100, 100, 10, color(255, 100, 10), 50);
zebra = new Prey(100, 100, 8, color(255, 255, 255), 60);
// the lack od the diameter fixed
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  // add (D) fixed
  background(0);

  // Handle input for the tiger
  //put in the handle input fixed
 tiger.handleInput();
  // Move all the "animals"
  tiger.move();
  antelope.move();
  zebra.move();
  bee.move();
  // add a move for the bee to be able to move

  // Handle the tiger eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);

  // Display all the "animals"
  tiger.display();
  //add (e) fixed
  antelope.display();
  zebra.display();
  //replaced the o by a fixed
  //put a b for bee fixed
  bee.display();
}
