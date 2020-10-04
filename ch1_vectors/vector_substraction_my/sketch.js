var mouseLocation

function setup() {
    createCanvas(600,600)
    mouseLocation = createVector(0,0)
}

function draw() {
    mouseLocation.x = mouseX
    mouseLocation.y = mouseY
    stroke (mouseX/255*(mouseY/255))
    line (width/2,height/2,mouseX,mouseY)
}
