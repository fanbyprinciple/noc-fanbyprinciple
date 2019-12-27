class Box{
    constructor(x,y,w,h){
        
        this.w = w
        this.h = h

        this.body = Matter.Bodies.rectangle(x,y,w,h)
        Matter.World.add(world, this.body)
    }

    show() {
        const pos = this.body.position
        const angle = this.body.angle

        push () 
        translate(pos.x, pos.y)
        rotate(angle)
        fill(51)
        rect (pos.x,pos.y, this.w, this.h)
        pop ()
    }
}