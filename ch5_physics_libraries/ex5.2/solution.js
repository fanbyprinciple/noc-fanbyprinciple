let world

class Boxy {
    constructor(x_, y_){
        
        this.w = 16
        this.h = 16

        // define a body
        let bd = new box2d.b2BodyDef()
        bd.type = box2d.b2BodyType.b2_dynamicBody
        bd.position = scaleToWorld(x_,y_)

        // define a fixture
        let fd = new box2d.b2FixtureDef()
        // fixture holds shaep
        fd.shape = new box2d.b2PolygonShape()
        fd.shape.SetAsBox(scaleToWorld(this.w/2), scaleToWorld(this.h/2))
        
        //some physics
        fd.density = 1.0
        fd.friction = 0.5
        fd.restitution = 0.2

        //create the body
        this.body = world.CreateBody(bd)

        //attach the fixture
        this.body.CreateFixture(fd)
    }

    display(){
        // get bodys position and angle
        let pos = scaleToPixels(this.body.GetPosition())
        let a  = this.body.GetAngleRadians() + random(-3,3)

        rectMode(CENTER)
        push()
        translate(pos.x, pos.y)
        rotate(a)
        fill(127)
        stroke(200)
        strokeWeight(2)
        rect(0,0,this.w,this.h)
        pop()
    }

}


let boxes  

function setup(){
    createCanvas(400,300)
    boxes = []
    world = createWorld(new box2d.b2Vec2(0,0))
}

function mousePressed(){
    boxes.push(new Boxy(mouseX, mouseY))    
}

function draw(){
    background(255)

    // We must always step through time!
    let timeStep = 1.0 / 30;
    // 2nd and 3rd arguments are velocity and position iterations
    world.Step(timeStep, 10, 10);
    
    for (b of boxes){
      b.display()  
    }
}