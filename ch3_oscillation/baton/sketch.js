function setup() {
    createCanvas(200,200)
    
}

function draw() {
    background(255)
    
    fill (0)
    translate(25,25)
    rotate(2* PI * (60/360))
    ellipse(20,20,10,10)
    ellipse(30,30,10,10)
    line (20,20,30,30)
    //console.log("rotating")
}