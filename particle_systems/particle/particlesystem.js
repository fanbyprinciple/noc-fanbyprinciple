class Particlesystem {
    constructor(x,y) {
        this.particles = []
        this.origin = createVector(x,y)

    }

    addParticle(x,y) {
        this.particles.push(new Particle(createVector(x,y)))
    }

    addForce() {
        let gravity = createVector(0,0.01)
        for (let particle of this.particles){
            particle.applyForce(gravity)
        }
    }
    run() {

        for(let particle of this.particles){
            particle.run()
        }

        this.particles = this.particles.filter(particle => !particle.isDead())
    }

}