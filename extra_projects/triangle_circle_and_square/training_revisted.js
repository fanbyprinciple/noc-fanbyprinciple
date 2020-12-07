let circles = []
let squares = []
let triangles = []

function preload(){
    for (let i=0; i<52; i++){
        circles[i] = loadImage(`./extra_projects/triangle_circle_and_square/data/circle${i}.png`)
        squares[i] = loadImage(`./extra_projects/triangle_circle_and_square/data/square${i}.png`)
        triangles[i] = loadImage(`./extra_projects/triangle_circle_and_square/data/triangle${i}.png`)
    }

}

let shapeClassifier

function setup(){
    createCanvas(400,400)

    let options = {
        inputs: [128, 128, 4],
        task: 'imageClassification',
        debug: true
    }

    shapeClassifier = ml5.neuralNetwork(options)

    for (let i=0; i< circles.length; i++){
        shapeClassifier.addData({image: circles[i]}, {label: 'circle'})
        shapeClassifier.addData({image: squares[i]}, {label: 'square'})
        shapeClassifier.addData({image: triangles[i]}, {label: 'triangles'})
    }

    shapeClassifier.normalizeData()
    shapeClassifier.train({epochs:100}, finishedTraining)

}

function finishedTraining(){
    print('finished training!')
    shapeClassifier.save()
}