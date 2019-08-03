var acc_global_x = 0
var acc_global_y = 0

function keyPressed() {
    if (keyCode === UP_ARROW) {
        acc_global_y += 0.001
        background(220)
    } else if (keyCode === DOWN_ARROW) {
        acc_global_y -= 0.001
        background(120)
    } else if (keyCode == RIGHT_ARROW) {
        acc_global_x += 0.001
    } else if (keyCode === LEFT_ARROW) {
        acc_global_x -= 0.001
    }
}



class Ball {
    constructor() {
        this.loc =  createVector(width/2, height/2) 
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)
    }

    display () {
        stroke (0)
        fill (175)
        ellipse(this.loc.x,this.loc.y,24,24)
    }

    checkEdges() {
        if (this.loc.x < 0) {
            this.loc.x = width
        } else if (this.loc.x > width) {
            this.loc.x = 0
        }

        if (this.loc.y < 0) {
            this.loc.y = height
        } else if (this.loc.y > height) {
            this.loc.y = 0
        }

    }


    update () {
        this.acc.x = acc_global_x 
        this.acc.y = acc_global_y
        this.vel.add(this.acc)
        this.loc.add(this.vel)
    }
}

function setup() {
    createCanvas(400,400)
    ball = new Ball()
    
}
function draw() {
    ball.update()
    ball.checkEdges()
    ball.display()
}