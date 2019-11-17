class Cell{
    constructor(pos, r,c) {
        if (pos){
            this.pos = pos.copy()
        } else {
            this.pos =  createVector(random(width), random(height))
        }

        this.r = r || 60
        this.c = c || color(random(100,255),0,random(100,255), 100)
    }

    clicked(x,y){
        var d = dist(this.pos.x, this.pos.y, x, y)
        if (d < this.r) {
            return true
        } else {
            return false
        }
    }

    mitosis() {
        let cellA = new Cell(this.pos, this.r/2, this.c)

        return cellA
    }

    show(){
        noStroke()
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