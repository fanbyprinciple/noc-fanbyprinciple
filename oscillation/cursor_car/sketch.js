class Car {
    constructor(x,y){

        this.loc = createVector(x,y)
        this.vel = createVector(0,0)
        this.acc = createVector(0,0)
    } 

    display(){
        let angle = atan(this.vel.y/this.vel.x) + PI/2
        push ()
        translate(this.loc.x,this.loc.y)
        rotate (angle)
        // console.log(this.x,',',this.y,',',this.x+20,',',this.y+20)
        //triangle(this.loc.x, this.loc.y, this.loc.x + 20, this.loc.y +20, this.loc.x-20, this.loc.y+20);    
        triangle(0,0,20,20,-20,20)
        pop ()
    }

    update() {
        this.vel.add(this.acc)
        this.loc.add(this.vel)
        this.acc.mult(0)
    }

    
} 

function keyPressed(){
    let a
    if(keyCode == LEFT_ARROW){
        a = createVector(-0.1,0)
        car.acc.add(a)
        console.log("left")
    }
    if(keyCode == RIGHT_ARROW){
        a = createVector(0.1,0)
        car.acc.add(a)
        console.log("right")
    }
    if (keyCode == UP_ARROW) {
        a = createVector(0,-0.1)
        car.acc.add(a)
        console.log("up")
    }
    if(keyCode == DOWN_ARROW) {
        a = createVector(0,0.1)
        car.acc.add(a)
        console.log("down ",car.acc)
    }
}

let car
function setup(){
    createCanvas(400,400)
    
    car=new Car(width/2,height/2)
    //triangle(20,20,21,40,31,53)
}
function draw() {
    background(0)
    car.update()
    car.display()
}