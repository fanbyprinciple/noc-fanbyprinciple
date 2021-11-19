class Blird {
  
  constructor(x,y){
    this.position = createVector(x,y)
    this.velocity = createVector(random(-1,1), random(-1,1))
    this.acceleration = createVector(0,0)
    this.r = 3.0
    this.maxspeed = 3
    this.maxforce = 0.05
  }
  
  run(blirds){
    this.flock(blirds)
    this.update()
    this.borders()
    this.render()
  }
  
  applyForce(force){
    this.acceleration.add(force)
  }
  
  flock(blirds){
    let sep = this.separate(blirds)
    let ali = this.align(blirds)
    let coh = this.cohesion(blirds)
    
    sep.mult(1.5)
    ali.mult(1.0)
    coh.mult(1.0)
    
    this.applyForce(sep)
    this.applyForce(ali)
    this.applyForce(coh)
  }
  
  update(){
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxspeed)
    this.position.add(this.velocity)
    this.acceleration.mult(0)
  }
  
  seek(target){
    let desired = p5.Vector.sub(target, this.position)
    desired.normalize()
    desired.mult(this.maxspeed)
    let steer = p5.Vector.sub(desired, this.velocity)
    steer.limit(this.maxforce)
    return steer
  }

  render(){
    let theta = this.velocity.heading() + radians(90)
    fill(127)
    stroke(200)
    push()
    translate(this.position.x, this.position.y)
    rotate(theta)
    beginShape()
    vertex(0, -this.r * 2)
    vertex(-this.r, this.r * 2)
    vertex(this.r, this.r *2)
    endShape(CLOSE)
    pop()
  }
  
  borders(){
    if (this.position.x < -this.r)  this.position.x = width + this.r;
  if (this.position.y < -this.r)  this.position.y = height + this.r;
  if (this.position.x > width + this.r) this.position.x = -this.r;
  if (this.position.y > height + this.r) this.position.y = -this.r;
  }
  
  separate(blirds){
    let desiredseparation= 25.0
    let steer = createVector(0,0)
    let count = 0
    
    for (let i=0; i< blirds.length; ++i){
      let d = p5.Vector.dist(this.position, blirds[i].position)
      
      if ((d>0) && (d<desiredseparation)){
        let diff = p5.Vector.sub(this.position, blirds[i].position)
        diff.normalize()
        diff.div(d)
        steer.add(diff)
        count++
      }
    }
    
    if(count>0){
      steer.div(count)
    }
    
    if (steer.mag()>0){
      steer.normalize()
      steer.mult(this.maxspeed)
      steer.sub(this.velocity)
      steer.limit(this.maxforce)
    }
    
    return steer
  }
  
  
  align(blirds){
    let neighbhordist = 50.0
    let sum = createVector(0,0)
    let count = 0
    
    for (let i=0; i< blirds.length; ++i){
      let d = p5.Vector.dist(this.position, blirds[i].position)
      
      if ((d>0) && (d<neighbhordist)){
        
        sum.add(blirds[i].velocity)
        count ++
      }
    }
    
    if(count>0){
      sum.div(count)
      sum.normalize()
      sum.mult(this.maxspeed)
      let steer = p5.Vector.sub(sum, this.velocity)
      steer.limit(this.maxforce)
      return steer
    } else {
      return createVector(0,0)
    }
  }
  
  cohesion(blirds){
    let neighbhordist = 50
    let sum = createVector(0,0)
    let count = 0
    for(let i=0; i< blirds.length; i++){
      let d = p5.Vector.dist(this.position, blirds[i].position)
      if ((d>0) && (d<neighbhordist)){
        sum.add(blirds[i].position)
        count++
      }
    }
    
    if (count>0){
      sum.div(count)
      return this.seek(sum)
    } else {
      return createVector(0,0)
    }
  }
  
  
}