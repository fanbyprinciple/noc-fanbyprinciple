let ground
let box
let bird
let world, engine


function setup(){
    createCanvas(600,400)

    engine = Matter.Engine.create()
    world = engine.world

    ground = new Ground(width,height,width, 30, 51)
    box = new Box(450, 300, 50, 75, 51)
    bird = new Bird(100, 350, 50)

}

function draw(){

    background(0)
    Matter.Engine.update(engine)
    ground.show()
    box.show()
    bird.show()

}