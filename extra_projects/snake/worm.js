let snake

class Snake {
    constructor(){
        this.body = []
        this.len = 1
        this.body[0] = createVector(0,0)
        this.xdir = 0
        this.ydir = 0
    }

    update(){
        
        // this.body[0].x += this.xdir
        // this.body[0].y += this.ydir 
        
        

        let head = this.body[this.len-1].copy()
        this.body.shift()
        head.x += this.xdir
        head.y += this.ydir
        this.body.push(head)
            
    }
        

    show(){
        for(let i=0; i < this.len; ++i){
                noStroke()
                fill (prevColor)
                rect(this.body[i].x, this.body[i].y, 1,1)
            }
        
        
    }

    grow(){
        
        let protein = this.body[this.body.length -1].copy()
        this.body.push(protein)
        this.len += 1
    }

    checkEdges(){
        if(this.body[0].x < 0) this.body[0].x = w
        if(this.body[0].x > w ) this.body[0].x = 0
        if(this.body[0].y < 0) this.body[0].y = h
        if(this.body[0].y > h) this.body[0].y = 0
    }

    endGame(){
        let x = this.body[this.body.length -1].x
        let y = this.body[this.body.length -1].y

        
        if (x > w-1 || x < 0 || y >h-1 || y < 0){
            return true
        }

        for (let i = 0 ; i < this.body.length -1 ; ++i){
            let part = this.body[i]
            if(part.x == x && part.y == y){
                return true
            }

        }

        return false
    }

    run(){
        this.update()
        //this.checkEdges()
        this.show()
    }
}

function keyPressed(){
    if (keyCode === UP_ARROW){

        snake.ydir = -1
        snake.xdir = 0
    }
    else if (keyCode === DOWN_ARROW){
        snake.ydir = 1
        snake.xdir = 0
    }
    else if (keyCode === LEFT_ARROW){
        snake.xdir = -1
        snake.ydir = 0
    }
    else if (keyCode === RIGHT_ARROW){
        snake.xdir = 1
        snake.ydir = 0
    }

    else if (key == ' '){
        snake.grow()
    }

    else {
        console.log("Buzzz. Wrong key pressed.")
    }

}

let food

var rez  = 20

let w 
let h

function setup(){
    
    createCanvas (400,400)
    
    frameRate(10)

    prevColor =  color(0,0,0)
    
    w = floor(width/rez)
    h = floor(width/rez)

    snake = new Snake()
    foodLocation()
    
}

//count =0

var foodColor
var prevColor

function foodLocation(){
    if (snake.len == 1){
        foodColor = color(random(255), random(255),random(255))
    
        let foodx = floor(random(w))
        let foody = floor(random(h))
        food = createVector(foodx, foody)
    } else {
        prevColor = foodColor
        foodColor = color(random(255), random(255),random(255))
    
        let foodx = floor(random(w))
        let foody = floor(random(h))
        food = createVector(foodx, foody)
    }
    
}

function foodEaten(){
    
    if(snake.body[snake.len-1].x == food.x && snake.body[snake.len -1].y == food.y){
        foodLocation()
        snake.grow()
        return true
    }

    return false

}




function draw(){
    scale(rez)
    background (200)
    // if(count > 15){
    //     background (255)
    //     count =0
    // }
    // count = count + 1
   
    snake.run()

    
    noStroke()
    fill(foodColor)
    rect(food.x,food.y,1,1)
    if (foodEaten()){
        console.log('yum')
    } 
    else if (snake.endGame()){
        print("end game")
        background(155,0,0)
        noLoop()
    }
    
}
