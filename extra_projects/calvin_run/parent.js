class Parent{
    constructor(){
        this.r = 80
        this.x = width
        this.y = height - this.r
    }

    move(){
        this.x -=   5
    }
    
    show (){
        noFill()
        rect(this.x,this.y,this.r,this.r) 
        image(pImg, this.x, this.y,this.r, this.r)
    }
}

