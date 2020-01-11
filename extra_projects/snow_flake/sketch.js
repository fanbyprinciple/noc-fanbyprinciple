var symmetry = 6
var colDec = 0
var xoff = 0

let saveButton
let clearButton
let symmetrySlider
let bloodSlider

function setup(){

    createCanvas(440,440)
    background(0)
    angleMode(DEGREES)

    saveButton = createButton('save')
    saveButton.mousePressed(saveSnowflake)

    clearButton = createButton('clear')
    clearButton.mousePressed(clearCanvas)

    symmetrySlider =createSlider(1,36, 4, 0.1)
    bloodSlider = createSlider(1,255,0,0.1)
    
    colorMode(HSB,255,255,255)

    translate(width/2, height/2)
    stroke(255,100,100)

    let angle = 360/(symmetry * 2)
    for(let i=0; i<(symmetry * 2); i++){
        push ()
        rotate(i * angle)
        line(0,0, width, 0)
        pop ()
    }
}

function clearCanvas() {
    background(0)
}

function saveSnowflake() {
    save('snowflake.png')
}

function draw(){

    symmetry = symmetrySlider.value()
    colDec = bloodSlider.value()

    console.log(symmetry, colDec)


    
    translate(width/2, height/2)

    let mx = mouseX - width/2
    let my = mouseY - height/2
    let pmx = pmouseX - width/2
    let pmy = pmouseY - height/2

    if (mouseIsPressed) {
        let hu = map(sin(xoff), -1,1,0,360)
        xoff += 0.01
        // let hu = noise(xoff) * 255
        // xoff += 0.01
        stroke(hu, 255 - colDec, 255 -colDec, 100)
        for( i=0; i < symmetry; i++){
            
            rotate ((360/symmetry))
            
            let d = dist(mx, my, pmx, pmy)
            let sw = map(d, 0, 15, 15, 1)
            strokeWeight(sw)
            // stroke(255, 255 - colDec, 255- colDec)
            
            push()
            line (mx , my, pmx, pmy )
            pop()

            push()
            scale(-1,1)
            line (mx , my, pmx, pmy )
            pop()
        }
        
    }


}