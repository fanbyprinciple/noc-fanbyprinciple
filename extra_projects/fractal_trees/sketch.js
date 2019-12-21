var sliderAngle
var sliderStoke 
var ang = 0
var thicc = 1
function setup(){
    
    createCanvas(400,400)
    sliderAngle = createSlider(0, TWO_PI, PI/4,0.01 )
    sliderStroke = createSlider(1, 50,0.01 )
}

function draw(){
    background(51)

    var len = 100
    ang = sliderAngle.value()
    thicc = sliderStroke.value()

    
    translate(200, height)
    branch(100, ang, thicc)
}

function branch(len, a, t ) {
    
    
    strokeWeight(t)
    stroke(255- thicc * 15,255-thicc *10 ,255)
    line(0, 0, 0, -len)
    
    translate(0, -len)
    if(len > 4){
        
        push()
        rotate(a)
        branch(len * 0.67, a, t * 0.67)
        pop()

        push()
        rotate(-a)
        branch(len * 0.67, a,t * 0.67 )
        pop()
    }
    
    
    //line(0,0,0,-len * 0.67)
}
