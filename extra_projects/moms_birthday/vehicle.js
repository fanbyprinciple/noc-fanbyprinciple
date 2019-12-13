class Vehicle {
  constructor(x,y) {
    this.pos = createVector(random(width),random(height))
    this.vel = p5.Vector.random2D()
    this.acc = createVector()
  
    this.target = createVector(x,y)
    this.maxspeed = 10
    
    this.r = 8
    
    this.maxforce = 1
  
  }
  
  update() {
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.acc.mult(0)
  }
  
  behaviors() {
    var arrive = this.arrive(this.target)
    
    
    var mouse = createVector(mouseX, mouseY)
    var flee = this.flee(mouse)
    
    arrive.mult(1)
    flee.mult(5)
    
    this.applyForce(arrive)
    this.applyForce(flee)
    

  }
  
  flee(target) {
    var desired = p5.Vector.sub(target, this.pos)
    if(desired.mag() < 50) {
      desired.setMag(this.maxspeed)
    desired.mult(-1)
    var steer = p5.Vector.sub(desired, this.vel)
    steer.limit(this.maxforce)
    return steer
    
    } else {
    
      return createVector(0,0)
    }
    
  }
  
  arrive(target){
    var desired = p5.Vector.sub(target,this.pos)
    var d =  desired.mag()
    var speed = this.maxspeed
    if (d < 100){
      speed = map(d, 0, 100, 0 , this.maxspeed)
    }
    
    desired.setMag(speed)
    var steer = p5.Vector.sub(desired, this.vel)
    steer.limit(this.maxforce)
    return steer
  }
  
  applyForce(force) {
    this.acc.add(force)
  }
  
  show(i) {
    
    textFont(font)
    textSize(40)
    strokeWeight(this.r/4)
    fill(255)
    text('Happy Birthday', 150, 140)
    stroke(255-i,i*10,i)
    strokeWeight(this.r)
    point(this.pos.x, this.pos.y)
  }
}

