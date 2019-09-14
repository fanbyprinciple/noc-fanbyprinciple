class Particlesystem {
    constructor(x,y) {
        this.particles = []
        this.origin = createVector(x,y)

    }

    addParticle(x,y) {
        this.particles.push(new Particle(createVector(x,y)))
    }

    
    run() {

        for(let particle of this.particles){
            particle.run()
        }

        this.particles = this.particles.filter(particle => !particle.isDead())
    }

}