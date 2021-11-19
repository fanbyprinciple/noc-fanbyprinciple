function make2DArray(cols, rows){
    let arr = new Array(cols)
    for (let i=0; i< arr.length; i++){
      arr[i] = new Array(rows)
    }
    return arr
 }
 
 let grid
 let cols
 let rows 
 let resolution = 20
 
 
 function getActiveCells(grid){
   let sum = 0
   for(i=0; i<cols; ++i){
     for(j=0; j<rows; ++j){
       sum += grid[i][j]
     }
   }
   return sum
 }
 
 function mouseDragged(){
   
   let px = Math.floor(mouseX/resolution)
   let py = Math.floor(mouseY/resolution)
   
   grid[px][py]=1
   console.log(grid[px][py])
   
 }
 
 function setup() {
   createCanvas(600,400)
   frameRate(25)
   
   cols = Math.floor(width / resolution)
   rows = Math.floor(height/ resolution)
   
   // console.log(width,cols, rows)
   
   
   grid = make2DArray(cols, rows)
   for (let i=0; i< cols; i++){
     for(let j=0; j<rows; j++){
       grid[i][j] = floor(random(2))
     }
   }
   
   
 }
 
 function draw() {
   background(0);
   
   let next = make2DArray(cols,rows)
   
   
   
   for (let i=0; i< cols; i++){
     for(let j=0; j<rows; j++){
       
       let x = i * resolution
       let y = j * resolution
       stroke(255)
       if (grid[i][j] == 1){
         fill(getActiveCells(grid) + 120,0,getActiveCells(grid) + 200)
       } else {
         fill(0,51,255)
       }
       rect(x,y,resolution,resolution)
     }
   }
   
   for (let i=0; i<cols; i++){
     for(let j=0; j<rows; j++){
       
 //       if (i == 0 || i == cols-1 || j == 0 || j == rows-1){
 //         next[i][j] = grid[i][j]
 //       }
 //        else {
           //count live neighbhors
           let sum = 0
           let neighbhors = shiffCountN(grid, i, j)
 
           let state = grid[i][j]
 
 
           if (state == 0 && neighbhors == 3){
             next[i][j] = 1
           } else if (state == 1 && (neighbhors<2 || neighbhors >3)){
             next[i][j] = 0
           } else {
             next[i][j] = state
           }   
        }
       
     }
   // }
   
   grid = next
 }
 
 function countNeighbhors(grid,x, y){
   let sum = 0
   for (let i=-1; i<2; i++){
     for(let j=-1; j<2; j++){
       
       let ci = i
       let cj = j
       
       if (x+i > cols){
         ci = 0  
       } else if(x+i <0){
         ci = cols-1
       } 
       
       if (y+j > rows){
         cj = 0
       } else if (y+j <0){
         cj= rows-1
       }
       
     
       sum += grid[x+ci][y+cj]
     }
   }
   
   sum -= grid[x][y]
   return sum
 }
 
 function countN(grid, x, y){
    let sum = 0
   for (let i=-1; i<2; i++){
     for(let j=-1; j<2; j++){
       sum += grid[x+i][y+j]
     
     }}
   sum -= grid[x][y]
   return sum
 }
 
 function shiffCountN(grid, x, y){
     let sum = 0
     for (let i=-1; i<2; i++){
       for(let j=-1; j<2; j++){
         
         let col = (x+i+cols) %cols
         let row = (y+j + rows) %rows
         
         sum += grid[col][row]
 
       }}
     sum -= grid[x][y]
     return sum
 }