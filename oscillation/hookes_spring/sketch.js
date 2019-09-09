



class Spring {
    constructor(l){
        this.anchor = createVector(width/2,0)
        this.restLength = l
        this.loc =createVector(this.anchor.x,this.restLength)
        
        this.k = 0.01
         
        
    }

    connect(bob) {
    
            let force = p5.Vector.sub(bob.loc,this.anchor)
            //print(force.mag())
            this.loc = bob.loc
            this.currentlength = force.mag()
            //print("length: ",this.currentLength)
            let x = this.restLength - this.currentlength
            force.normalize()
            //print(x)
            force.mult(1 * this.k  * x)
            bob.applyForce(force)
    }
    
    display() {
        line (this.anchor.x, this.anchor.y, this.loc.x, this.loc.y)
    }


}

class Bob {
    constructor(x,y,size) {
        this.loc = createVector(x,y)
        this.size = size
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)
    }

    display() {
        fill (51)
        ellipse(this.loc.x,this.loc.y, this.size,this.size)
    }

    applyForce(force) {
        this.acc.add(force)
        this.vel.add(this.acc)
        this.loc.add(this.vel)
        this.acc.mult(0)
    }
}

let bob
let spring

function bobMagnet(bob){
    if(mouseX < bob.loc.x +25/2 && mouseX > bob.loc.x -25/2 && mouseY < bob.loc.x +25/2 && mouseY > bob.loc.y -25/2){
        console.log("inside")
        bob.loc.x = mouseX
        bob.loc.y = mouseY
    }
}

function setup () {
    createCanvas(400,400 )
    bob = new Bob(width/2,height/2,25)
    spring = new Spring(100)
}

function draw() {
    background(120)
    let gravity = createVector(0,0.001)
    bob.applyForce(gravity)
    
    spring.connect(bob)
    
    bobMagnet(bob)
    spring.display()
    bob.display()
    
}

// class Spring {
    
//     constructor(length,k,x,y){
//         this.anchor = createVector(width/2,0)
//         this.loc = createVector(x,y)
//         this.restLength = length
//         this.k = k
//     }

//     connectBob(b) {
//         let force = this.loc.sub(this.anchor)
//         let d = force.mag()
//         let stretch = d - this.restLength


//         force.normalize()
//         force.mult(-1 * this.k * stretch)

//         b.applyForce
        
//     }

//     applyForce(){}

//     display() {
//         fill (100)
//         rectMode(CENTER)
//         rect(anchor.x,anchor.y,10,10)
//     }

//     displayline(b) {
//         stroke (255)
//         line (b.location.x,b.location.y,anchor.x,anchor.y)
//     }
// }

