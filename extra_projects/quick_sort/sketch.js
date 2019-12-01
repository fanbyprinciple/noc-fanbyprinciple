w =10

function setup(){
    createCanvas(800,200)
    values = new Array(floor(width/w))
    for (let i = 0; i < values.length; i++){
        values[i] = random(height)
    }

    console.log(values)

    frameRate(5)

    quickSort(values, 0, values.length - 1)

}

function quickSort(arr, start, end) {
    if(start >= end){
        return
    }

    let index = partition(arr, start, end)
    quickSort(arr, start, index - 1)
    quickSort(arr, index + 1, end)
}

function partition(arr, start, end){
    let pivotIndex = start
    let pivotValue = arr[end]

    for(let i =start; i < end ; ++i ){
        if(arr[i] < pivotValue){
            swap(arr, i, pivotIndex)
            pivotIndex ++
        }
    }

    swap(arr, pivotIndex, end)

    return pivotIndex

}

function swap(arr, a,b){
    setTimeout(1000)
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function draw() {
    background(0)

    for (i=0; i <values.length; ++i){
        stroke (255)
        fill (55)
        rect ((i * w), height-values[i], w ,values[i])
    }
}