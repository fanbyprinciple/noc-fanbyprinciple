let calvin
let cImg
let pImg
let bImg

let parents = []

function preload(){
    cImg = loadImage('extra_projects/calvin_run/images/candb.png')
    pImg = loadImage('extra_projects/calvin_run/images/parents.png')
    bImg = loadImage('extra_projects/calvin_run/images/forest.png')

}

function setup() {
  createCanvas(800, 450);
  calvin = new Calvin()
}

function keyPressed(){
  if (key == ' '){
   calvin.jump();
  }
}

function draw() {
  if (random (1)< 0.005){
      //print("yeah!")
      parents.push(new Parent())
  }

  
  background(255);
  calvin.show()
  calvin.move()

  for (let p of parents) {
      // print('usher!!')
      p.move()
      p.show()
      //  console.log(calvin.hits(p))
      if (calvin.hits(p)){
          console.log("hit")
          noLoop()
      }

      if(p.x < 0){
          parents.shift()
      }
  }
}