

class Grid {
  constructor(x,y) {
    this.x = x
    this.y = y
    this.index = generate_index(x,y)
    this.active = false
    this.yspeed = 1
    this.transition = false
    this.passive = false

  }
  
  show(){
    if(this.passive || this.active){
      fill(255,0, 120)
    } else {
      fill(255)
    }
    
    rect(this.x, this.y, size, size)
  }
    
  fall(){
    if(this.active){
      let current_square = generate_index(this.x, this.y)
      let next_square = generate_index(this.x, this.y+size)
      
      if(this.y + size >= height || grid[next_square].active){
        this.active = false
        this.passive = true

      }
      else {
        if(this.transition){
          this.active = false
          grid[next_square].active = true   
          this.transition -= 1
        } 
      }
    }
  } 
  
}

function keyPressed() {
  //console.log("keyPressed")
  if(keyCode == LEFT_ARROW){
    for (let i =0; i<grid.length; ++i){
      if(grid[i].active){
        grid[i].x -=size
      }
    }
  } else if (keyCode== RIGHT_ARROW ){
    for (let i =0; i<grid.length; ++i){
      if(grid[i].active){
        grid[i].x +=size
      }
    }
  }
}

let size =25
let grid = []

function generate_index(x,y){
  index = ((x/size) * 16) + (y/size )
  //console.log(x/size, y/size)
  return index
}

function generateBlock(){

  for(j=6; j<10; ++j){
    for(i=16*j; i<16*j+5;++i){
      grid[i].active =true
      grid[i].transition = 1
    }
  }
  
  
  
  
}

function setup() {
  createCanvas(400, 400);
  
  
  for (let x =0; x<width; x += size){
    for (let y=0; y <height; y += size){
      //console.log(x,y)
      grid.push(new Grid(x,y))
    }
  }
  
  generateBlock()
  
}

function draw() {
   background(255)
   frameRate(10)  
   for (let i =0; i<grid.length; ++i){
     grid[i].fall()
     grid[i].show()
     if(grid[i].active){
       grid[i].transition = 1
     }
     
     
   }
  
}