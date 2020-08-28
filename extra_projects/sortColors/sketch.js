let colorArr = ['red', 'white', 'blue']
let i, l, h
let optext 

function setup() {
  createCanvas(400, 400);
  
  nums = [2,0,2,1,1,0]
  n = nums
  i=0, l=0, h=n.length-1;
  optext = "operation";
  
}

var sortColors = function(n) {
    let i=0, l=0, h=n.length-1;
    while(i<=h) {
        if(n[i]==0) {
            [n[i], n[l]] = [n[l], n[i]];
            i++; l++;
        } else if(n[i]==2) {
            [n[i], n[h]] = [n[h], n[i]];
            h--;
        } else i++
    }
};


function draw() {
  background(0);
  frameRate(1)
  
  for(let j=0; j< nums.length; ++j){
    fill(colorArr[nums[j]])
    rect(j*50 + 70,130,30,30) 
  }
  
  fill(255)
  textSize(32);
  text("i: "+ i, 10, 30)
  text("l: "+ l, 10, 70)
  text("h: "+ h, 10, 110)
  
  textSize(18)
  text("Ops: " + optext, 10, 220)
  
  
  
  if(n[i]==0) {
    optext = "n[i] is equal to 0. replace n[i] and n[l].";
    [n[i], n[l]] = [n[l], n[i]];
    i++; l++;
   } else if(n[i]==2) {
     optext = "n[i] is equal to 2. replace n[i] and n[h].";
      [n[i], n[h]] = [n[h], n[i]];
      h--;
   } else {
     optext = "No ops. increment i"
     i++}
  
  
  
}