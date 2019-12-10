

function setup() {
  createCanvas(640, 360);
  drops = []
  for (i=0; i< 100; ++i){
    drops[i] = new Drop()
  }
  
}

function draw() {
  background(230, 230, 250);
  for (i=0; i< 100; ++i){
    drops[i].fall()
    drops[i].show()
  }

}