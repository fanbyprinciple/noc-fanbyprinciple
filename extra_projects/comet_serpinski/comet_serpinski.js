let mX = 50
let mY = 50
let counter = 0
let cometSize = 20
function setup() {
  createCanvas(400, 400);
  
  
}

function draw(){
  
  //drawSpotlight(mouseX, mouseY, 10,200,200,10)
  if(counter ==0){
  background('rgba(0,0,0,0.01)')
  }
  if (counter == 1){
    background(0)
    mX = mX + 10
    mY = mY + 10
  }
  
  noStroke()
  fill(255,120,0)
  ellipse(mouseX, mouseY, cometSize)
  drawCircle(width/2,height/2,mX+ mY)
  
  
  
  if(mouseX> width/2 && mouseY > width/2){
    counter = 1
    cometSize  = (mouseY - height)/3
  }
  
}

function drawCircle(x,y,w){
  stroke(color(height - mY, mX + mY, width - mX))
  noFill()
  ellipse(x,y,w)
  if (w > 2){
    drawCircle(x+w/2, y, w/2)
    drawCircle(x-w/2, y,w /2)
    drawCircle(x, y+w/2, w/2)
  }
  
}

function drawSpotlight(x,y,w,r,g,b){
  noStroke()
  fill(color(r,g,b))
  ellipse(x,y,w) 
  if (mouseX < width/2){
    if(x< width/2){
    
    drawSpotlight(x+10,y+random([15]) ,w-20, r+ 10, g+ 10, b + 10)
  } 
    
  } else {
    if(x>width/2){
    drawSpotlight(x-10,y+random([15]) ,w-20, r+ 10, g + 10, b + 10)
  }
  }
  
}