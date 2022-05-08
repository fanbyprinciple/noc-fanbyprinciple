function setup() {
    createCanvas(400, 400);
    background(220);
    
  }
  
  function h_mirror_line(x1, y1, x2, y2){
      //actual
      line(x1, y1, x2, y2)
  
      //mirrored
      if(x2 > x1) {
        line(x2, y2, x2 - x1 + x2, y1)}
      else {
        line(x1, y1, x1 - x2 + x1, y2)}
  
  }
  
  function h_mirror_circle(x1, y1, r){
    //actual
    circle(x1, y1, r)
    
    //mirror
    circle(width-x1, y1, r)
    
  }
  
  function make_grid(w){
    
    number_of_rows = height/w
    number_of_columns = width/w
    
    for(i=0; i<number_of_columns; ++i){
      line((i * w), 0, (i * w ), height)
    }
    
    for(i=0; i<number_of_rows; ++i){
      line(0, (i * w), width, (i * w))
    }
    //print("make grid finished")
  }
  
  function mousePressed(){
     ellipse(mouseX, mouseY, 5, 5);
     ellipse(width - mouseX, mouseY, 5,5)
  }
  
  function draw() {
    
    make_grid(50)
    
    h_mirror_line(100,25,200,50)
    h_mirror_circle(100,120,50)
    h_mirror_line(width/2,150,100,200)
    h_mirror_line(100,200, width/2, 300)
    
    //h_mirror_line(150,250,300,350)
    
    
  }