var socket

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

    this.constrain = function(){
        this.pos.x = constrain(this.pos.x,-width,width)
        this.pos.y = constrain(this.pos.y,-width,height)
    }
}

var blobs = []
var c_blobs = [] // all the blobs currently connected
var no_of_blobs = 100
var myBlob
var zoom = 1
var socket_id

function setup() {
    createCanvas(600,600)
    myBlob = new Blob(16,0,0,130)
    for (let i=0; i < no_of_blobs; ++i){
        let x = random(-width,width)
        let y = random(-height, height)
        blobs[i] = new Blob(16,x,y,130)
    }
    
    socket = io.connect("http://localhost:3000")

    var data = {
        x: myBlob.pos.x,
        y: myBlob.pos.y,
        radius: myBlob.radius
    }

    socket.emit('start',data)

    socket.on('id', function(data){
            socket_id = data
            console.log(socket_id)
        }
    )
    socket.on('heartbeat', function(data){
            //c_blobs = data

            for(let i = 0 ; i < data.length; ++i){
                c_blobs[i] = new Blob(data[i].x,data[i].y,data[i].radius)
            }
           // console.log(c_blobs)
            
        }
    )
    
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

    fill(255,0,0)

    myBlob.wobble()
    if(mouseIsPressed){
        myBlob.update()
    }

    
    myBlob.constrain()

    for(let i =0; i < c_blobs.length; i++){
        if(c_blobs[i].id != socket_id) {
            fill(0,0,255)
            //ellipse(c_blobs[i].x,c_blobs[i].y,c_blobs[i].radius*2,c_blobs[i].radius*2)
            push()
            translate(c_blobs[i].x,c_blobs[i].y)
            beginShape()
            let xoff = 0
            for(let j=0; j<TWO_PI; j+=0.1){
                let r = c_blobs[i].radius + random(-4,3)
                let x = r * cos(j)
                let y = r * sin(j)
                vertex(x,y)
                xoff += 0.1
            }
            endShape()
            pop()
            //c_yoff += 0.1
            fill(255)
            textAlign(CENTER)
            textSize(3)
            text(c_blobs[i].id,c_blobs[i].x,c_blobs[i].y + c_blobs[i].radius)

        }
       
    }


    var data = {
        x: myBlob.pos.x,
        y: myBlob.pos.y,
        radius: myBlob.radius
    }
    socket.emit('update', data)
}