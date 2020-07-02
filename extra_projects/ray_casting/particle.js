class Particle{
    constructor(){
        this.pos = createVector(width/2, height/2)
        this.rays = []
        for (let i=0; i < 360; i +=4){
            this.rays.push(new Ray(this.pos, radians(i)))
        }
    }

    show() {
        fill(255)
        ellipse(this.pos.x, this.pos.y, 4)
        for (let ray of this.rays){
            ray.show()
        }
    }

    look(walls){
        for (let ray of this.rays ){
            let closest = null
            let record = Infinity
            for (let wall of walls){
    
                const pt = ray.cast(wall)
                
                if (pt){
                    const d = p5.Vector.dist(this.pos, pt)
                    if (d < record){
                        record =d
                        closest = pt
                    }
                }
            }
            if (closest){
                line (this.pos.x, this.pos.y, closest.x, closest.y)
            } else {
                //line(this.pos.x, this.pos.y, width- this.pos.x, height-this.pos.y)
            }
            
        }
        
    }

    update(mx,my){
        this.pos.set(mx,my) 
    }

    checkEdges(){
        if (this.pos.x < 0 || this.pos.x > width || this.pos.y <0 || this.pos.y>height){
            return true
        } else {
            return false
        }
    }
}