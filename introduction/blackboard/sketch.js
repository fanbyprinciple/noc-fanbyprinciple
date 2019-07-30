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
        this.x =width/2
        this.y =height/2
    }

    display(){
        stroke (255)
        point (this.x,this.y)
    }

    step(){
        
        // let stepx = floor(random(4))-1

        // let stepy = floor(random(4))-1 

        // //console.log(stepx,",",stepy)

        // this.x += stepx
        // this.y += stepy

        let mouse_x =  mouseX - this.x
        let mouse_y = mouseY - this.y

        let stepx=0
        let stepy= 0

        

        
        let r = random(1)
        if(r<0.01){
            //levy lift
            stepx = random(-100,100)
            stepy = random(-100,100)
    
        } else if(r <0.4){
            if(mouse_x && mouse_y){
                stepx = (mouse_x/Math.abs(mouse_x)) 
                stepy = (mouse_y/Math.abs(mouse_y)) 
            }

        } else {
            stepx = floor(random(3))-1
            stepy = floor(random(3))-1
        } 

        this.y += stepy
        this.x += stepx

        //console.log("step: ",stepx,",",stepy)
        //console.log("this.pos: ",stepx,",",stepy)

    }
}