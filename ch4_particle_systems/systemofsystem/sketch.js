class Particle{
    constructor(x,y){
        this.loc =createVector(random(x,x+20),random(y+20))

    }

    display() {
        fill (255)

        ellipse(this.loc.x,this.loc.y,10,10)
    }

}

class ParticleSystem {
    constructor(x,y){
        this.origin = createVector(x,y)
        this.particles = []
    }

    addParticles(){
        this.particles.push(new Particle(this.origin.x,this.origin.y))
    }

    run(){
        for (let particle of this.particles){
            particle.display()
        } 
    }
}

var particleSystems = []
var ps
var particle

function setup(){

    createCanvas(800,800)
    ps = new ParticleSystem(width/2,height/2)
    particle = new Particle(width/2,height/2)
    
    

}

function draw() {

    background(0)
    for(i=0;i<particleSystems.length;++i){
        particleSystems[i].run()
        particleSystems[i].addParticles(particleSystems[i].origin.x,particleSystems[i].origin.y)
    }
    particle.display()
}


function mousePressed() {
    particleSystems.push(new ParticleSystem(mouseX,mouseY))
    print(particleSystems)
}