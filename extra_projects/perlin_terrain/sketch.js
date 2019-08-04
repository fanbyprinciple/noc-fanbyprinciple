let cols, rows
let scl = 20 //scale

function setup () {
    createCanvas(600,600)
    let w = 600
    let h = 600
    cols = w/scl
    rows = h/scl
}

function draw () {
    background(0)
    //rect(200,200,20,20)

    for (let x = 0; x < cols; x++) {
        for (let y = 0; y <rows; y++) {
            stroke (255)
            noFill()
            rect (x*scl, y*scl,scl,scl)
        
       }
    }
}