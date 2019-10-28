class Calvin {
    constructor(){
      this.r = 80
      this.x = 50 
      this.y = height - 50
      this.vy = 0
      this.gravity = 0.5
    }
     
    jump(){
        console.log(this.y )
        if(this.y == 370){
            this.vy = -16 
        }
       
    }

    hits(parent){
        //console.log(this.x, this.y, this.r,parent.x,parent.y,parent.r )
        //rect (this.x,this.y,this.r,this.r)
        //rect (parent.x, parent.y, parent.r, parent.r)
        return collideRectRect( this.x, this.y, this.r, this.r, parent.x, parent.y, parent.r, parent.r)
    } 
    
    move(){
      this.y += this.vy
      this.vy +=
        this.gravity
      this.y  = constrain(this.y, 0, height - this.r)
    }
    
    show(){
        noFill()
        rect(this.x,this.y,this.r,this.r) 
         image(cImg,this.x,this.y, this.r, this.r)  
      //rect(this.x, this.y,this.r, this.r)
    }
  }