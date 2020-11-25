var mic


function setup(){
    createCanvas(300,300)
    mic =new p5.AudioIn()
    mic.start()
}

function draw(){
    background(0)
    var vol = mic.getLevel()
    console.log(vol)
    fill (255)
    ellipse(width/2, height/2, 300, vol*20000)
    console.log("ellipse")
}