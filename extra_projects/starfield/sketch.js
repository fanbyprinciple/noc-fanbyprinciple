class Star{
    constructor(){
        this.x = random(-width,width)
        this.y = random(-width, height)
        this.z = width

        this.pz =this.z
    }

    show(){
        fill (255,0,200)
        noStroke()

        let sx = map(this.x/this.z, 0,1, 0, width)
        let sy = map(this.y/this.z, 0,1,0, height)

        let r = map(this.z,0, width,8,0)
        ellipse(sx,sy,r,r)

        let px = map(this.x /this.pz, 0,1,0,width)
        let py = map(this.y/this.pz,0,1,0,height)

        this.pz = this.z
        
        stroke(255,0,200)
        line (px,py,sx,sy)

    }

    move(){
        this.z -= speed

        if(this.z < 1){
            console.log("here")
            this.z = width
            this.x = random(-width, width)
            this.y = random(-height, height)
            this.px = this.x 
            this.py = this.y
        }
        //console.log(this.z)
    }

    run(){
        this.move()
        this.show()
        
    }
}

let stars = []
let number = 800

let speed

function setup(){
    createCanvas(600,600)
    for(let i=0; i< number; ++i){
        stars[i] = new Star()
    }

}

function draw(){
    speed = map(mouseX, 0, width,0,50)
    background(0)
    translate(width/2, height/2)
    for (let i =0; i< number; ++i){
        stars[i].run()
    }
}