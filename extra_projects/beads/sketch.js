class Point{
  constructor(){
    this.x = random(width)
    this.y = random(height)
    this.size = 8
  }
  
  show(){
    fill(random(255),random(255),random(255))
    
    ellipse(this.x, this.y,this.size,this.size)
  }
  
  influence(mousex,mousey){
    let dx = mousex - this.x 
    let dy = mousey - this.y
    this.x += dx *0.005
    this.y += dx *0.005
  }
  
  drawline(prevpoint){
    

    line(this.x,this.y, prevpoint.x,prevpoint.y)
  }
}

let points = []
function setup() {
  createCanvas(400, 400);
  for(let i=0; i <50; ++i){
    points[i] =  new Point()
  }
}

function draw() {
  background(220);
  for (let i=0; i <50; ++i){
    if(random(50)<10 & i != 0){

      points[i].drawline(points[i-1])
    }
    points[i].influence(mouseX,mouseY)
    points[i].show()
  }
}
