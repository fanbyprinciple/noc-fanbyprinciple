
// this code can be test to check the uniformness of random districutionS


var randomCounts

function setup() {

    createCanvas(640,240)
    randomCounts = new Array(20).fill(0) //creates an array of zeroes
}

function draw() {

    background(255)

    let index = floor(random(randomCounts.length))
    randomCounts[index]++

    console.log()
    

    stroke (0)
    fill (175)
    let w = width/randomCounts.length
    //console.log(w)

    for(let x =0;x< randomCounts.length; x++){
        //console.log(randomCounts[x])
        rect(x*w, (height-randomCounts[x]), w-1, randomCounts[x])
    }
}