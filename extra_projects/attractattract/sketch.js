class Particle{
  constructor(x,y){
    this.pos = createVector(x,y)
    this.prev = createVector(x,y)
    // this.vel = createVector(random(4),random(4))
    // this.vel = p5.Vector.random2D()
    // this.vel.setMag(random(2,5))
    this.vel = createVector()
    
    this.acc = createVector(0,0)
  }
  
  update(){
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.acc.mult(0)
  }
  
  show(){
    stroke(255,50)
    strokeWeight(4)
    line(this.pos.x,this.pos.y,this.prev.x, this.prev.y)
    this.prev.x = this.pos.x
    this.prev.y = this.pos.y
  }
  
  attracted(target){
    var force = p5.Vector.sub(target,this.pos)
    var d = force.mag()
    
    d = constrain(d,5,25)
    var G = 5
    var magnitude = G / (d*d)
    magnitude *= 0.8
    if(d < 20 )
    {
      force.mult(-1)
    }
    force.setMag(magnitude)
    
    this.acc.add(force) 
  }
}

var attractors = []
var particles = []
let number = 1000
let attNumber = 0

function setup() {
  createCanvas(400, 400)
  //background(0)
  
  for(let i=0; i< attNumber; ++i){
  attractors[i] = createVector(random(width),random(height))
  }
  
  for(var i=0; i <number; ++i){
   particles.push(new Particle(random(width),random(height))) 
  }
  
}

function mousePressed(){
  attractors.push(createVector(mouseX, mouseY))
}

function draw() {
  
  background(5)
  
  stroke(0,0,255)
  strokeWeight(6)
  
  for(let i=0; i<attractors.length; ++i){
  point(attractors[i].x , attractors[i].y)
  }
  
  
  for(let i=0; i < particles.length; ++i){
    particles[i].show()
    
    for(let j=0; j<attractors.length; ++j){
      particles[i].attracted(attractors[j])
     }
    particles[i].update()
    particles[i].show()
  }
  
}