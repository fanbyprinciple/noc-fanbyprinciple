var location
var vel 

function setup(){
    createCanvas(200,200)
    loc = createVector(100,100)
    vel = createVector(2.5,5)


}

function draw () {
    background(255)
    loc.add(vel)

    if (loc.x + 10>width || loc.x - 5<0){
        vel.x *= -1
    }
    
    if (loc.y + 10> height ||loc.y -5<0){
        vel.y *= -1
    }

    stroke (0)
    fill (175)
    ellipse (loc.x, loc.y, 16, 16)
}