// with help from zygugi sketch 
// here - https://editor.p5js.org/zygugi/sketches/SkGvzmnyf
class Pendulum {
  constructor(){
    this.r = 100
    this.theta = PI/4
      
    this.momentum = 0.1
    this.x = 0
    this.y = 0
    
    this.vel = 0.0
    this.acc = 0.0
    this.damp = 0.995
  }
  
  update(){
    
    this.swing()
    this.draw()
  }
  
  draw(){
    
    this.x = this.r*sin(this.theta)
    this.y = this.r*cos(this.theta)
    
    push()
    translate(width/2, height/2)
    strokeWeight(3)
    // line(this.x, this.y, this.x, this.y - this.r);
    line(this.x, this.y, 0, 0);
    circle(this.x, this.y, 20)  
    pop()
  }
  
  swing(){
    var gravity = 0.4
    this.acc = (-1 * gravity/ this.r) * sin(this.theta)
    this.vel += this.acc
    this.vel *= this.damp
    this.theta += this.vel 
  }
    
}
 let c
function mousePressed() {
  c =220
  print(p.x, p.y)
  p.acc = 0
  p.vel = 0
}

let p
function setup() {
  createCanvas(400, 400);
  p = new Pendulum()
  c =255
  //line(width/2, height/2, width/2, height/2+10)
}

function draw() {
  background(c);
  p.update()
  
}