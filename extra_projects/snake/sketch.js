
var foodx
var foody 

class snake {
    constructor(){
        this.pos = createVector(width/2, height/2)
        this.len = 3
    }

    display(){
        fill(255)
        for( let i =0; i < this.len;++ i){
            ellipse(this.pos.x- i*11, this.pos.y, 12,12)
        }
    }

    update(){
        this.pos.x += 1
    }

    checkEdges(){
        if(this.pos.x == width){
            this.pos.x = 0
        } else if(this.pos.x == 0) {
            this.pos.x = width
        }

        if(this.pos.y == height) {
            this.pos.y = 0
        } else if( this.pos.y == 0) {
            this.pos.y = height
        }  
    }

    run(){
        this.checkEdges()
        this.update()
        this.display()
    }
}

class food {
    constructor(){
        this.pos = createVector(foodx, foody)
        this.eaten = false
    }

    display(){
        fill (0,120,255)
        ellipse(this.pos.x, this.pos.y, 18,18)
    }
}


function setup(){
    createCanvas(400,400)

    foodx = random(width)
    foody = random(height)
    s = new snake()
    f = new food()
}

function draw(){
    background(0)
    s.run()
    
    f.display()
}