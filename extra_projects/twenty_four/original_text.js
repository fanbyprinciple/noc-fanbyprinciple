function Circle(x, y) {
    this.x = x;
    this.y = y;
    this.r = 1;
    this.growing = true;
  
    this.grow = function() {
      if (this.growing) {
        this.r += 1;
      }
    };
  
    this.show = function() {
      stroke(this.r*25,random(150),random(160))
      noFill();
  
      strokeWeight(2);
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };
  
    this.edges = function() {
      return (
        this.x + this.r >= width ||
        this.x - this.r <= 0 ||
        this.y + this.r >= height ||
        this.y - this.r <= 0
      );
    };
  }




var circles;
var spots;
var img;

function preload() {
    img = loadImage('./extra_projects/twenty_four/chiku.png')
}

function setup() {
  createCanvas(900, 400);
  var density = displayDensity();
  pixelDensity(1);
  img.loadPixels();
  spots = [];
  circles = [];
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      var index = x + y * img.width;
      var c = img.pixels[index * 4];
      var b = brightness([c]);
      if (b > 1) {
        spots.push(createVector(x, y));
      }
    }
  }

  console.log(img.width);
  console.log(img.height);
  console.log('pixels', img.pixels.length);
  console.log('spots', spots.length);
  console.log(density);
}

function draw() {
  background(0);
  // frameRate(20)

  var total = 20;
  var count = 0;
  var attempts = 0;

  while (count < total) {
    var newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 1000) {
      noLoop();
      console.log('finished');
      break;
    }
  }

  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];

    if (circle.growing) {
      if (circle.edges()) {
        circle.growing = false;
      } else {
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          if (circle !== other) {
            var d = dist(circle.x, circle.y, other.x, other.y);
            var distance = circle.r + other.r;

            if (d - 5 < distance) {
              circle.growing = false;
              break;
            }
          }
        }
      }
    }

    circle.show();
    circle.grow();
  }
}

function newCircle() {
  var r = int(random(0, spots.length));
  var spot = spots[r];
  var x = spot.x;
  var y = spot.y;

  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var d = dist(x, y, circle.x, circle.y);
    if (d < circle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
  }
}