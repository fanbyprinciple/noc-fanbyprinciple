function setup() {
    createCanvas(200,200)

}

function draw () {
    mousee = createVector(mouseX,mouseY)
    vectorr = createVector(width/2,height/2)

    mousee.sub(vectorr)

    translate(width/2, height/2)
    line (0,0,mousee.x,mousee.y)
}