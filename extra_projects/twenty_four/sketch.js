class Circle {
    constructor(x,y,r){
        this.x = x
        this.y = y
        this.r = r
        this.growing = true
    }

    show(){
        stroke (255)
        noFill ()
        strokeWeight(2)
        ellipse(this.x, this.y, this.r * 2, this.r *2)
    }

    grow(){
        if(this.growing){
            this.r += 0.5    
        }
        
    }

    checkEdges(){
        let x = this.x
        let y = this.y
        let r = this.r

        if(x + r > width){
            return true
        } else if(y +r > height){
            return true
        } else if(y-r < 0){
            return true
        } else if(x-r < 0){
            return true
        } else {
            return false
        }
    }
}

let circles = []
let img
let spots = []

function preload(){
    img = loadImage('./extra_projects/twenty_four/chiku.png')
}

function setup(){
    createCanvas(900, 400);
  var density = displayDensity();
  pixelDensity(1);
  img.loadPixels();
  
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      var index = x + y * img.width;
      var c = img.pixels[index * 4];
      var b = brightness([c]);
      if (b > 1) {
        spots.push(createVector(x, y));
      }
    }
  }
    console.log(img.width);
    console.log(img.height);
    console.log('pixels', img.pixels.length);
    console.log('spots', spots.length);
    console.log(density);

    //circles.push(new Circle(200,200,50))
    
}

function draw(){
    background(0)
    for (let i=0; i<50 ; ++i){
        newCircle()
    }
    
    for(let i=0; i <circles.length; ++i){
        if(circles[i].checkEdges()){
            circles[i].growing = false
        } 
        
        if(checkTouch(circles[i],i)){
            circles[i].growing = false
        }

        circles[i].show()
        circles[i].grow()
    }

    //ellipse(200,200,50,50)

    
    
}

function checkTouch(circle,index){
    
    let overlapping = false
    circles.forEach((c,i)=>{
        if (i != index){
            let d = dist(circle.x, circle.y, c.x,c.y)
            if(d - 5 < (circle.r + c.r))
            {
                overlapping = true
            }
        }
        
    })

    return overlapping
}


var count = 0
function newCircle(){
    let valid =true
    
    
    let x = random(width)
    let y = random(height)
    let r = int(random(0,spots.length))


    circles.forEach((c,i)=>{
        let d = dist(x,y,c.x,c.y)
        if(d < c.r){
            valid = false
            }
    })

    if(valid){
        count ++
        console.log("heer")
        circles.push(new Circle(x,y,r))
    }
    
}

