var cols, rows
var scl = 20 //scale
var w = 2000
var h = 1600

var terrain

var flying = 0


function setup () {
    createCanvas(600,600,WEBGL)
    
    cols = w/scl
    rows = h/scl

    terrain = new Array(cols)

    

    for(let i=0; i<cols; i++){
        terrain[i] = new Array(rows)
    }


    
    console.log(terrain)
    
}

function draw () {
    background(0)
    stroke (70)
    noFill()

    rotateX(PI/3)

    translate(-w/2,-h/2+50)

    
    //frameRate(3)
    //rect(200,200,20,20)

    flying -= 0.1

    let yoff = flying

    for(let y=0; y<rows; y++){
        
        let xoff = 0
        for(let x=0; x<cols; x++){
            terrain[x][y] = map(noise(xoff,yoff),0,1,-110,110)
            xoff += 0.175
        }
        yoff += 0.175
    }


    for (let y= 0; y < rows; y++) {
        beginShape(TRIANGLE_STRIP)
        fill (175)
        for (let x = 0; x <cols; x++) {
            vertex(x*scl,y*scl, terrain[x][y])
            vertex(x*scl,(y+1)*scl, terrain[x][y+1])
            //rect (x*scl, y*scl,scl,scl)
        
       }
       endShape()
    }
}