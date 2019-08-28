class Wave {
    constructor(startAngle, angVel) {
        this.ang = startAngle
        this.angVel = angVel

    }

    display() {
        for (let x=0; x<=innerWidth;x+=24) {
            let y = map(sin(this.ang),-1,1,0,height)
            stroke (0)
            fill (0,50,50)
            ellipse(x,y,48,48)
            this.ang += this.angVel

        }
    }
}

var wave
function setup() {
    createCanvas(400,400)
    wave = new Wave(0,0.1)
}


function draw() {
    background(0)
    wave.display()
    

}