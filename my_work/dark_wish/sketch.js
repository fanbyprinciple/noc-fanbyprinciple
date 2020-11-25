// Inspired from : https://knarniapop.itch.io/ending-it


whom_do_you_want_to_wish = 'Achu'

var text_array = [
                  'Modify poem here',
                  'Our days are numbered.',
                  'but take comfort',
                  'For wretched old age ',
                  'will always triumph over',
                  'careless youth' ,
                  'with insidious treachery.',
                  'As year race',
                  'they bleed unto each other',
                  'each more forgetful',
                  'than the last.',
                  'Callous indifferent sun',
                  'revolves all the same',
                  'as you',
                  'consider your mortality',
                  'when people wish you',
                  'happy birthday.',
                  'let it be memorable',
                  'and may it bring you',
                  'more happiness than'
                 ]

let font;

let trail = []
let a = 0

let textString = 'Dear Diary,';

let tsize
let currentText 

let currentX 
let currentY 

let currentIndex = 0

let bbox
let flag = false

function preload() {
  font = loadFont('./windsong.ttf');
}

function setup() {
  createCanvas(340, 650);
  background(50);
  
  
  
  currentX = 20
  currentY = 70
  
  currentText = textString
  
  tsize = 32
  
  bbox = font.textBounds(textString, currentX, currentY, tsize)
  
  for (let i=0; i <height; i+=50){
    rect(width-40,i,20,20)  
  }
  
  textFont(font);
  textSize(tsize);
  
  
  fill(255)
  
  text(textString, 20, 70);
    
}

function mousePressed(){
  
  mouse_x = mouseX
  mouse_y = mouseY
//   print("You clicked: ", mouse_x, mouse_y)
//   print("box: ", bbox.x, bbox.y, bbox.x + bbox.w, bbox.y +bbox.h)
  
  if(mouse_x > bbox.x && mouse_x<bbox.x + bbox.w){
    if(mouse_y > bbox.y && mouse_y<bbox.y + bbox.h){
        
        //currentX = random(100,600)
        currentX = 20
        //currentY = random(200,500)
        if(flag){
          currentY = (tsize +10) * (currentIndex-10 + 1) + 70
        } else {
          currentY = (tsize +10) * (currentIndex + 1) + 70  
        }
        
        if (currentIndex < text_array.length -1){
          currentIndex =  currentIndex + 1
          currentText = text_array[currentIndex]
        
        } else {
          background(0)
          currentX = (width-140)/2
          currentY = height/2
          textString = "Dear " + whom_do_you_want_to_wish + ","
          currentText = "Happy Birthday."
          fill(255)
          for (let i=0; i <height; i+=50){
            rect(width-40,i,20,20)  
           }
        
        }

        

        if(currentIndex == 10){
          background(50)
          fill(50)
          for (let i=0; i <height; i+=50){
              rect(width-40,i,20,20)  
          }  
          fill(255)
          for (let i=0; i <height; i+=50){
            rect(width-40,i,20,20)  
           }
          flag=true
        }
        

        bbox = font.textBounds(currentText, currentX, currentY, tsize);


        fill(255)
        text(textString, 20, 70);
        text(currentText, currentX, currentY)

      }
    }
  }
  

function draw() {
  
  // noFill();
  // stroke(255);
  // rect(bbox.x, bbox.y, bbox.w, bbox.h);

  
//   stroke(255);
//   point(mouseX, mouseY);
  
  noStroke();
  fill(255, 20, 189, 40);
  ellipse(mouseX,mouseY,5)
}