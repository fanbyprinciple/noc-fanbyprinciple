class Planet {
    constructor(r,d, orbitspeed, img) {
        this.radius = r
        this.distance = d
        //this.angle = angle
        this.planets = []
        this.orbitSpeed = orbitspeed

        this.v = p5.Vector.random3D()
        this.v.mult(this.distance)
        this.angle = random(TWO_PI)

        this.texture = img
    }

    orbit() {
        this.angle = this.angle + this.orbitSpeed
        for (let i in this.planets){
            this.planets[i].orbit()
        }
    }

    show(){
        push()
        noStroke()

        let v2 = createVector(1,0,1)
        let p = this.v.cross(v2)
        if(p.x != 0 || p.y != 0 || p.z != 0){
            rotate(this.angle, p)
        }

        stroke(255)
        // rotate (this.angle)
        // translate(this.distance, 0)
        translate(this.v.x, this.v.y, this.v.z)
        noStroke()
        fill (255, 100)
        texture(this.texture)
        //ellipse(0,0,this.radius * 2)
        sphere (this.radius)
    
        for(let i in this.planets){
            this.planets[i].show()
        }
        pop()
    }

    spawnMoons(total,level){
        for (let i=0; i < total; i++ ){
            let r = this.radius / (level * 2)
            let d = random(this.radius + r, (this.radius + r) * 2)
            let o = random(-0.1,0.1)
            let index = int(random(0, textures.length))

            this.planets[i] = new Planet(r, d, o, textures[index])
            // let a = random(TWO_PI)

            // this.planets.push(new Planet(r,d/level, o,a))
            if(level < 2){
                let num = Math.floor(random(0,3))
                this.planets[i].spawnMoons(num, level+1)
            }
        }
    }
}
