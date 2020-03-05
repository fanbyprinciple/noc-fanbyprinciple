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

function setup(){
    createCanvas(540,118)
    img = loadImage('text.png')
    
    //circles.push(new Circle(200,200,50))
    
}

function draw(){
    background(img)
    for (let i=0; i< 20 ; ++i){
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
    
}

function checkTouch(circle,index){
    
    let overlapping = false
    circles.forEach((c,i)=>{
        if (i != index){
            let d = dist(circle.x, circle.y, c.x,c.y)
            if(d +2 < (circle.r + c.r))
            {
                overlapping = true
            }
        }
        
    })

    return overlapping
}

function newCircle(){
    let valid =true
    
    
    let x = random(width)
    let y = random(height)
    let r = 1


    circles.forEach((c,i)=>{
        let d = dist(x,y,c.x,c.y)
        if(d < c.r){
            valid = false
            }
    })

    if(valid){
        circles.push(new Circle(x,y,r))
    }
    
}

