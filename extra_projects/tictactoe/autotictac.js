let board = [
    // ['O', 'O', 'X'],
    // ['X', 'O', 'X'],
    // ['O', 'X', 'X']
    ['','',''],
    ['','',''],
    ['','','']
]

let players = ['X','O']
let currentPlayer
let available = []

function setup(){
    createCanvas(400,400)
    // if(random (1)<0.5){
    //     currentPlayer = players[0]
    // } else {
    //     currentPlayer = players[1]
    // }
    frameRate(30)
    currentPlayer = Math.floor(random(players.length))
    for (let i=0; i<3; ++i){
        for(let j=0; j <3; ++j){
            available.push([i,j])
        }
    }
}

function equals3(a,b,c){
    return (a == b && b == c && a != '')
}
function nextTurn(){
    let index = floor(random(available.length))
    let spot = available.splice(index,1)[0]
    let i = spot[0]
    let j = spot[1]
    board[i][j] = players[currentPlayer]
    currentPlayer = (currentPlayer + 1) % players.length
}

//faulty
function playerTurn(x,y){
    let w = floor(width/3)
    let h = floor(height/3)
    let spoty = floor(x/w)
    let spotx = floor(y/h)
    console.log((spotx*3 ) +(spoty ))
    index = spotx*3 + spoty -9 + available.length
    console.log(index)
    console.log(available)
    console.log(available[index])

    if(available[index]){
        let spot = available.splice(index,1)[0]
        let i = spot[0]
        let j = spot[1]
        board[i][j] = players[currentPlayer]
        currentPlayer = (currentPlayer + 1) % players.length
        //nextTurn()
    }
}

function mousePressed(){
    playerTurn(mouseX,mouseY)
    //nextTurn()
}

function checkWinner(){
    let winner = null

    for(let i=0; i<3; i++){
        if(equals3(board[i][0],board[i][1],board[i][2])){
            winner = board[i][0]
        } else if(equals3(board[0][i],board[1][i],board[2][i])){
            winner = board[0][i]
        }

    }

    if(equals3(board[0][0],board[1][1],board[2][2])){
        winner = board[0][0]
    }

    if (equals3(board[2][0],board[1][1],board[0][2])){
        winner = board[2][0]
    }

    if(winner == null && available.length == 0){
        return 'tie'
    } else {
        //console.log(winner)
        return winner
    }
}



function draw(){
    background(255)
    let w = width/3
    let h = height/3
    strokeWeight(4)

    line(w,0,w,height)
    line(w*2, 0, w*2, height)
    line(0,h,width, h)
    line(0,h*2,width, h*2)

    for(let j=0; j < 3; j++){
        for(let i=0; i<3; i++){
            x = w * i + w/2
            y = h * j + h/2
            let spot = board[i][j]
            //stroke(random(255),random(255),random(255))
            if(spot == players[1]){
                noFill()
                //ellipseMode(CENTER)
                ellipse(x,y,w/2)
            } else if(spot == players[0]){
                let xr = w/4
            
                line (x-xr, y-xr, x+xr, y+xr)
                line (x+xr, y-xr, x-xr, y+xr)
            }
        
        }

    }

    let result = checkWinner()
    if(result !=null){
        noLoop()
        let resultP = createP('')
        resultP.style('font-size', '32pt')
        if (result == 'tie'){
            resultP.html("Tie!")
        } else {
            resultP.html(`${result} wins!`)
        }
    } else {
        nextTurn()
    }

}