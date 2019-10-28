var s
var f

class snake {
    constructor(){
        this.pos = createVector(width/2, height/2)
        this.len = 3
        this.vel = createVector(0,0)

    }

    display(){

        for( let i =0; i < this.len;++ i){
            if(i ==0){ 
                fill(240,230,120)
            } else {
                fill(120, 210, 120)
            }
            
            ellipse(this.pos.x- i*15, this.pos.y, 16,16)
        }
    }

    update(){
        //console.log(this.pos)
        this.pos.add(this.vel)
    }

    eats(food){
        if (this.pos.x > food.pos.x && this.pos.x < food.pos.x + food.size && this.pos.y > food.pos.x && this.pos.y < food.pos.y + food.size) {
            console.log("eaten")  
            // this.len += 1
            // food.eaten = true
            // f = new food()  
        }
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

    run(food){
        this.checkEdges()
        this.update()
        this.eats(food)
        this.display()
    }
}

class food {
    constructor(){
        this.pos = createVector(random(width), random(height))
        this.eaten = false
        this.size = 20
    }

    display(){
        fill (0,120,255)

        rect(this.pos.x, this.pos.y, this.size, this.size)
    }
}


function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        console.log("Left arrow")
        s.vel.x = -1
    } else if (keyCode === RIGHT_ARROW) {
        s.vel.x = 1
    } else if (keyCode === UP_ARROW) {
        s.vel.y = -1
    } else if (keyCode === DOWN_ARROW) {
        s.vel.y = 1
    }
}


function setup(){
    createCanvas(600,600)

    s = new snake()
    f = new food()
}

function draw(){
    background(0)
    s.run(f)
    if(f.eaten == false) {
        f.display()
    }
}