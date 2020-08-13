class Square {
  constructor(i) {
    //console.log(i)
    this.x = i[0]
    this.y = i[1]
    this.yspeed = 0.25
  }
  
  show() {
    fill(255,0,120)
    rect(this.x, this.y, size,size)
  }
  
  fall() {
    this.y = this.y + this.yspeed  * size
    if(this.y > height- size){
      
      this.y = indexes[indexes.length -1][1]
      this.yspeed = 0
    }
  }
  checkBlock(){
    
  }
  
  
  
}

let squares = []
let indexes = []
let size =25

function setup() {
  createCanvas(400, 400);
  
  for (let x =0; x<width; x += size){
    for (let y=0; y <height; y += size){
      indexes.push([x,y])
      stroke(0)
      strokeWeight(1)
      line(x,0,x,height)
      
      line(0,y,width, y)
    }
  }
  
  for(let i=0; i < 10; ++i){
    squares.push(new Square(random(indexes)))
  }
  
  //console.log(random(indexes))
  
}

function draw() {
   background(255)
  
   for (let i =0; i<indexes.length; i += 1){
      stroke(0)
      strokeWeight(1)
      let s = indexes[i][0] + " " + indexes[i][1]
      // fill(50,100)
      // textSize(8)
      // text(s,indexes[i][0] ,indexes[i][1])
      // // console.log(indexes[i])
      line(indexes[i][0],0,indexes[i][0],height)
      line(0,indexes[i][1],width, indexes[i][1])
    
  }
  
  for (let i =0; i <squares.length; ++i){
    squares[i].show()
    squares[i].fall()
  }
  
}