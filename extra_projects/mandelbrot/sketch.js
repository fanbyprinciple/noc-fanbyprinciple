var minval = -0.5
var maxval = 0.5

var minslider
var maxslider

function setup(){
    createCanvas(360,240)
    pixelDensity(1)

    colorMode(HSB, 100)

    minslider = createSlider(-2.5,0,-2.5,0.01)
    maxslider = createSlider(0,2.5,2.5,0.01)
}    
    
function draw(){
    var maxiterations  = 100
    loadPixels()

    for (var x = 0; x < width; x++){
        for (var y=0; y < height ; y++){

            var a = map(x,0,width, minslider.value(),maxslider.value())
            var b = map(y,0, height, minslider.value(),maxslider.value())
            var n = 0
            var z = 0

            var ca = a
            var cb = b

            while(n < maxiterations){
                var aa = a*a - b*b
                var bb = 2 * a * b
            
                a = aa + ca
                b = bb + cb

                if ((a+b) > 16){
                    break
                }
                n++
            }

            var bright = map(n,0,maxiterations,0,1)
            bright = map(sqrt(bright), 0 ,1,0,255 )
            if(n === maxiterations){
                bright = 0
            }

            
            var pix = (x + y * width) * 4 
            pixels[pix + 0] = (bright,255,255)
            pixels[pix + 1] = bright
            pixels[pix + 2] = bright
            pixels[pix + 3] = 255
        }
    }
    updatePixels()
}