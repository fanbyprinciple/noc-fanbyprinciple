function setup(){

    createCanvas(1200,1200)
    background(0)

}

function draw(){

    if (mouseIsPressed) {
        stroke(255)

        let d = dist(mouseX, mouseY, pmouseX, pmouseY)
        let sw = map(d, 0, 20, 20, 1)
        strokeWeight(sw)
        line (mouseX , mouseY, pmouseX, pmouseY )
    }


}