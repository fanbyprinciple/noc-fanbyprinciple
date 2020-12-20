const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
let pitch;
let mic;
let freq = 0;
let threshold = 1;

let notes = [{
  note: 'A',
  freq: 440
},{
  note: 'E',
  freq: 329.6276
},{
  note: 'C',
  freq: 261.6256
},{
  note: 'G',
  freq: 391.9954
}]

function setup() {
  createCanvas(400, 400);
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(listening);
}

function listening() {
  console.log('listening');
  pitch = ml5.pitchDetection(
    model_url,
    audioContext,
    mic.stream,
    modelLoaded
  );
}

function gotPitch(err,frequency){
  if(err){
    print(err)
  } else {
    if(frequency){
      print(frequency)  
      freq = frequency
    }
    pitch.getPitch(gotPitch)  
  }
}

function modelLoaded() {
  console.log('model loaded');
  pitch.getPitch(gotPitch);
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER)
  fill(255)
  textSize(32)
  text(freq.toFixed(2), width/2, height-150)
  
  let closestNote = -1
  let recordDiff = Infinity
  for( let i=0; i< notes.length; i++){
    let diff = freq - notes[i].freq
    if (abs(diff)< abs(recordDiff)){
      closestNote = notes[i]
      recordDiff = diff
    }
  }
  
  textSize(64)
  text(closestNote.note, width/2, height -50)
  
  let diff = recordDiff
  
  let alpha = map(abs(diff), 0, 100, 255, 0)
  rectMode(CENTER)
  fill(255, alpha)
  stroke(255)
  strokeWeight(1)
  if(abs(diff)< threshold){
    fill(0,255,0)
  }
  
  rect(200, 100, 200, 50)
  
  stroke(255)
  strokeWeight(4)
  line(200,0,200,200)
  
  noStroke()
  fill(255, 0,0)
  if (abs(diff)< threshold){
    fill(0,255,0)
  }
  
  rect(200 + diff / 2, 100,10,75)
}