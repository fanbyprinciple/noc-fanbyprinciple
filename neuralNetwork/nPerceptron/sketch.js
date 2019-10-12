var brain
var inputs

var points = []

function setup() {
    createCanvas(800,800)

    for (let i =0 ; i < 100 ; ++i) {
        points[i] = new Point()
    }

    brain = new Perceptron()
    inputs = [-1,0.5]
    console.log(brain.guess(inputs))

}

function draw() {
    stroke (0)
    line (0, 0, width, height)
    for (let i =0 ; i < 100 ; ++i){
        points[i].show()
    }

    for (let i=0; i <100 ; ++i) {
        inputs = [points[i].x, points[i].y]
        let target = points[i].label 

        //brain.train( inputs , target )

        let guess = brain.guess(inputs)
        //print(inputs, guess)
        if  (guess == target) {
            fill(0,255,0)
            noStroke()
            ellipse(points[i].x,points[i].y,4,4)
        } else {
            fill(255,0,0)
            noStroke()
            ellipse(points[i].x, points[i].y, 4, 4)

        }

    }

}