function setup() {
    createCanvas(200,200)
}

function draw() {
    background (0)

    mousee= createVector(mouseX,mouseY)
    centerr= createVector(width/2,height/2)
    mousee.sub(centerr)
    mousee.mult(0.5)

    translate(width/2,height/2)
    stroke (255)
    line (0,0,mousee.x,mousee.y )

}