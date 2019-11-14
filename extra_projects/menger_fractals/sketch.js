
let a = 0
let b
let sponge = new Array()
function setup(){
    createCanvas(400,400,WEBGL)
  
    b = new Box(0,0,0,200)
    sponge.push(b)
}


function mousePressed(){
    let next = new  Array()
    for(let b =0; b < sponge.length; ++b){
        next.push(sponge[b].generate())
    }
    sponge = next
}

function draw(){
    background(51)
    stroke (255)
    noFill()

    translate(0,0)
    rotateX(a)
    
    for (let b =0; b < sponge.length; ++b){
        print(sponge)
        sponge[b].show()
    }
    

    a += 0.01
}