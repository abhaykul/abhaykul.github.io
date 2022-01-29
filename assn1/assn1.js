function drawNameWithLines ()
{
  // insert your code here to draw the letters of your name 
  // using only lines()
  
  // A
  line(100,100,50,200);
  line(100,100,150,200);
  line(75,150,125,150);
  
  // V
  line(250,200,200,100);
  line(250,200,300,100);
  
  // K
  line(350,100,350,200);
  line(350,150,450,100);
  line(350,150,450,200);
}

function drawNameWithTriangles ()
{
  // insert your code here to draw the letters of your name 
  // using only ltriangles()
  triangle (100,100,50,200,35,185);
  triangle (100,100,150,200,165,185);
  triangle (75,150,125,150,100,155);
  
  triangle (250,200,250,175,200,100);
  triangle (250,200,250,175,300,100);
  
  triangle (350,100,350,150,355,100);
  triangle (350,200,350,150,355,200);
  triangle (350,145,350,155,450,100);
  triangle (350,145,350,155,450,200);
}

// -----------------------------------------------------------
//
//  Do not edit below this lne
//
// -----------------------------------------------------------

let doLine;
let doTri;
let lineColor;
let fillColor;
let backgroundColor;

function setup() {
  createCanvas(500, 500);
  backgroundColor = color (150, 150, 150);
  background(backgroundColor);
  doLine = false;
  doTri = false;
  lineColor = color (0, 0, 0);
  fillColor = color (255, 0, 0);
}

function draw ()
{
  if (doLine) stroke(lineColor); else stroke (backgroundColor);
  drawNameWithLines();
  
  if (doTri) {
     fill(fillColor);
     stroke(fillColor);
  }
  else {
    fill(backgroundColor);
    stroke(backgroundColor);
  }
  drawNameWithTriangles();
}

function keyPressed()
{
  if (key == 'l') doLine = !doLine;
  if (key == 't') doTri = !doTri;
}