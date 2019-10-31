class Box{

    constructor(x,y,z, len){
        this.pos = createVector(x,y,z)
        this.len = len
    }

    show(rx, ry){
        fill (255)
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