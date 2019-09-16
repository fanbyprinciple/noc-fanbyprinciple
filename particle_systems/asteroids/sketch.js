var sun
var thrust
var g

function setup() {

    
    createCanvas(400,400)
    sun = new Sun(width/2,height/2,40)
    console.log(sun)
    thrust = new Globules(sun.loc.x,sun.loc.y)
    // g= new Globule(width/2,height/2)
    // console.log(g)

    // problem cant create a Globule
    for(i=0; i <20; ++i){
        thrust.addGlobules()
    }

}


function keyPressed() {
    if(keyCode == UP_ARROW){
        sun.applyThrust()
    }
}

function draw() {

    
    background(255)

    thrust.run()
    
    //thrust.generateThrust()
    let warpspeed = createVector(0,0.01)
    //sun.applyForce(warpspeed)
    //sun.run()
    //g.run()
}