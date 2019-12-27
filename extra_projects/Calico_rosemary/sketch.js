class Ray {
  constructor(c){
    this.color = c
    console.log(this.color)
    this.x = random(width)
    this.y = random(height)
  }
  
  show(){
    noStroke()
    fill(random([this.color, 'magenta']))
    ellipse(this.x, this.y, 10, 10)
  }
  
  moveCircle() {
    this.x += 1
    let tempx = this.x
    let tempy =sqrt(100000 - (int(this.x) * int(this.x)))  
    //this.y +=  5 * random([-1,1,1,1,1,1])
    console.log(this.x,(100000 - (this.x * this.x))  )
    this.y = tempy 
  }
  
  move(){
    this.x += 1
    this.y += 1
  }
  
  checkEdge() {
    if (this.x < 0) {
      this.x = width
    } 
    
    if(this.x > width){
      this.x = 0
    }
    
    if (this.y < 0) {
      this.y = height
    } 
    
    if(this.y > height){
      this.y = 0
    }
    
    
  }
  
  run(){
    this.show()
    this.move()
    
  }
  
  
}

var b = []
var r
var SIZE = 100

function setup() {
  createCanvas(400, 400);
  background(51)
  for(let i=0; i < SIZE; ++i){
    b[i] = new Ray(0,0,0,100)
  }
  
  //r = new Ray('magenta',100)
  
  
}

function draw() {

  for(let i=0; i < SIZE ; ++i){
    b[i].run()
  }
  
  //r.run()
}