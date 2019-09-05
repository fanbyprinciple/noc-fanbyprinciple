class Box {
    constructor(x,y,size,angle) {
        this.loc = createVector(x,y)
        this.size = size
        this.vel =  createVector(0,0)
        this.angle = angle

    }

    display() {
        push()
        rectMode(CENTER)
        translate(-94,-94)
        rotate (this.angle)
        fill(51)

    
        rect(this.loc.x,this.loc.y,this.size,this.size)
        pop()
    }

    move() {
        let gravity = createVector(0,1 * sin (this.angle))
        this.vel.add(gravity)
        this.loc.add(this.vel)
        this.vel.mult(0)


    }
}

function drawLine(angle) {
    push()
    translate(width/2,height/2)
    rotate(PI/2)
    line(width,height,0,0)
    line(-width,-height,width,height)
    pop()
}

var boxy
function setup() {

    createCanvas(400,400)
    boxy = new Box(width,0,30,PI/4)
}

function draw() {
    background(255)
    boxy.display()
    drawLine()
    boxy.move()
    //line (0,height,width,0)
}