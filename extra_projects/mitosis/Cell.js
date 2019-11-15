class Cell{
    constructor(x,y, r) {
        this.pos = createVector(x,y)
        this.r = 20
    }

    show(){
        fill (0, 34, 67)
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r * 2)
    }

    move(){
        this.pos.x += random (-0.1,0.1)
        this.pos.y += random (-0.1,-0.1)
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