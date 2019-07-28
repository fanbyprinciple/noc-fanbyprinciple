//randomwalker

function setup (){
    createCanvas(400,300)
    c = new Chalk()
    background(51)
     

}

function draw(){
    
    c.step()
    c.display()
    

}

class Chalk {
    constructor(){
        this.x =width/2
        this.y =height/2
    }

    display(){
        stroke (255)
        point (this.x,this.y)
    }

    step(){
        
        let stepx = floor(random(4))-1

        let stepy = floor(random(4))-1 

        console.log(stepx,",",stepy)

        this.x += stepx
        this.y += stepy

    }
}