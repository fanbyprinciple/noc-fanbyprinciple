var song
var sliderVolume
var sliderRate
var sliderPan
var sliderJump

var playButton
var jumpButton
var amp


function preload(){
    song = loadSound("./music/ma.mp3", loaded)
}

function setup(){
    createCanvas(400,200)

    amp = new p5.Amplitude()

    sliderVolume = createSlider(0,1,0.5,0.01)  
    
    sliderRate = createSlider(0,3,1,0.01)
    sliderPan = createSlider(-1,1,0,0.01)
    sliderJump = createSlider(0,song.duration(),0,0.01)

    playButton = createButton('|>').mousePressed(play)

    jumpButton = createButton("jump").mousePressed(jumpSong)
    background(51)

    song.addCue(5, changeBackground, color(random(255), random(255), random(255)))
    //song.play()
    
}

function changeBackground(c){
    background(c)

}

function play(){
    if (!song.isPlaying()){
        song.play()
        playButton.html("|>")
    } else {
        song.pause()
        playButton.html("||")
    }
   
}

function jumpSong(){
    var len = song.duration()
    song.jump(random(sliderJump.value()))

}




function loaded(){
    console.log("Song loaded, press play")
}

function draw(){

    //background(song.currentTime()*10,0,255)
    //print(song.currentTime())

    background(51)

    fill ('pink')
    vol = amp.getLevel()
    let diam = map(vol,0,0.3,10,200)
    console.log(vol)

    ellipse(width/2, height/2, diam + random(2), diam + random(2))

    song.setVolume(sliderVolume.value())
    song.pan(sliderPan.value())
    song.rate(sliderRate.value())

} 
