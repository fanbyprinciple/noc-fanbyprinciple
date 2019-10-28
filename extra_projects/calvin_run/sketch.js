let calvin

function setup() {
  createCanvas(600, 450);
  calvin = new Calvin()
}

function keyPressed(){
  if (key == ' '){
   calvin.jump();
  }
}

function draw() {
  background(220);
  calvin.show()
  calvin.move()
}