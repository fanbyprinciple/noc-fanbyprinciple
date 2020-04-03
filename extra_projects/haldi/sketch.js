function setup() {
  createCanvas(400, 400);
}

let size = 40
let prevX = 0 
let prevY = 0
let counter  = 0

function draw() {
  noStroke()
  
  
  if(mouseX === prevX && mouseY == prevY){
    size -= 0.5
    fill(250,218,94,10)
    ellipse(mouseX, mouseY, size + random(3),size + random(3))
    counter += 1
    
  } else {
    size = 40
    counter = 0
    fill(250,218,100,10)
    ellipse(mouseX, mouseY, size + random(3),size + random(3))
  }
  

  prevX = mouseX
  prevY = mouseY
  // background(255)
}