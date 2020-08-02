class Planet {
    constructor(r,d, orbitspeed, angle) {
        this.radius = r
        this.distance = d
        this.angle = angle
        this.planets = []
        this.orbitSpeed = orbitspeed

    }

    orbit() {
        this.angle = this.angle + this.orbitSpeed
        for (let i in this.planets){
            this.planets[i].orbit()
        }
    }

    show(){
        push()
        rotate (this.angle)
        translate(this.distance, 0)
        
        fill (255, 100)
        ellipse(0,0,this.radius * 2)
        for(let i in this.planets){
            this.planets[i].show()
        }
        pop()
    }

    spawnMoons(total,level){
        for (let i=0; i < total; i++ ){
            let r = this.radius / (level * 2)
            let d = random(50,150)
            let o = random(-0.1,0.1)
            let a = random(TWO_PI)

            this.planets.push(new Planet(r,d/level, o,a))
            if(level < 3){
                let num = Math.floor(random(0,4))
                this.planets[i].spawnMoons(num, level+1)
            }
        }
    }
}
