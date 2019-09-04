class Box {
    constructor(x,y,size) {
        this.loc = createVector(x,y)
        this.size = size
        this.vel =  createVector(0,0)

    }

    display() {
        fill(51)
        rect(this.loc.x,this.loc.y,this.size,this.size)
    }

    move() {
     //   this.x = 
    }
}



var box
function setup() {
    createCanvas(100,100)
    box = new Box(width/2,height/2,20)
}

function draw() {
    box.display()
    line (0,height,width,0)
}