class Ray {
  constructor(c){
    this.color = c
    this.x = random(width)
    this.y = random(height)
    this.xspeed = 1
    this.yspeed = 1
    
  }
  
  show(){
    noStroke()
    fill(random([this.color, 'yellow', 'green']))
    ellipse(this.x, this.y, 10, 10)
  }
  
  moveCircle() {
    
  }
  
  move(){
    this.x += this.xspeed
    this.y += this.yspeed
  }
  
  checkEdge() {
    if (this.x < 0) {
      this.xspeed *= -1
    } 
    
    else if(this.x > width){
      //this.x = 0
      this.xspeed *= -1
    }
    
    else if (this.y < 0) {
      //this.y = height
      this.yspeed *= -1
    } 
    
    else if(this.y > height){
      //this.y = 0
      this.yspeed *= -1
    }
    
    
  }
  
  run(){
    this.show()
    this.move()
    this.checkEdge()
    
  }
  
  
}

var b = []
var r
var SIZE = 1

function setup() {
  createCanvas(400, 400);
  background(51)
  for(let i=0; i < SIZE; ++i){
    b[i] = new Ray(0,0,0,100)
  }
  
  //r = new Ray('magenta',100)
  
  
}

function draw() {
  background(51)
  for(let i=0; i < SIZE ; ++i){
    b[i].run()
  }
  
  //r.run()
}
