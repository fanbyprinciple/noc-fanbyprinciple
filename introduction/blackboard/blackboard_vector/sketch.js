//randomwalker

function setup (){
    createCanvas(400,300)
    c = new Chalk()
    background(51)
    // stuff =[]
    // stuff[0] = 1
    // stuff[1] = 1
    // stuff[2] = 2
    // stuff[3] = 3
    // stuff[4] = 3
    // index = random(stuff)
    // console.log(index)

    // prob = 0.10
    // r=random(1)
    // if(r<prob){
    //     console.log("gotcha")
    // }


}

function draw(){
    
    c.step()
    c.display()
    

}

class Chalk {
    constructor(){
        this.loc = createVector(width/2,height/2)
        this.loc.x =width/2
        this.loc.y =height/2
    }

    display(){
        stroke (255)
        point (this.loc.x,this.loc.y)
    }

    step(){
        
        // let stepx = floor(random(4))-1

        // let stepy = floor(random(4))-1 

        // //console.log(stepx,",",stepy)

        // this.loc.x += stepx
        // this.loc.y += stepy

        let mouse_x =  mouseX - this.loc.x
        let mouse_y = mouseY - this.loc.y

        let stepx=0
        let stepy= 0

        

        
        let r = random(1)
        
        // if(r<0.01){
        //     //levy lift
        //     stepx = random(-100,100)
        //     stepy = random(-100,100)
    
        // } else 
        
        if(r <0.4){
            if(mouse_x && mouse_y){
                stepx = (mouse_x/Math.abs(mouse_x)) 
                stepy = (mouse_y/Math.abs(mouse_y)) 
            }

        } else {
            stepx = floor(random(3))-1
            stepy = floor(random(3))-1
        } 

        this.loc.y += stepy
        this.loc.x += stepx

        //console.log("step: ",stepx,",",stepy)
        //console.log("this.loc.pos: ",stepx,",",stepy)

    }
}