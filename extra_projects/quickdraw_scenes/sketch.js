// decrecementofeliz's original
// from https://codepen.io/decrecementofeliz/pen/oNNbOxv

let scenes = [

[ 
  ['ocean', 10, 255,1.3],
  ['ocean', 250, 295,1.2],
  ['ocean', 20, 345,1.3],
  ['ocean', 270, 385,1],
  ['ocean', 350, 415,1],
  ['ocean', 10, 455,1.3],
  ['sun', 255, 55,0.5],
],
[
  ['spoon',20,150,0.5],
  ['fork',350,150,0.5],
  ['knife',410,150,0.5],
  ['circle',150,150,0.7],
  ['circle',180,180,0.5],
  ['bread', 280, 30, 0.4]
],
[
  ['ocean',60,150,1.4],
  ['submarine',200,300,0.8],
  ['fish',60,300,0.4],
  ['fish',400,210,0.3],
],
[
  //['ocean',100,150,0, 'green', 1.2],
  ['mountain',155,275,1],
  ['cloud',55,140,0.4],
  ['cloud',170,40,0.4],
  ['parachute',320,70,0.7],
  ['airplane', 50, 50, 0.25],
],
[
  //['rain',100,70,0, 'darkblue',1],
  ['house',0,255,1],
  ['tree',315,275,0.8],
  ['grass',160,400,0.7],
  ['flower',255,380,0.3],
  ['cloud',1,1,0.6],
  ['sun',355,20,0.5],
  ['bird',180,80,0.3],
],
[
  ['moon',0,0,1],
  ['star', 255,0,0.5],
  ['star', 255,255,0.2],
  ['star', 255,120,0.3],
  ['star', 0,265,0.3],
  ['star', 120,265,0.2],
  ['star', 365,165,0.2],
  ['star', 365,265,0.1],
  ['star', 55,320,0.25],
  ['star', 165,300,0.5],
  ['star', 315,300,0.3],
],
]


const url1 = "https://quickdrawfiles.appspot.com/drawing/"
const url2 = "?isAnimated=false&format=json&key="

let strokeIndex =0
let index = 0
let cat
let prevx,prevy
let keyInput
let start
let sceneIndex = 0
let scene = scenes[sceneIndex]
let offsetx, offsety
let scaling

function setup() {
  createCanvas(510, 510).parent('sketch-holder');
  background(245)
  sel = createSelect().attribute('tabindex', 2).parent('intro').addClass('form-control')
  btn = createButton('Draw Again').attribute('tabindex', '1').attribute('hidden', true).parent('buttons').addClass('btn btn-primary')
  png = createButton('Save as png').attribute('tabindex', 3).attribute('hidden', true).parent('buttons').addClass('btn btn-secondary')
  list = createElement('ul').parent('list')
  sel.option('a sunset in the ocean','0');
  sel.option('a dinner table', '1');
  sel.option('a submarine','2');
  sel.option('a mountain view','3');
  sel.option('a country house','4');
  sel.option('a starry night','5');
  
  scene = scenes[sel.value()]
  
  btn.mouseClicked(reset)
  sel.changed(reset)
  png.mouseClicked(savepng)
  setTimeout(newCat(scene[0][0]), 2000)
}

function savepng(){
  save('Drawing.png')
  return false
}

function reset(){
  noLoop()
  clear()
  cat = undefined
  list.html('')
  sel.attribute('disabled', true)
  btn.attribute('disabled', true)
  png.attribute('disabled', true)
  btn.removeAttribute('hidden')
  png.removeAttribute('hidden')
  
  scene = scenes[sel.value()]
  prevx = undefined
  prevy = undefined
  setTimeout(newCat(scene[0][0]), 2000)
  background(245)
  offsetx = scene[0][1]
  offsety = scene[0][2]
  scaling = scene[0][3]
  sceneIndex = 0
  strokeIndex = 0
  index = 0
  loop()
}

function newCat(category){
  let apiKey = 'AIzaSyCLxdiMV5-46xuFWFbdDhVoJi7DMwe-H9Q';
  loadJSON(url1 + category + url2 + apiKey, gotCat)
}

function gotCat(data){
  cat = data.drawing
  catword = data.word
  catid = data.index
  catcountry = data.countrycode
}

function draw() {
  if (cat){
    let x = ((cat[strokeIndex][0][index] + 1) * scaling) + offsetx
    let y = ((cat[strokeIndex][1][index] + 1)* scaling) + offsety
    stroke(0)
    strokeWeight(3)
    if (prevx !== undefined){
      line(prevx, prevy, x, y)
      fill(172)
    }
    index ++
    if(index == cat[strokeIndex][0].length){
      strokeIndex++
      prevx = undefined
      prevy = undefined
      index = 0
      
      catlength = cat.length
      if (strokeIndex == cat.length){
        list.html('<li>' + catword + '<span class="info"> #' + catid + '<br>(offset x: '+offsetx+', offset y: '+offsety+', scale: '+scaling+')</span></li>', true)
        cat = undefined
        strokeIndex = 0
        sceneIndex++
        
        if(scene.length == sceneIndex){
          sel.removeAttribute('disabled')
          btn.removeAttribute('disabled').removeAttribute('hidden')
          png.removeAttribute('disabled').removeAttribute('hidden')
          noLoop()
        }
        else {
          offsetx = scene[sceneIndex][1] + 1
          offsety = scene[sceneIndex][2] + 1
          scaling = scene[sceneIndex][3]
          print('sceneIndex ' +sceneIndex + ' scene.length: ' + scene.length + ' cat.length: ' +catlength+' strokeIndex: ' + strokeIndex + ' index: ' + index);
          setTimeout(newCat(scene[sceneIndex][0]), 10)
        }
      }
    } else {
      prevx = x
      prevy = y
    }
  }

}