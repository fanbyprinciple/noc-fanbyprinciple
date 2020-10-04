var ship

class Spaceship {
    constructor(x,y,){
        this.loc = createVector(x,y)
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)
        this.angle = PI

    }

    update() {
        this.vel.add(this.acc)
        this.loc.add(this.vel)
        this.acc.mult(0)
        
    }

    display() {
        push ()
        translate(this.loc.x,this.loc.y)
        rotate (this.angle +PI)
        triangle(0,0,20,20,-20,20)
        pop ()
    }

    checkedges() {
        if(this.loc.x < 0) {
            this.loc.x = width
        }
        if (this.loc.x > width) {
            this.loc.x = 0
        }

        if(this.loc.y < 0) {
            this.loc.y = height
        }

        if(this.loc.y > height) {
            this.loc.y = 0
        }

    }

}

function keyPressed() {
    if(keyCode == LEFT_ARROW) {
        ship.angle += 1
    }
    else if (keyCode == RIGHT_ARROW) {
        ship.angle += -1
    }
    if (keyCode == UP_ARROW) { 
        // code to add thrust in direction of rotation
        
        let thrust =  createVector(0,0)
        thrust.x = 0.1 * cos (ship.angle + PI/2)
        thrust.y = 0.1 * sin (ship.angle + PI/2)
        console.log(thrust)
        ship.acc.add(thrust)
        
        
    
    }
}

function setup() {
    createCanvas(300,300)
    background(0)
    ship = new Spaceship(width/2,height/2)
}

function draw() {
    background(0)
    
    ship.checkedges()
    ship.update()
    ship.display()
}