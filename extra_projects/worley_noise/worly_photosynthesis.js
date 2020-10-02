

let points = [];

function setup() {
  createCanvas(100, 100);
  pixelDensity(1);
  for (let i = 0; i < 3; i++) {
    points[i] = createVector(random(width), random(height));
  }
  
}

function mousePressed(){
  points.push(createVector(mouseX, mouseY) ) 
}

function draw() {
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
       let distances = [];
      for (let i = 0; i < points.length; i++) {
        let v = points[i];
        let z = frameCount % width;
        let d = dist(x, y, v.x, v.y);
        distances[i] = d;
      }
      let sorted = sort(distances);
      let r = map(sorted[0], 0, 150, 0, 255);
      let g = map(sorted[1], 0,200, 255, 0);
      let b = map(sorted[2], 0, 50, 255, 0);
      
      let index = (x + y * width) * 4;
      pixels[index + 0] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
      pixels[index + 3] = 255
    }
  }
  updatePixels();
  
  for (let v of points){
    strokeWeight(8)
    stroke(0,0,255)
    v.x += random(-5,5)
    v.y += random(-5,5)
    point(v.x, v.y)
  }
  
}
