var spacing =10
var x = 0
var y = 0
function setup() {
  createCanvas(400, 400);
  background(0)
}

function draw() {
  
  if(random(1)<0.5) {
    stroke(random(255),120,120)
    line(x,y, x+ noise(mouseX), y+spacing )
  } else {
    stroke(120,120,random(255))
    line(x,y + spacing, x+spacing + noise(x),y)
    
  }
  
  x = x + spacing
    if (x>width){
      x = 0
      y += spacing
  }
  
  
}