var cells = []

function setup(){
    createCanvas(400,400)
    cell = new Cell(200,200,20)
    x=cells.push(cell)
}

function draw(){
    background(0)
    for (let i=0 ; i< cells.length; i++){
        cells[i].move()
        cells[i].show()
    }
    
}

function mousePressed(){
    for (var i=0; i<cells.length;++i){
       if(cells[i].clicked()) {
           
       }
    }
    
}

