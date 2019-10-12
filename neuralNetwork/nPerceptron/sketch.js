var p
var inputs

var points = []

function setup() {
    createCanvas(300,300)

    for (let i =0 ; i < 100 ; ++i) {
        points[i] = new Point()
    }

    p = new Perceptron()
    inputs = [-1,0.5]
    console.log(p.guess(inputs))

}

function draw() {
    stroke (0)
    line (0, 0, width, height)
    for (let i =0 ; i < 100 ; ++i){
        points[i].show()
    }

}