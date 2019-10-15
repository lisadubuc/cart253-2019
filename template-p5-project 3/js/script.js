"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// preload()
//
// Description of preload
let predator;
let prey;

function preload() {

}


// setup()
//
// Description of setup

  function setup() {
    createCanvas(windowWidth, windowHeight);
    predator = new Predator(0, 0, 5, color(255, 0, 0), 25);
    antelope= new prey (500,500,30, color(200,200,50), 100 "larry");
  }


// draw()
//
// Description of draw()

function draw() {
  background(0);
  predator.handleInput();
  predator.move();
prey.move();
predator.handleEating(prey);
prey.display();
predator.display();
}
