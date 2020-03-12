function make2Darray(){
    let arr = new Array(cols)
    for(let i=0; i < arr.length; i++){
        arr[i] = new Array(rows)
    }

    return arr
}

let grid
let cols
let rows 
let resolution = 10

function setup(){
    createCanvas(600, 600)
    cols = height/resolution
    rows = width/resolution

    grid = make2Darray(cols, rows)
    for(let i =0; i < cols; i++){
        for(let j=0; j < rows; j++){
            grid[i][j] = floor(random(2))
        }

    }
}

function draw(){
    background(0)

    for(let i=0; i < cols; ++i){
        for(let j=0; j<rows; ++j){
            fill (255 * grid[i][j])
            stroke (0)
            rect (i * resolution, j * resolution, resolution, resolution)
        }
    }

    let next = make2Darray(cols, rows)
    
    for(let i=0; i<cols; ++i){
        for(let j=0; j <rows; ++j){
            
            state = grid[i][j]
            if(i==0 || i == cols-1 || j == 0 || j == rows-1){
                next[i][j] = state
            } else {
                let sum = countNeighbhors(grid,i,j)

                if(state == 0 && sum  == 3){
                    next[i][j] = 1
                } else if (state == 1 && (sum < 2 || sum > 3)){
                    next[i][j] = 0
                } else {
                    next[i][j] = state
                }
            }
        
        }
    }

    grid = next

}

function countNeighbhors(grid,x,y){
    
    let sum = 0
    for (let i=-1; i<2; i++){
        for (let j=-1;j <2; j++){
            let col = (x + i + cols) % cols
            let row = (y + j + cols) % rows
            
            sum += grid[x +i][y +j]
        }
    }

    sum -= grid[x][y]
    return sum
}