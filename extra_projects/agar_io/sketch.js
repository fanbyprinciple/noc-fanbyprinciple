var yoff = 0

function Blob(r,x,y,color) {
    this.pos = createVector(x,y)
    this.radius = r
    this.color = color
    this.vel = createVector(0,0)
    this.show = function() {
        fill (color,0,0)
        //console.log(this.pos.x,this.radius)
        ellipse(this.pos.x,this.pos.y,this.radius*2, this.radius*2)
    }

    this.wobble =function() {
        push ()
        translate(this.pos.x, this.pos.y)
        beginShape()
        let xoff = 0
        for(let i=0; i < TWO_PI; i+= 0.1){
            //let offset = map(sin(i * 10 + frameCount * 0.1), -1,1,-5,5) //sin wave
            //let offset = map(noise(xoff + yoff),0,1,-25,25)// spinning blob
            //let offset = map(noise(xoff,yoff),0,1,-25,25)
            //let r = this.radius + offset
            let r = this.radius + random(-4,3)
            let x = r * cos (i)
            let y = r * sin (i)
            vertex(x,y)
            xoff +=0.1
        }
        endShape()

        pop ()
        yoff += 0.1
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
    myBlob = new Blob(16,0,0,130)
    for (let i=0; i < no_of_blobs; ++i){
        let x = random(-width,width)
        let y = random(-height, height)
        blobs[i] = new Blob(16,x,y,130)
    }
    
    
}

function draw() {
    background(0)
    //translate(width/2-myBlob.pos.x,height/2-myBlob.pos.y)
    translate(width/2,height/2)
    let newzoom= (64/myBlob.radius)
    zoom = lerp(zoom,newzoom,0.1)
    scale (zoom)
    translate(-myBlob.pos.x,-myBlob.pos.y)
    
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

    myBlob.wobble()
    myBlob.update()
    
}