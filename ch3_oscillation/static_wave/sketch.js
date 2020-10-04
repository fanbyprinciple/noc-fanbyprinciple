let angle =0
let angleVel = 0.2
let amplitude = 100

function setup() {
    createCanvas(400,200)
    background(200)

        
    smooth ()

    stroke (0)
    strokeWeight (2)
    noFill ()

    beginShape ()
    for (let x =0; x <=width ;x+=5) {
        let y = map(sin(angle),-1,1,0,height)
        console.log(x,y)
        vertex (x,y)
        angle += angleVel
    } 
    endShape()

}


function draw() {
    angle = 0
    for (let x =0; x<=width ;x+= 5) {
        let y = map(sin(angle),-1,1,0,height)
        stroke(0,50,150)
        noFill ()
        ellipse (x,y,48,48)
        angle += angleVel
    }

}

