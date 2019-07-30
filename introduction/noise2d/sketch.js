function setup(){
createCanvas(480,300)
}
function draw() {
    background(51)
    loadPixels()
    let xoff =0.0
    for(let i=0;i<width ; ++i){
        //console.log("inside i")
        let yoff=0.0
        for(let j=0; j<height ; ++j){
            //console.log("inside j")
            let bright = map(noise(xoff,yoff),0,1,0,255)
            //console.log(color(floor(bright)))
            pixels[i+j*width] = (floor(bright))
            //console.log(pixel[i+j*width])
            yoff += 0.01
        }
        xoff += 0.01
    }
    updatePixels()
}