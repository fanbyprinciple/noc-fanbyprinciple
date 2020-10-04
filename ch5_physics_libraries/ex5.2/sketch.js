// the question is to convert this into a box2d Object


class Boxy {
    constructor(x_, y_){
        this.x = x_
        this.y = y_
        this.w = 16
        this.h = 16
    }

    display(){
        fill(175)
        stroke(0)
        rectMode(CENTER)
        rect(this.x,this.y,this.w,this.h)
    }

}


let boxes  

function setup(){
    createCanvas(400,300)
    boxes = []
}

function mousePressed(){
    boxes.push(new Boxy(mouseX, mouseY))    
}

function draw(){
    for (b of boxes){
      b.display()  
    }
}