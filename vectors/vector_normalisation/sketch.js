function setup () {
    createCanvas(600,600)
}
function draw () {
    background(255)

    mousee = createVector (mouseX,mouseY)

    mousee.normalize()
    mousee.mult(50)

    //line(width/2,height/2,width,height/2 )
    
    line (width/2,height/2,mousee.x,mousee.y)
}