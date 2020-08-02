var rows
var cols
var w =40
var current

grid = []

function setup() {
    createCanvas(400, 400)
    cols = floor(width/w)
    rows = floor(height/w)

    for (var j=0; j< rows; j++){
        for (var i=0; i<rows; i++){
            var cell = new Cell(i,j)
            grid.push(cell)
        }
    }

    current = grid[35]
    
    
}

function draw() {
    background(51)
    for (var i=0; i< grid.length; i++){
        grid[i].show()
    }
    current.visited = true
    var next =  current.checkNeighbhors()
    if (next){
        next.visited = true
        current  = next
    }
}
function index(i,j){
    if(i<0 || j<0 || i>cols-1 || j>rows-1){
        return -1
    }
    //console.log(i,j)
    return i + j * width;
}

function Cell(i, j){
    this.i = i;
    this.j = j;
    this.walls = [true,true,true,true]

    this.checkNeighbhors = function() {
        var neighbors = []

        var top = grid[index(i, j-1)]
        var right = grid[index(i+1, j)]
        var left = grid[index(i-1, j)]
        var bottom = grid[index(i, j+1)]

        //console.log(top,right, left, bottom)

        if (top && !top.visited){
            console.log("t")
            neighbors.push(top);
        }

        if (right && !right.visited){
            console.log("r")
            neighbors.push(right)
        }

        if(left && !left.visited){
            console.log("l")
            neighbors.push(left)
        }

        if(bottom && !bottom.visited){
            console.log("b")
            neighbors.push(bottom)
        }

        if (neighbors.length >0){
            var r = floor(random(0, neighbors.length))
            console.log(neighbors.length)
            return neighbors[r]
        } else {
           return undefined 
        }


    }

    this.show = function() {
        var x = this.i * w;
        var y = this.j * w;
        stroke (255)
        if (this.walls[0]){
            line (x, y, x+w, y) // TOP
        }
        if (this.walls[1]){
            line(x, y+w,x+w, y+w) // BOTTOM 
        }
        
        if(this.walls[2]){
            line(x, y, x, y+ w) // LEFT 
        }

        if(this.walls[3]){
            line(x+w, y, x+w, y+ w) // RIGHT
        }

        if(this.visited){    
            fill(255,0,255,100)
            rect (x,y,w,w);
        }
                
    }
    
}