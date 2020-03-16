let wave 
let button
let playing
let slider

function setup(){
    createCanvas(100,100)

    wave = new p5.Oscillator()
    slider = createSlider(100,1200,100)


    wave.setType('sine')
    wave.start()
    wave.amp(0,1)
    wave.freq(300)
        
    playing  = false

    button = createButton('play/pause')
    button.mousePressed(toggle)
}

function toggle(){
    if(!playing){
        wave.amp(0.5,1)
        playing = true
    } else {
        playing = false
        wave.amp(0,1)
    }
}

function draw(){

    wave.freq(int(slider.value))
    if(playing){
        background(255,0,255)
    } else {
        background(51)
    }
    
}