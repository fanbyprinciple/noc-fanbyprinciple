class Planet {
    constructor(r,d) {
        this.radius = r
        this.distance = d
        this.angle = random(TWO_PI)
        this.planets = []
        this.orbitSpeed = random(0.1,0.3)

    }

    orbit() {
        this.angle = this.angle + this.orbitSpeed
        if (this.planets != null){
            for (let i=0; i < this.planets.length; i++){
                this.planets[i].orbit()
            }
        }
    }

    show(){
        push()
        rotate (this.angle)
        translate(this.radius, 0)
        
        fill (255, 100)
        ellipse(0,0,this.radius * 2,this.radius * 2)
        if (this.planets != null){
            for (let i=0; i < this.planets.length; i++){
                this.planets[i].show()
            }
        }
        pop()
    }

    spawnMoons(total){
        for (let j=0; j < total; ++j){
            this.planets.push(new Planet)
        }

        for (let i=0; i < this.planets.length; i++ ){
            let r = this.radius * 0.5
            let d = random(75,300)
            this.planets[i] = new Planet(r, d)
        }
    }
}
