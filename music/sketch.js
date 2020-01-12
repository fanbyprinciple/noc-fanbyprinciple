var song
var sliderVolume
var sliderRate
var sliderPan
var sliderJump

var playButton
var jumpButton;



function preload(){
    song = loadSound("./music/ma.mp3", loaded)
}

function setup(){
    createCanvas(400,200)

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

    song.setVolume(sliderVolume.value())
    song.pan(sliderPan.value())
    song.rate(sliderRate.value())

} 
