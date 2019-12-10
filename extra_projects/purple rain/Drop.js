class Drop {
    constructor(){
      this.x = random(width)
      this.y = random(-200, -100)
      this.yspeed = random(4,10)
    }
  
    fall() {
      this.y = this.y + this.yspeed + 0.05
      
      if(this.y > height) {
        this.y = random(-200,-100)
        this.yspeed = random(4,10)
      }
    }
    
    show() {
      stroke(138,43,226)
      line(this.x,this.y,this.x,this.y+10)
    }
  
}