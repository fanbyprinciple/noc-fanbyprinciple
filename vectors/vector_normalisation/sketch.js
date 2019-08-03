function setup () {
    createCanvas(600,600)
}
function draw () {
    background(220)

    mousee = createVector (mouseX,mouseY)

    mousee.normalize()
    mousee.mult(50)

    //line(width/2,height/2,width,height/2 )
    
    line (0,0,mousee.x,mousee.y)
}