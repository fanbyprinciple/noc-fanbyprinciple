function angle_between(v1, v2){
    
    v1.v.normalize()
    v2.v.normalize()
    let dot = v1.v.dot(v2.v)
    // console.log(dot)
    let theta = acos(dot/v1.v.mag() * v2.v.mag())
    return theta
}

class Anglehand{
    constructor(x,y){
        this.v = createVector(x, y)
        this.c = createVector(width/2, height/2)
        // console.log(this.v)
        this.v.sub(this.c)
        // console.log(this.v)
        // this.v.normalize()
        // console.log(this.v)
        // this.v.mult(5)
        // console.log(this.v)
    }

    display(){
        strokeWeight(2)
        line (200,200,this.v.x, this.v.y)
    }
}

let a1
let a2

function setup(){
    createCanvas(400,400)
    a1 = new Anglehand(random(width), random(height))
    
    
}

function draw(){
    background(255)
    
    a2 = new Anglehand(mouseX, mouseY)
    a1.display()
    a2.display()
    text("Angle between vectors : " + angle_between(a1,a2), 50,390)


}