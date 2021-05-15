let flock

function setup() {
  createCanvas(1200, 800);
  createP("Drag the mouse to create more blirds")
  
  flock = new Flock()
  
  for (let i=0; i<100; i++){
    let b = new Blird()
    flock.addBlird(b)
  }
}

function draw() {
  background(0);
  flock.run()  
}

function mouseDragged(){
  flock.addBlird(new Blird(mouseX, mouseY))
}

