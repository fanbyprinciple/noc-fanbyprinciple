function setup(){
    createCanvas(255,255)
    background(0)

    loadJSON('/bowtie', gotData)
}

function gotData(data){
    //frameRate(3)
    background(0)
    console.log(data)
    let drawing = data.drawing

    beginShape()
    
    for (let path of drawing){
        noFill()
        stroke(255)
        strokeWeight(3)
        for(let i=0; i < path[0].length; ++i){
            let x = path[0][i]
            let y = path[1][i]
            vertex(x,y)
        }
    }
    endShape()

    //loadJSON('/pig', gotPig)
}

function draw(){

}