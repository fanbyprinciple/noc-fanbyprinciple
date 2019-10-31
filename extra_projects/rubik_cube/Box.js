class Box{

    constructor(x,y,z, len,colour){
        this.pos = createVector(x,y,z)
        this.len = len
        this.colour = colour
    }

    show(rx, ry){
        fill (this.colour)
        stroke (0)
        strokeWeight(8)
        push ()
        rotateY(rx);
        rotateX(ry);
        translate(this.pos.x, this.pos.y, this.pos.z)
        
  
        box (len)
        pop ()
    }


}