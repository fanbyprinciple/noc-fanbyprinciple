let wave 
let button
let playing
let slider
let env

function setup(){
    createCanvas(100,100)

    env = new p5.Env()
    env.setADSR(0.05,0.1,0.5,0.1)
    env.setRange(1.2, 0)

    wave = new p5.Oscillator()
    slider = createSlider(100,1200,100)


    wave.setType('sine')
    wave.start()
    wave.amp(env)
    wave.freq(300)
        
    playing  = false

    button = createButton('ting')
    button.mousePressed(toggle)
}

function toggle(){
    
    env.play()

    // if(!playing){
    //     wave.amp(0.5,1)
    //     playing = true
    // } else {
    //     playing = false
    //     wave.amp(0,1)
    // }
}

function draw(){

    wave.freq(int(slider.value))
    if(playing){
        background(255,0,255)
    } else {
        background(51)
    }
    
}