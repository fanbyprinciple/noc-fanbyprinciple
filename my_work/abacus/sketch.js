//https://www.youtube.com/watch?v=bbKjXKV9QNA
let counterv = 0
let counterh = 0
let seperation = 260

let line_coords = []
let intx = 0.0
let inty = 0.0

let left = 0
let middle = 0
let right = 0

let result = 0

// let a = 1
let b = 3
let c = 4
  
  // let p = 1
let q = 5
let r = 7  

let inp1
let inp2
let btn1

let background_counter = 0

function take_input_b_c(){
  print(this.value())
  if (this.value().length ==2){
    b = int(this.value()[0])
    c = int(this.value()[1])
  } else if (this.value().length == 1){
    b = 0
    c = int(this.value()[0])
  } else {
    print("invalid input")
  }
  print(b, c)
}
function take_input_q_r(){
  print(this.value())
  if (this.value().length ==2){
    q = int(this.value()[0])
    r = int(this.value()[1])
  } else if (this.value().length == 1){
    q = 0
    r = int(this.value()[0])
  } else {
    print("invalid input")
  }
  print(q, r)
}

function reset_background(){
  rect(0, 0, canvas.width, canvas.height);
  background(0);
  btn1.hide();
  inp1.hide()
  inp2.hide()
  do_all()
}

function do_all(){
  // background_counter = 1
  
  // get_criss(a)
  get_criss(b)
  get_criss(c)
  
  // get_cross(p)
  get_cross(q)
  get_cross(r)
  
  
  draw_all_lines()
  
  display_intersections()
  
  left = left / 2
  middle = middle / 2
  right = right /2
  
  fill(255)
  textSize(24);
  text(left , 200, 200);
  text(middle, 320, 310);
  text(right, 460, 200);
  
  result = find_result(left, middle, right)
  
  textSize(48);
  fill(255);
  text(b + "" + c + " X " + q + r + " = " + result, 200, 70);
  
  strokeWeight(4)
  line(270, 140, 270, 480)
  line(420, 140, 420, 480)
  
  
}

function find_result(left, middle, right){
  
  let larr = 0
  let marr = 0
  let rarr = 0
  let tempm = middle
  let templ = left
  
  rarr = right % 10
  
  tempm += int(right / 10)
  
  print(middle)
  
  marr = tempm % 10
  
  print(marr)
  
  templ += int(tempm / 10)
  
  print(left)
  
  textSize(18);
  fill(255);
  text(left + "+" + middle + "+" + right + " =>  " + templ +  "(" + left +"+"+  int(tempm / 10 )+ ")" + "+" + tempm + "("+ middle +"+"+ int(right / 10) + ")" + "+" + rarr + "\n              (using carry over)" , 210, 90);
  //text("whats this? https://www.youtube.com/watch?v=bbKjXKV9QNA", 180, 140)
  
  
  return ""+templ + marr + rarr
}

function display_intersections(){
  for (let l of line_coords){
    for (let j of line_coords) {
      if(l[0] == j[0] && l[1] == j[1]){
        // print("same line")
        continue;
      } else {
        // print("different lines")
        intx = 0
        inty = 0
        // print(l,j)
        if (find_intersection(l[0], l[2], j[0],j[2], l[1], l[3], j[1], j[3])){
          circle(intx, inty, 5)
          
          //print(intx)
          
          if (intx < 270 && intx > 0){
            left += 1
          } else if (intx > 270 && intx < 420){
            middle += 1
          } else {
            right += 1
          }
        } else {
          // print("no dice")
        }
        
        // print(intx, inty)
      }
    }
  }
}


function draw_all_lines(){
  for (let l of line_coords) {
    line(l[0], l[1], l[2], l[3])
  }
}

function get_criss(n){
  
  // function to draw "\"
  for (let i=0; i <n; ++i){
    
    line_coords.push([0 + i * 10 + counterv * seperation, 150, 350 + i *10 + counterv * seperation, 450])
  }
  counterv += 1
  // line(100 + (n - 2) * 10 + counterv * seperation, 120, 100 + (n - 2) *10 + counterv * seperation, 360)
  
}

function get_cross(n){
  // function to get "/"
  for (let i=0; i <n; ++i){
    line_coords.push([350 + i * 10 + counterh * seperation,150, 0 + i *10 + counterh * seperation, 450]);
    
  }
  counterh += 1
  // line(100+ (n + 1) * 10 + counterh * seperation,120, 100 + (n + 1) *10 + counterh * seperation, 360)
  
}

// Function to test for intersections between line segments:
// taken from https://editor.p5js.org/peanutscratch/sketches/rk7Mi9USz
function find_intersection(x1,x2,x3,x4,y1,y2,y3,y4){
  
  var uA,uB;
  var den,numA,numB;

  den  = (y4-y3) * (x2-x1) - (x4-x3) * (y2-y1);
  numA = (x4-x3) * (y1-y3) - (y4-y3) * (x1-x3);
  numB = (x2-x1) * (y1-y3) - (y2-y1) * (x1-x3);
  
  // print(x1, x2, x3, x4, y1, y2, y3, y4)
  //Coincident? - If true, displays intersection in center of line segment
   if (abs(numA) == 0 && abs(numB) == 0 && abs(den) == 0) {
      intx = (x1 + x2) / 2;
      inty = (y1 + y2) / 2;
      return(true);
   }

   //Parallel? - No intersection
   if (abs(den) == 0) {
      intx = 0;
      inty = 0;
      return(false);
   }

   //Intersection?
   uA = numA / den;
   uB = numB / den;
  
   //If both lie w/in the range of 0 to 1 then the intersection point is within both line segments.
   if (uA < 0 || uA > 1 || uB < 0 || uB > 1) {
      intx = 0;
      inty = 0;
      return(false);
   }
   intx = x1 + uA * (x2 - x1);
   inty = y1 + uA * (y2 - y1);
   return(true);
}

function setup() {
  
  canvas = createCanvas(700, 500);
  
  
  
  inp1 = createInput('');
  inp1.position(150, 190);
  inp1.style('font-size', '48px');
  inp1.size(50);
  inp1.input(take_input_b_c);
  
  inp2 = createInput('');
  inp2.position(260, 190);
  inp2.style('font-size', '48px');
  inp2.size(50);
  inp2.input(take_input_q_r);
  
  stroke(255)
  fill(150)
  textSize(40)
  text1 = text("X", 220, 240)
  
  text2 = text("=", 330, 240)
  
  
  btn1 = createButton('click to calculate');
  btn1.position(370, 210);
  btn1.mousePressed(reset_background);
  btn1.style('font-size', '24px');
  
  
  //do_all(b,c,q,r)
}

function draw() {
 //background(0)
 //line(100, 150, 200, 350)
 //line(150, 150, 250, 350)
 //line(100, 350, 200,150)
 //line(150, 350, 250, 150)
  
 // if (background_counter == 1){
 //   print("here called : ", background)
 //   // why am i not able to change background to zero
 //   background(0)
 //   background_counter = 0
 //   do_all()
 // }
  
}


