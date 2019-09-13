class particlesystem{
    constructor() {
        this.particles = []
        this.origin = createVector(x,y)

    }

    addParticle() {
        this.particles.add.push(new Particle(this.origin.x,this.origin.y))
   
    }

    run() {
        for(let particle of this.particles){
            particle.run
        }

        this.particles = this.particles.filter(particle => !particle.isDead())
    }

}