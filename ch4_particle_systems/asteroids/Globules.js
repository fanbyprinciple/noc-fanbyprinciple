class Globules {
    constructor(x,y){
        this.origin = createVector(x,y)
        this.Globules = []
    }

    addGlobules() {
        this.Globules.push(new Globule(this.origin.x,this.origin.y))
        console.log(new Globule(this.origin.x,this.origin.y))
    }

    generateThrust() {
        
        for (let globule of this.Globules){
            

            globule.applyForce(createVector(random(-5,5),10))
            globule.run()
        }

        this.Globules = this.Globules.filter(globule => !globule.isDead())

    }

    run() {
        for (let globule of this.Globules){
            globule.run()
        }

        this.Globules = this.Globules.filter(globule=> !globule.isDead())
    }
}

