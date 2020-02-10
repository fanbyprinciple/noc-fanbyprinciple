let order = 7
let N  = Math.floor(Math.pow(2,order))
let total = N*N 


let path = []


function setup(){
    createCanvas(528,528)
    colorMode(HSB, 260,255,255)
    background(0)

    for (let i =0; i< total; ++i){
        path[i] = hilbert(i)
        let len = width/N
        path[i].mult(len)
        path[i].add(len/2, len/2)
    }



}

function hilbert(i){
    const points = [
        new p5.Vector(0, 0),
        new p5.Vector(0, 1),
        new p5.Vector(1, 1),
        new p5.Vector(1, 0)
      ];
    
    
    let index = i & 3
    let v = points[index]

    for(let j = 1; j < order; ++j){

    
    i = i >>> 2
    index = i & 3
    let len = Math.pow(2,j)
    if (index == 0){
        let temp = v.x
        v.x = v.y
        v.y = temp

    }else if(index == 1){

        v.y+= len
    }else if (index == 2){
        v.y+= len
        v.x+= len

    }else if (index==3){
        temp = len -1 -v.x
        v.x = len -1 - v.y
        v.y = len

        v.x+=j
    }

    }
    return v
}

let counter =0
function draw(){
    background(0)
    stroke (255)
    strokeWeight(2)
    noFill()
    //beginShape()
    
    for (let i = 1 ; i< counter; ++i){
        let h = map(i,0,path.length,0,360)
        stroke(h,255,255)
        line(path[i].x, path[i].y, path[i-1].x, path[i-1].y)
    }

    //endShape()
    counter +=10

    if (counter >= path.length){
        counter = 0 
    }

    // strokeWeight(1)
    // for (let i = 0; i < path.length; i++){
    //     point(path[i].x, path[i].y)
    //     text(i, path[i].x + 5, path[i].y - 5)
    // }
}