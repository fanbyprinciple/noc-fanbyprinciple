class Calvin {
    constructor(){
      this.r = 130 
      this.x = 50 
      this.y = height - 50
      this.vy = 0
      this.gravity = 0.5
    }
    
    jump(){
        print(this.y )
        if(this.y == 320){
            this.vy = -13 
        }
       
    }
    
    move(){
      this.y += this.vy
      this.vy +=
        this.gravity
      this.y  = constrain(this.y, 0, height - this.r)
    }
    
    show(){
        
       image(cImg,this.x,this.y, this.r, this.r)  
      //rect(this.x, this.y,this.r, this.r)
    }
  }