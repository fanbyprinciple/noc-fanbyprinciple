let len = 63

class Toothpick{
    constructor(x,y, d){
        this.newPick = true

        this.dir = d
        if(d == 1){
            this.ax = x - len/2
            this.bx = x + len/2
            this.ay = y 
            this.by = y
        } else {
            this.ax = x
            this.bx = x 
            this.ay = y - len/2
            this.by = y + len/2
        }
    }

    intersects(x,y){
        if(this.ax == x && this.ay == y){
            return true
        } else if(this.bx ==x && this.by == y){
            return true
        } else {
            return false
        }
    }

    createA(others){
        let available = true
        others.forEach((other)=>{
            if(other != this && other.intersects (this.ax,this.ay)){
                available = false
                //break;
            }
        })

        if(available){
            return new Toothpick(this.ax,this.ay,this.dir*-1)
        } else {
            return null
        }
        
    }

    createB(others){
        let available =true
        others.forEach((other)=>{
            if(other != this && other.intersects(this.bx, this.by)){
                available = false
                //break
            }
        })

        if(available){
            return new Toothpick(this.bx, this.by, this.dir*-1)
        } else {
            return null
        } 
    }

    show(){
        stroke (0)
        strokeWeight(2)
        line (this.ax, this.ay, this.bx, this.by)

    }
}

let picks = []

function setup(){
    createCanvas(600,600)
    picks.push(new Toothpick(0,0,1))
    // for(let i=0; i<; ++i){
    //     picks[i] = new Toothpick
    // }
    noLoop()
}

function mousePressed(){
    redraw()

}

function draw(){
    background(255)

    let next = []

    translate(width/2, height/2)
    picks.forEach((pick)=>{
        pick.show()
        let nextA = pick.createA(picks)
        let nextB = pick.createB(picks)

        if(nextA != null){
            next.push(nextA)
        }
        if(nextB != null){
            next.push(nextB)
        }

    })

    //Array.prototype.push.apply(picks, next)
    picks = picks.concat(next)
}