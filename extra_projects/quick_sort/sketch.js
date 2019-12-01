w =10

function setup(){
    createCanvas(800,200)
    values = new Array(floor(width/w))
    for (let i = 0; i < values.length; i++){
        values[i] = random(height)
    }

    console.log(values)

    //frameRate(5)

}

function quickSort(arr, start, end) {
    if(start >= end){
        return
    }

    let index = partition(arr, start, end)
}

function draw() {
    background(0)

    for (i=0; i <values.length; ++i){
        stroke (255)
        fill (55)
        rect ((i * w), height-values[i], w ,values[i])
    }
}