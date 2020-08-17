class Square {
  constructor(i) {
    //console.log(i)
    this.x = i[0]
    this.y = i[1]
    this.yspeed = 0.05
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
  
  checkBlock(this_index){
    
    if(this.x > width){
      this.x = 0
    } else if(this.x <0) {
      this.x = width - size
    }
    
    let new_squares = squares
    //new_squares = new_squares.pop(this)
    for(let i=0; i< new_squares.length; ++i){
      if(i != this_index){
        if (this.y == new_squares[i].y && this.x == new_squares[i].x){
         console.log("here")
         this.yspeed = 0
         this.y = new_squares[i].y -size

       }
      }
    }
  } // checkblock
  
}



function clearLine() {
  all_filled = False
  for(let i=0; i<width; i+=size){
    for(let j=0; j < squares.length; ++j){
      // TODO
    }
  }
} 


function keyPressed() {
  //console.log("keyPressed")
  if(keyCode == LEFT_ARROW){
    for(let i=0; i< squares.length; ++i){
      squares[i].x -= size
  
    }
  } else if (keyCode== RIGHT_ARROW ){
    for(let i=0; i< squares.length; ++i){
      squares[i].x += size
    
    }
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
  
  for(let i=0; i < 100; ++i){
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
    squares[i].checkBlock(i)
  }
  
}