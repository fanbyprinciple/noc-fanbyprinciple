let sun

function setup () {
    createCanvas(600,600)
    sun = new Planet(100,0, 1)
    sun.spawnMoons(5)
}

function draw(){
    background(0)
    translate(width/2, height/2)
    sun.show()
    sun.orbit()
} 