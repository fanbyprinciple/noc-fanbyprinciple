class Spring {
    
    constructor(length,k,x,y){
        this.anchor = createVector(width/2,0)
        this.loc = createVector(x,y)
        this.restLength = length
        this.k = k
    }

    connectBob(b) {
        let force = this.loc.sub(this.anchor)
        let d = force.mag()
        let stretch = d - this.restLength


        force.normalize()
        force.mult(-1 * this.k * stretch)

        b.applyForce
        
    }

    applyForce(){}

    display() {
        fill (100)
        rectMode(CENTER)
        rect(anchor.x,anchor.y,10,10)
    }

    displayline(b) {
        stroke (255)
        line (b.location.x,b.location.y,anchor.x,anchor.y)
    }
}


function draw(){
    let gravity = createVector(0,1)

}