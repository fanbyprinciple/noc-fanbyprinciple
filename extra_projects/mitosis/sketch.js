var cells = []

function setup(){
    createCanvas(700,700)
    cell = new Cell(createVector(random(width), random(height)), 60, color(random(100,255),0, random(100,255), 100))
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
    for (var i=cells.length-1; i > -1;--i){
       if(cells[i].clicked(mouseX, mouseY)) {
           let cellA = cells[i].mitosis()
           let cellB = cells[i].mitosis()
           cells.push(cellA)
           cells.push(cellB)
            console.log("Clicked !")
       }
    }
    
}

