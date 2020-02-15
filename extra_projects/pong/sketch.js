var scoreL = 0
var scoreR = 0

class Paddle {
    constructor(x,y){
        this.x = x
        this.y = y
        this.vel = 0
    }

    update() {
        this.y += this.vel
    }

    checkEdges() {
        if(this.y <0 || this.y + 100 >height) {
            this.vel =0
        }
    }

    checkCollision() {
        if (puck.x > this.x && puck.y > this.y && puck.y < this.y + 80){
            puck.yvel *= 1
            puck.xvel *= -1
        }
    }

    show() {
        fill(255)
        rect(this.x,this.y, 25,100)
    }

    run() {
        this.update()
        this.checkEdges()
        this.checkCollision()
        this.show()
    }

    
}



class Puck {
    constructor(){
        this.reset()
        
    }

    update() {
        this.x += this.xvel
        this.y += this.yvel 
    }

    reset() {
        this.x = width/2
        this.y = height/2

        this.xdir = random([1,-1])
        this.xvel = 5 * this.xdir

        this.ydir = random([1,-1])
        this.yvel = 5 * this.ydir

    }


    checkEdges(){
        if (this.y < 0 || this.y >height) {
            this.yvel = -1 * this.yvel
        } 

        if(this.x < 0){
            scoreR += 1
            this.reset()
        }

        if(this.x > width){
            scoreL += 1
            this.reset()
        }


    }

    show() {
        fill(255)
        ellipse(this.x,this.y, 25,25)
    }

    run() {
        this.update()
        this.checkEdges()
        this.show()
    }
}

var puck 
var Rpaddle
var Lpaddle

function keyPressed(){
    if(key == 'w'){
        Lpaddle.vel = -2
    }
    if (key == 's' ){
        Lpaddle.vel = 2
    }
    
    if(keyCode == UP_ARROW ){
        Rpaddle.vel = -2
    } 

    if(keyCode == DOWN_ARROW){
        Rpaddle.vel = 2
    }
}

function setup(){
    createCanvas(600,400)
    puck =  new Puck()
    Lpaddle = new Paddle(10, height/2)
    Rpaddle = new Paddle(width - 35, height/2 )

}

function draw(){
    background(0)
    puck.run()
    Lpaddle.run()
    Rpaddle.run()

    fill(255)
    textSize(28)
    text(scoreL, 10,10,50,50)
    text(scoreR, width-30,10,50,50)
}