class Cell{
    constructor() {
        this.pos = createVector(random(width),random(height))
        this.r = 20
        this.c = color(random(255), 0,  random(255))
    }

    clicked(){
        
    }

    show(){
        fill(this.c)
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r * 2)
    }

    move(){
        this.vel = p5.Vector.random2D()
        this.pos.add(this.vel)
    }

    checkEdges(){
        if( this.pos.x < 0 ){
            this.pos.x = width
        }

        if(this.pos.x > width){
            this.pos.x = 0
        }

        if (this.pos.y >height) {
            this.pos.y = 0
        }

        if (this.pos.y < 0){
            this.pos.y = height
        }
    }

}