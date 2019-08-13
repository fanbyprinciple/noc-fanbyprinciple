function Blob(r,x,y,color) {
    this.pos = createVector(x,y)
    this.radius = r
    this.color = color
    this.show = function() {
        fill (this.color)
        //console.log(this.pos.x,this.radius)
        ellipse(this.pos.x,this.pos.y,this.radius*2, this.radius*2)
    }

    this.update = function(){
        var mousee =createVector(mouseX,mouseY)
        mousee.sub (this.pos)
        mousee.setMag(3)
        this.pos.add(mousee)
    }
}

var blobs = []
var myBlob

function setup() {
    createCanvas(300,300)
    myBlob = new Blob(64,width/2,height/2,255)
    for (let i=0; i <10; ++i){
        blobs[i] = new Blob(16,random(width),random(height),250)
    }
    
    
}

function draw() {
    background(0)
    myBlob.show()
    myBlob.update()
    for (let i = 0; i <10; ++i){
        blobs[i].show()
    }
    
}