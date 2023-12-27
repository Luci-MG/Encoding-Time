// setup() is called once at page-load
function setup() {
  createCanvas(400, 300); // make an HTML canvas element width x height pixels
  hrColor = color(120, 30, 150);   
  minColor = color(150, 50, 200);  
  secColor = color(190, 90, 220);       
  innerColor = color(220, 140, 255); 
  spacing = 133; // spacing between shapes
  sizeOfShapes = 65 // size of shapes
}

// draw() is called 60 times per second
function draw() {
  background(235);
  drawShapesAccordingToTime();
}

// function for drawing time grids 
function drawShapesAccordingToTime() {
  drawShapes(hour(), sizeOfShapes, hrColor, width / 2 - spacing, height / 2); 
  drawShapes(minute(), sizeOfShapes, minColor, width / 2, height / 2); 
  drawShapes(second(), sizeOfShapes, secColor, width / 2 + spacing, height / 2); 
}

function drawShapes(sides, radius, col, x, y) {
  let angle = TWO_PI / sides;
  push();
  translate(x, y);
  fill(col);

  // Draw the shape based on time
  beginShape();
  for (let i = 0; i < sides; i++) {
    let px = cos(i * angle) * radius;
    let py = sin(i * angle) * radius;
    vertex(px, py);
  }
  endShape(CLOSE);

  // Draw lines from each vertex to the center
  for (let i = 0; i < sides; i++) {
    let px = cos(i * angle) * radius;
    let py = sin(i * angle) * radius;
    line(0, 0, px, py);
  }

  // If sides is 0, draw a dot at the center
  if (sides === 0) {
      ellipse(0, 0, 2, 2);
  }

  pop();
}