
let particles = [];
const gravity = 0.25;
const colors = ['red', 'orange', 'yellow', 'lime', 'cyan', 'magenta', 'white'];
let endColor;
let houses;




class Particle {
	constructor(x, y, xSpeed, ySpeed, pColor, size) {
		this.x = x;
		this.y = y;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
		this.color = pColor;
		this.size = size;
		this.isAlive = true;
		this.trail = [];
		this.trailIndex = 0;
	}

	step() {
		this.trail[this.trailIndex] = createVector(this.x, this.y);
		this.trailIndex++;
		if (this.trailIndex > 10) {
			this.trailIndex = 0;
		}
		this.x += this.xSpeed;
		this.y += this.ySpeed;

		this.ySpeed += gravity;

		if (this.y > height) {
			this.isAlive = false;
		}
	}

	draw() {
		this.drawTrail();
		fill(this.color);
		noStroke();
		rect(this.x, this.y, this.size, this.size);

	}

	drawTrail() {
		let index = 0;

		for (let i = this.trailIndex - 1; i >= 0; i--) {
			const tColor = lerpColor(color(this.color), endColor,
				index / this.trail.length);
			fill(tColor);
			noStroke();
			rect(this.trail[i].x, this.trail[i].y, this.size, this.size);
			index++;
		}

		for (let i = this.trail.length - 1; i >= this.trailIndex; i--) {
			const tColor = lerpColor(color(this.color), endColor,
				index / this.trail.length);
			fill(tColor);
			noStroke();
			rect(this.trail[i].x, this.trail[i].y, this.size, this.size);
			index++;
		}
	}
}

class Firework extends Particle {
	constructor(x, y) {
		super(x, y, random(-2, 2), random(-10, -15),
			random(colors), 10);
		this.countdown = random(30, 60);
	}

	step() {
		super.step();

		this.countdown--;
		if (this.countdown <= 0) {
			const explosionSize = random(20, 50);
			for (let i = 0; i < explosionSize; i++) {

				const speed = random(5, 10);
				const angle = random(TWO_PI);
				const xSpeed = cos(angle) * speed;
				const ySpeed = sin(angle) * speed;

				particles.push(new Particle(this.x, this.y,
					xSpeed, ySpeed,
					this.color, 5
				));
			}
			this.isAlive = false;
		}
	}
}


let cake;
let numerals = [];
let flame = [];

let clickone = false;

function preload() {
  cake = loadImage('cake.png');
  
  hbd = loadImage('hbd_su_2.png');
 
  
  for (let i=0; i<=9; i++) {
    numerals.push(loadImage('numeral'+i+'-export.png'));
  }
  
  for (let i=1; i<=4; i++) {
    flame.push(loadImage('flame'+i+'-export.png'));
  }
}

function setup() {
  createCanvas(400, 400);
   hbd.resize(200,200);
  pixelDensity(1);
	endColor = color(64, 0);
  imageMode(CENTER);
  frameRate(10);
  
}

function mousePressed() {
  if (!clickone) {
    hbd.resize(500, 500);
    clickone = !(clickone)
  }
  else {
    hbd.resize(200,200)
    clickone = !(clickone)
  }
  
  particles.push(new Firework(mouseX, height));
}

function draw() {
  background(220);
  image(cake, 200, 200);
  particles.forEach((p) => {
		p.step();
		p.draw();
	});
	particles = particles.filter((p) => p.isAlive);

  
  image(numerals[2], 165, 170);
  image(numerals[4], 225, 180);
  
  
  image(hbd,250,310)
  
  //image(numerals[6], 265, 170);
  image(flame[frameCount%4], 165, 100);
  image(flame[(frameCount+1)%4], 225, 100+15);
  //image(flame[(frameCount+2)%4], 265, 100);
}