class Flock{
  constructor(x, y){
    this.blirds = []
  }
  
  run(){
    for(let i=0; i< this.blirds.length; i++){
      this.blirds[i].run(this.blirds)
    }
  }
  
  addBlird(b){
    this.blirds.push(b)
  }
}