let bob
let anchor


let restLength = 200
let k =0.01
let velocity 

let gravity

function setup() {
  createCanvas(600, 400);
  bob = createVector(350,250)
  anchor = createVector(300,0)
  velocity = createVector(0,0)
  gravity = createVector(0, 0.1)
}

function draw() {
  background(112, 50, 126);
  strokeWeight(4)
  stroke(255)
  line(anchor.x, anchor.y, bob.x, bob.y)
  
  fill(45, 197, 244)
  circle(anchor.x, anchor.y, 64)
  circle(bob.x, bob.y, 64)
  
  if (mouseIsPressed){
    bob.x = mouseX
    bob.y = mouseY
    velocity.set(0,0)
  }
  
  
  let force = p5.Vector.sub(bob, anchor)
  let x = force.mag() - restLength
  force.normalize()
  force.mult(-1 * k * x)

//   let x = y - restLength
//   let force = -k * x
  
  velocity.add(force)
  velocity.add(gravity)
  bob.add(velocity)
  velocity.mult(0.99)
//   y += velocity
  
//   velocity *= 0.99
  
}