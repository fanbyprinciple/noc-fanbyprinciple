var phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;
var content = 'Touch me'
var cnv
var count = 0

function setup() {
  cnv = createCanvas(500, 500);
  cnv.mouseOver(changeTextIn)
  cnv.mouseOut(changeTextOut)
  
  noStroke();
  
  phase = 0;
  speed = 0.03;
  maxCircleSize = 20;
  numRows = 1;
  numCols = 3;
  numStrands = 2;
  
  colorA = color(253, 174, 120);
  colorB = color(226, 129, 161);

  bColor = color(4, 58, 74)
  
}

function draw() {
  background(bColor);
  phase = frameCount * speed;
  
  for(var strand = 0; strand < numStrands; strand += 1) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
    
    for(var col = 0; col < numCols; col += 1) {
      var colOffset = map(col, 0, numCols, 0, TWO_PI);
      var x = map(col, 0, numCols, 50, width - 50);
      
      for(var row = 0; row < numRows; row += 1) {
        var y = height/2 + row * 10 + sin(strandPhase + colOffset) * 50;
        var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;
        //circleSize = circleSize + count * 0.01
        
        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);
    
        text(content, x + circleSize, y , circleSize)
        
        ellipse(x +80, y, circleSize, circleSize);
      }
    }
  }
}

function changeTextIn() {
  

  content = 'Happy Birthday'
  phase = 0;
  speed = 0.06;
  maxCircleSize = 20;
  numRows =1;
  numCols = 6 + count;
  numStrands = 2;
  bColor = color(0, 0, 0)

  colorA = color(253, 174 , 120);
  colorB = color(226, 129, 161);
  
  count += 10
}

function changeTextOut() {
  content = 'Saumya'
  phase = 0;
  speed = 0.06;
  maxCircleSize = 20;
  numRows = 1;
  numCols = 8 + count;
  numStrands = 2
  bColor = color(4, 58, 74)

  colorA = color(253 - count, 174 - count, 120 - count);
  colorB = color(226 - count, 129 - count, 161 -count);
  
}