function myLine (x1, y1, x2, y2)
{
  // insert your code here to draw a line from (x1, y1) to (x2, y2)
  // using only calls to point().
  // your code should implement the Midpoint algorithm
  dx = x2 - x1;
  dy = y2 - y1;
  if (dy == 0){
      for (var x = x1; x <= x2; x++){
           point(x,y1);
      }
      return;
  }
  if (dx == 0){
      for (var y = y1; y <= y2; y++){
           point(x1,y);
      }
      return;
  }
  slope = 1;
  d = dx - (2* dy);
  y = y1;
  if (dy < 0){
      slope = -1;
      dy = -dy;
  }
  for (var x=x1; x<x2; x++){
      point(x,y);
      if(d <= 0){
          d += 2 * (dx-dy);
          y += slope;
      }
      else{
          d += -2 * dy;
      }
  }
}


function myTriangle (x0, y0, x1, y1, x2, y2)
{
  // insert your code here to draw a triangle with vertices (x0, y0), (x1, y1) and (x2, y2)
  // using only calls to point().
  // your code should implement the the algorithm presented in the video
  xmin = Math.min(x0,x1,x2);
  xmax = Math.max(x0,x1,x2);
  ymin = Math.min(y0,y1,y2);
  ymax = Math.max(y0,y1,y2);
  Rx = xmax + 1;
  Ry = ymax + 1;
  for(var Px=xmin; Px<=xmax; Px++){
      for(var Py=ymin; Py<=ymax; Py++){
           // L1
           ff1 = intersect(Rx,Ry,Px,Py,x0,y0,x1,y1);
           // L2
           ff2 = intersect(Rx,Ry,Px,Py,x1,y1,x2,y2);
           // L3
           ff3 = intersect(Rx,Ry,Px,Py,x0,y0,x2,y2);
           if ((ff1+ff2+ff3) == 1){
               point(Px,Py);
           }
      }
  }
}

function overlap(xa,ya,xb,yb,xc,yc){
    var res1 = (yc - ya)*(xb - xa);
    var res2 = (yb - ya)*(xc - xa);
    return res1 > res2;
}

function intersect(xa,ya,xb,yb,xc,yc,xd,yd){
   var flag1 = overlap(xa,ya,xc,yc,xd,yd) != overlap(xb,yb,xc,yc,xd,yd);
   var flag2 = overlap(xa,ya,xb,yb,xc,yc) != overlap(xa,ya,xb,yb,xd,yd);
   return flag1 && flag2;
}

// --------------------------------------------------------------------------------------------
//
//  Do not edit below this lne
//
// --------------------------------------------------------------------------------------------

let doMine;
let scene;
let backgroundColor;

function setup () 
{
  createCanvas (500, 500);
  doMine = true;
  scene = 1;
  backgroundColor = color (150, 150, 150);
  background (backgroundColor);
}

function draw ()
{
  fill (0,0,0);
    if (doMine) text ("my solution", 20, 475);
    else text ("reference", 20, 475);
    
  if (scene == 1) doLines();
  if (scene == 2) doHouse();
  
}

function doHouse()
{
  if (!doMine) {
    fill (255, 0, 0);
    stroke (255,0,0);
    triangle (200, 300, 300, 200, 200, 200);
    triangle (300, 300, 300, 200, 200, 300);
    fill (0, 0, 255);
    stroke (0,0,255);
    triangle (200,200, 300, 200, 250, 150);
    stroke (0,255,0);
    fill (0,255,0);
    triangle (250, 300, 275, 300, 250, 250);
    triangle (275, 300, 275, 250, 250, 250);
  }
  else {
    fill (128, 0, 0);
    stroke (128,0,0);
    myTriangle (200, 300, 300, 200, 200, 200);
    myTriangle (300, 300, 300, 200, 200, 300);
    fill (0, 0, 128);
    stroke (0,0,128);
    myTriangle (200,200, 300, 200, 250, 150);
    stroke (0,128,0);
    fill (0,128,0);
    myTriangle (250, 300, 275, 300, 250, 250);
    myTriangle (275, 300, 275, 250, 250, 250);
  }
}

function doLines()
{
  if  (!doMine) {
    stroke (255, 255, 255);
    line (50, 250, 450, 250);
    line (250, 50, 250, 450);
    line (50, 450, 450, 50);
    line (50, 50, 450, 450);
  }
  else {
    stroke (0, 0, 0);
    myLine (50, 250, 450, 250);
    myLine (250, 50, 250, 450);
    myLine (50, 450, 450, 50);
    myLine (50, 50, 450, 450);
  }
}

function keyPressed()
{
  if (key == '1') 
  {
    background (backgroundColor);
    scene = 1;
  }
  
  if (key == '2') 
  {
    background (backgroundColor);
    scene = 2;
  }
  
  if (key == 'm') 
  {
    background (backgroundColor);
    doMine = !doMine;
  }
}