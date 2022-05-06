let c = 6
function setup(){
  createCanvas(400,400,WEBGL)
  angleMode(degrees)

}

function draw(){
  background(0)
  push();
  for (let i = 2; i < 6; i++) {
    for(let j = 2; j < 6; j++){
      
    if (true ){
        push();
        noStroke()
        fill(color(i * 20, j * 20, 0))
        translate((-width/2) + (i * 50) + 25, (-height/2) + (j * 50) + 25);
        rotateX(frameCount * (i + 1)  * 0.002);
        rotateY(frameCount * (j + 1)  * 0.02);
        torus(30,30)
        pop();
    }
    
   }
  }
  
  
  pop();
  
  push()
  //translate(width/64,height/64, height/64);
  rotateZ(frameCount)
  stroke(255,255,255)
  fill(color(0,250,220))
  // torus(50,50);
  // torus(30,30);
  line(0,0,4,4)
  pop()
}