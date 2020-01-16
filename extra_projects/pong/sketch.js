var scoreL = 0
var scoreR = 0

class Paddle {
    constructor(x,y){
        this.x = x
        this.y = y
    }

    show() {
        fill(255)
        rect(this.x,this.y, 25,100)
    }

    run() {
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



function setup(){
    createCanvas(600,400)
    puck =  new Puck()
    Lpaddle = new Paddle(10, height/2)
    Rpaddle = new Paddle(width - 40, height/2 )

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