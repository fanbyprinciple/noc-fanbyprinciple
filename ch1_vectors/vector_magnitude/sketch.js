function magnitude (){
    return sqrt (x*x + y*y)
    
}  
var color 
function setup() {
    createCanvas(200,200)
    color =255
}
function draw() {

    background(color,0,255)
    mousee = createVector(mouseX,mouseY)
    centerr = createVector(width/2,height/2)

    m = mousee.mag(width/2,height/2)
    fill(0)
    rect (0,0,m,10)

    color = map(m,0,283,0,255)

    translate(width/2,height/2)
    line (0,0,mousee.x,mousee.y)
}