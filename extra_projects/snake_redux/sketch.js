let snake
let rez = 2
let food 
let w 
let h 

function setup() {
    createCanvas(400,400)
    w = floor(width/rez)
    h = floor(height/ rez)
    frameRate(30)
    snake = new Snake()
    foodLocation()
    

}

function foodLocation() {
    let x = floor(random(w))
    let y = floor(random(h))
    food = createVector(x, y)
    
}

function keyPressed(){
    if(keyCode == LEFT_ARROW){
        snake.setDir(-1,0)
    } else if (keyCode == RIGHT_ARROW){
        snake.setDir(1,0)
    } else if (keyCode == UP_ARROW){
        snake.setDir(0,-1)
    } else if (keyCode == DOWN_ARROW){
        snake.setDir(0,1)
    } else {
        console.log("wrong key pressed!")
    }
}
function draw(){
    scale(rez)
    background(0)
    snake.update()
    snake.show()

    noStroke()
    fill(255, 0, 0)
    rect (food.x, food.y, 10,10)
}