class Parent{
    constructor(){
        this.r = 100
        this.x = width
        this.y = height - this.r
    }

    move(){
        this.x -=   5
    }
    
    show (){
        image(pImg, this.x, this.y,this.r, this.r)
    }
}

