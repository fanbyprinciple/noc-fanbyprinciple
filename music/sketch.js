var song
var sliderVolume
var sliderRate
var sliderPan
var playButton

var pressCount = 0

function preload(){
    song = loadSound("./music/ma.mp3", loaded)
}

function setup(){
    createCanvas(400,200)

    sliderVolume = createSlider(0,1,0.5,0.01)  
    sliderRate = createSlider(0,3,1,0.01)
    sliderPan = createSlider(-1,1,0,0.01)

    playButton = createButton('|>').mousePressed(play)

    //song.play()
    
}

function play(){
    if (pressCount %2 ==0){
        song.loop()
    } else {
        song.stop()
    }

    pressCount += 1    
}




function loaded(){
    console.log("Song loaded, press play")
}

function draw(){
    background(0)

    song.setVolume(sliderVolume.value())
    song.pan(sliderPan.value())
    song.rate(sliderRate.value())

} 