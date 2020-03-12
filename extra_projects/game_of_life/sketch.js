function make2DArray(cols, rows) {
  let arr = new Array(cols)
  for (let i=0; i<  arr.length; ++i){
    arr[i] = new Array(rows)
  }
  return arr
}

let grid
let cols
let rows 
let resolution = 40

function setup() {
  createCanvas(400,400)
  cols = width/resolution
  rows = height/resolution
  grid = make2DArray(rows,cols)
  for(let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
      grid[i][j] = floor(random(2))
    }
  }
  //console.table(grid)
}

function draw() {
  background(0);
  
  
  
  for(let i=0; i<cols; ++i){
    for(let j=0; j<rows; ++j){
      let x = i * resolution
      let y = j * resolution
      if(grid[i][j] ==1){
        fill(255)
        stroke(0)
        
        rect(x,y,resolution-1, resolution-1)
      }
    }
  }
  
  let next = make2DArray(cols, rows)
  
  for(let i=0; i <cols; ++i){
    for(let j=0; j <rows; ++j){
      
      if(i==0 || i ==cols-1 || j==0 || j==rows -1){
        next[i][j] = grid[i][j]  
      } else {
      
      let neighbhors = countN(grid, i,j)
      let state = grid[i][j]
      
      if(state==0 && neighbhors ==3){
        next[i][j] = 1
      } else if(state ==1 && (neighbhors <2 || neighbhors>3)){
        next[i][j] = 0
      } else {
        next[i][j] = state
      }
      
      
      
      // sum += grid[i-1][j-1]
      // sum += grid[i][j-1]
      // sum += grid[i+1][j]
      // sum += grid[i+1][j+1]
      // sum += grid[i][j+1]
      // sum += grid[i-1][j]
      // sum += grid[i-1][j+1]
      // sum += grid[i+1][j-1]
      
      
    }
  }
  }
  grid = next
}


function countN(grid,x,y){
  let sum =0
  for(let i=-1; i<2; i++){
    for(let j=-1; j<2; j++){
      sum += grid[x+i][y+j]
    }
  }
  
  sum -= grid[x][y]
  
  return sum
}