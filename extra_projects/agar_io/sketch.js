function Blob(r,x,y,color) {
    this.pos = createVector(x,y)
    this.radius = r
    this.color = color
    this.vel = createVector(0,0)
    this.show = function() {
        fill (this.color)
        //console.log(this.pos.x,this.radius)
        ellipse(this.pos.x,this.pos.y,this.radius*2, this.radius*2)
    }

    this.update = function(){
        let newvel = createVector(mouseX- width/2,mouseY-height/2)
        newvel.setMag(3)
        this.vel.lerp(newvel,0.2)
        this.pos.add(this.vel)
    }

    this.eats = function(other){
        let d = p5.Vector.dist(this.pos,other.pos)
        let sum = PI * this.radius *this.radius + PI * other.radius *other.radius
        
        if(d < (this.radius + other.radius)){
            //console.log(sqrt(sum/PI))
            this.radius  = sqrt (sum/PI)
            console.log(this.radius,",",d)
            

            //this.radius += other.radius* 0.02
            return true
        } else {
            return false
        }
    }
}

var blobs = []
var no_of_blobs = 200
var myBlob
var zoom = 1

function setup() {
    createCanvas(600,600)
    myBlob = new Blob(64,width/2,height/2,255)
    for (let i=0; i < no_of_blobs; ++i){
        let x = random(-width,width)
        let y = random(-height, height)
        blobs[i] = new Blob(16,x,y,250)
    }
    
    
}

function draw() {
    background(0)
    translate(width/2,height/2-myBlob.pos.y)
    myBlob.show()
    myBlob.update()
    for (let i = no_of_blobs - 1; i >= 0; --i){

        if(blobs[i]){
            blobs[i].show()
            if(myBlob.eats(blobs[i])){
                console.log("one gone")
                blobs.splice(i,1)
            
            //myBlob.grow()

            }
        } 
        
    }
    
}