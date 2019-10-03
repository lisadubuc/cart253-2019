let startX;
let startY;
let segmentRadius = 20;
let numSegments = 10;
function setup() {
  createCanvas(640,480);
  startX = width/5;
  startY = height/2;
}

function draw() {
  background(200,250,200);
  drawCaterpillar();
  drawCaterpillar();
}

  function drawCaterpillar() {
    noStroke();
    fill(80,200,80);
    let segmentsDrawn = 0;
    let x = startX;
    while (segmentsDrawn < numSegments) {
      ellipse(x,startY,segmentRadius*2);
      x += segmentRadius * 1.5;
      segmentsDrawn++;
    }
