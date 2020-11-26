//inspired from this tweet here : by @jagarikin

var deg = 12;

function setup() {
  createCanvas(800, 400);
 }


// really bad way to make arrows though
function makeInArrow(x,y, size, where ){
  
  // where 0 for left
  // where 1 for right
  // where 2 is down
  // where 3 is up
  
  if (where == 0){
    x = x+10
    strokeWeight(12)
    beginShape();
    vertex(x,y)
    vertex(x+size/2,y+size/2)
    endShape();
    beginShape()
    vertex(x,y)
    vertex(x+size,y)
    endShape()
    beginShape()
    vertex(x,y)
    vertex(x+size/2,y-size/2)
    endShape()  
  } else if (where == 1){
    x = x-10
    strokeWeight(12)
    beginShape();
    vertex(x,y)
    vertex(x-size/2,y+size/2)
    endShape();
    beginShape()
    vertex(x,y)
    vertex(x-size,y)
    endShape()
    beginShape()
    vertex(x,y)
    vertex(x-size/2,y-size/2)
    endShape()
    
  } else if (where == 2){
    y = y-10
    strokeWeight(12)
    beginShape();
    vertex(x,y)
    vertex(x+size/2,y-size/2)
    endShape();
    beginShape()
    vertex(x,y)
    vertex(x,y-size)
    endShape()
    beginShape()
    vertex(x,y)
    vertex(x-size/2,y-size/2)
    endShape()
    
  } else if (where == 3){
    y = y+10
    strokeWeight(12)
    beginShape();
    vertex(x,y)
    vertex(x+size/2,y+size/2)
    endShape();
    beginShape()
    vertex(x,y)
    vertex(x,y+size)
    endShape()
    beginShape()
    vertex(x,y)
    vertex(x-size/2,y+size/2)
    endShape()
    
  }
  
  
}

function makeOutArrow(x,y, size, where ){
  
  // where 0 for left
  // where 1 for right
  // where 2 is down
  // where 3 is up
  
  if (where == 0){
    x = x-10 -size
    strokeWeight(12)
    beginShape();
    vertex(x,y)
    vertex(x+size/2,y+size/2)
    endShape();
    beginShape()
    vertex(x,y)
    vertex(x+size,y)
    endShape()
    beginShape()
    vertex(x,y)
    vertex(x+size/2,y-size/2)
    endShape()  
  } else if (where == 1){
    x = x+10 + size
    strokeWeight(12)
    beginShape();
    vertex(x,y)
    vertex(x-size/2,y+size/2)
    endShape();
    beginShape()
    vertex(x,y)
    vertex(x-size,y)
    endShape()
    beginShape()
    vertex(x,y)
    vertex(x-size/2,y-size/2)
    endShape()
    
  } else if (where == 2){
    y = y+10 + size
    strokeWeight(12)
    beginShape();
    vertex(x,y)
    vertex(x+size/2,y-size/2)
    endShape();
    beginShape()
    vertex(x,y)
    vertex(x,y-size)
    endShape()
    beginShape()
    vertex(x,y)
    vertex(x-size/2,y-size/2)
    endShape()
    
  } else if (where == 3){
    y = y-10-size
    strokeWeight(12)
    beginShape();
    vertex(x,y)
    vertex(x+size/2,y+size/2)
    endShape();
    beginShape()
    vertex(x,y)
    vertex(x,y+size)
    endShape()
    beginShape()
    vertex(x,y)
    vertex(x-size/2,y+size/2)
    endShape()
    
  }
  
  
}




function draw() {
  background(220);
  noStroke()
  fill(0, 51, 204)
  ellipse(200,height/2,300)
  fill(204, 153, 0)
  push(); 
  translate (200,height/2);
  rotate (radians (deg));
  arc(0, 0, 300, 300, 0, HALF_PI)
  arc(0, 0, 300, 300, PI, PI + HALF_PI)
  pop()
  fill(220)
  ellipse(200, height/2, 200)
  
  stroke(0)
  makeInArrow(200, height/2, 30, 0)
  makeInArrow(200, height/2, 30, 1)
  makeInArrow(200, height/2, 30, 2)
  makeInArrow(200, height/2, 30, 3)
  
  noStroke()
  fill(0, 51, 204)
  ellipse(600, height/2,300)
  fill(204, 153, 0)
  push(); 
  translate (600,height/2);
  rotate (radians (deg));
  arc(0, 0, 300, 300, 0, HALF_PI)
  arc(0, 0, 300, 300, PI, PI + HALF_PI)
  pop()
  arc(600, height/2, 200, 200, 0, HALF_PI)
  fill(220)
  ellipse(600, height/2, 200)
  
  stroke(0)
  makeOutArrow(600, height/2, 30, 0)
  makeOutArrow(600, height/2, 30, 1)
  makeOutArrow(600, height/2, 30, 2)
  makeOutArrow(600, height/2, 30, 3)
  
  

  deg+=4;

}
