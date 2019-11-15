var cell

function setup(){
    createCanvas(400,400)
    cell = new Cell(200,200,20)
}

function draw(){
    background(0)
    cell.move()
    cell.show()
}


