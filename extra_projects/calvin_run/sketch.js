let calvin
let cImg
let pImg
let bImg

let soundClassifier
let score = 0

let parents = []

function preload(){
    const options = {probabilityThreshold: 0.95}
    soundClassifier = ml5.soundClassifier('SpeechCommands18w',options)
    cImg = loadImage('extra_projects/calvin_run/images/candb.png')
    pImg = loadImage('extra_projects/calvin_run/images/parents.png')
    bImg = loadImage('extra_projects/calvin_run/images/forest.png')

}

function setup() {
  createCanvas(800, 450);
  calvin = new Calvin()

  soundClassifier.classify(gotCommand)
}

function gotCommand(error, results){
    if (error) {
        console.error(error)
    }
    //console.log(results[0].label, results[0].confidence)
    if(results[0].label == 'up'){
        calvin.jump()
    }

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
          console.log("score : " , score)
          noLoop()
      }

      if(p.x < 0){
          score += 1
          parents.shift()
      }
  }
}