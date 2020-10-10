function insideBody(subjectX, subjectY, water_body){
    if( subjectX < water_body.x + water_body.size/2 && 
        subjectX > water_body.x - water_body.size/2 &&
        subjectY < water_body.y  +water_body.size/2 && 
        subjectY> water_body.y- water_body.size/2){
        return true
    }
    return false
}

class Ship{
    constructor(x,y){
        this.pos = createVector(x,y)
        this.vel = createVector(0,-2)
        this.acc = createVector()
        this.r =6
        this.maxspeed = 4
        this.maxforce =0.1
        this.color = 175
    }

    checkEdges(){
        if(this.pos.x <10 ){
            let desired = createVector(this.maxspeed, this.vel.y)
            let steer = p5.Vector.sub(desired, this.vel)
            steer.limit(this.maxForce)
            this.applyForce(steer)
        }
        
        if(this.pos.x>width-10 ){
            let desired = createVector(this.maxspeed, this.vel.y)
            let steer = p5.Vector.sub(desired, this.vel)
            steer.mult(-1)
            steer.limit(this.maxForce)
            this.applyForce(steer)
        }


        if(this.pos.y>height-10){
            let desired = createVector(this.vel.x,this.maxspeed)
            let steer = p5.Vector.sub(desired, this.vel)
            steer.mult(-1)
            steer.limit(this.maxForce)
            this.applyForce(steer)
        }

        if(this.pos.y <10){
            let desired = createVector( this.vel.x, this.maxspeed)
            let steer = p5.Vector.sub(desired, this.vel)
            
            steer.limit(this.maxForce)
            this.applyForce(steer)
        }

        
    }

    seek(target){
        let desired = p5.Vector.sub(target,this.pos)

        desired.normalize()
        desired.mult(this.maxspeed)

        let steer = p5.Vector.sub(desired,this.vel)
        steer.limit(this.maxforce)

        this.applyForce(steer) 
        // determines the agility of the ship 
    }

    flee(target){
        let desired = p5.Vector.sub(target,this.pos)
        
        desired.normalize()
        desired.mult(this.maxspeed)

        let steer = p5.Vector.sub(desired, this.vel)
        steer.limit(this.maxforce)
        steer.mult(-1)

        this.applyForce(steer)
    
    }

    arrive(target){
        let desired = p5.Vector.sub(target, this.pos)

        let d = desired.mag()
        desired.normalize()

        if(d<100){
            let m = map(d,0,100,0,this.maxspeed)
            desired.mult(m)
        } else {
            desired.mult(this.maxspeed)
        }

        let steer = p5.Vector.sub(desired,this.vel)
        steer.limit(this.maxforce)
        this.applyForce(steer)
    }

    applyForce(force){
        this.acc.add(force)
    }

    update(){
        this.vel.add(this.acc)
        this.vel.limit(this.maxspeed)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    follow(flow){
        let desired = flow.lookup(this.pos)
        desired.mult(this.maxspeed)
        let steer = p5.Vector.sub(desired, this.velocity)
        steer.limit(this.maxforce)
        this.applyForce(steer)
    }

    traverse(water_body){
        //console.log(insideWater(this.pos.x, this.pos.y, water_body))
        if( insideBody(this.pos.x, this.pos.y, water_body)) {
                this.maxforce= 0.005
                this.maxspeed = 0.5
                this.color = 0
                
                return true

            }
        this.maxforce= 0.1
        this.maxspeed = 4    
        this.color = 175
        return false
    }

    display(){
        // My roomba
        // fill(51)
        // ellipse(this.pos.x, this.pos.y, this.r,this.r)
        
        let theta = this.vel.heading() + PI/2
        fill(this.color)
        stroke(0)
        push()
        translate(this.pos.x, this.pos.y)
        rotate (theta)
        beginShape()
        vertex(0, -this.r*2)
        vertex(-this.r, this.r*2)
        vertex(this.r, this.r*2)
        endShape()
        pop ()
    }
}

class Water {
    constructor(){
        this.x = random(width)
        this.y = random(height)
        this.size = 300
    }

    display(){
        fill('blue')
        noStroke()
        rectMode(CENTER)
        rect(this.x, this.y, this.size,this.size)
    }
}
var ships = []
var fleet_size = 25
let water_body
let flowfield
let debug = true
function setup(){
    createCanvas(400,400)
    flowfield = new FlowField(20)
    for (let i=0 ; i < fleet_size; ++i ){
        ships.push(new Ship(random(width), random(height)))
    }
    
    water_body = new Water()
}

function keyPressed() {
    if (key == ' ') {
      debug = !debug;
    }
  }

  function mousePressed(){
    flowfield.mouseinit()
  }

function draw(){
    background(255)

    water_body.display()
    if(debug){ 
        flowfield.display()
    }

    let mouse = createVector(mouseX, mouseY)

    fill (200)
    stroke (0)
    strokeWeight(2)
    ellipse(mouse.x, mouse.y, 48, 48)

    for(v of ships){
        v.arrive(mouse)
        v.update()
        v.checkEdges()
        v.follow(flowfield)
        v.traverse(water_body)
        v.display()
    }

}