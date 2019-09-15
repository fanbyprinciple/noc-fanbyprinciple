var s

function setup() {

    createCanvas(400,400)
    s = new Sun(width/2,height/2,40)
}


function keyPressed() {
    if(keyCode == UP_ARROW){
        console.log("in main")
        s.applyThrust()
    }
}

function draw() {
    background(0)
    let warpspeed = createVector(0,0.01)
    s.applyForce(warpspeed)
    s.run()
    
}