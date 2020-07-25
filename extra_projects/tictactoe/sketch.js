let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

let players = ['X', 'O'];
let human = players[0]
let ai = players[1]  
let currentPlayer = human

let w
let h

let noLoopVariable = false
let resultP

function setup() {
  createCanvas(400, 400);
  w = width / 3;
  h = height / 3;
  

  resultP = createP('');
  resultP.style('font-size', '32pt');

  bestMove()
}

function equals3(a, b, c) {
  return (a == b && b == c && a != '');
}

function checkWinner() {
  let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  // Diagonal
  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }


  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == '') {
        openSpots++;
      }
    }
  }

  if (winner == null && openSpots == 0) {
    //console.log("tie")
    return 'tie'
  } else {
    return winner
  } 
}


function bestMove() {
  // AI to make its turn
  let bestScore = -Infinity
  let move
  for (let i = 0; i< 3; i++){
    for (let j=0; j<3; j++){
      // is the spot available ?
      if (board[i][j] == ''){
        //console.log(i,j)
        board[i][j] = ai
        let score = minimax(board, 0, false)
        //console.log(score)
        board[i][j] = ''
  
        if (score > bestScore) {
  
          bestScore = score
          move = {i,j}
        }
      }
    }
  }
  board[move.i][move.j] = ai
  currentPlayer = human
  
  if (callResult()) {
    noLoopVariable = true
  }

}

function mousePressed() {
  if (currentPlayer == human) {
      //human make turn
      let i = floor(mouseX/ w)
      let j = floor(mouseY/h)
    
      
      if (board[i][j] == ''){
          board[i][j] = human
          currentPlayer = ai
      

          //console.log("callResult")
          if(!callResult()) {
            bestMove()
          } else {
            noLoopVariable = true
          }
          
      }
  }
} 

let scores = {tie : 0, O : -10, X : 10 }

function minimax(board, depth, isMaximizing){
  let result = checkWinner()
  if (result != null){
    let score = scores[result]
    //console.log("finding score : ", scores[str(result)])
    return score
  } 

  if (isMaximizing){
    let bestScore = -Infinity
    for (let i=0; i <3; i++){
      for (let j=0; j <3; j++){
        if (board[i][j] == ''){
          board[i][j] = ai
          let score = minimax(board, depth + 1, false)
          board[i][j] = ''
          bestScore = max(score, bestScore)
          
        }
      }
    } 
    return bestScore
  } else {
    let bestScore = Infinity
    for (let i=0; i <3; i++){
      for (let j=0; j <3; j++){
        if (board[i][j] == ''){
          board[i][j] = human
          let score = minimax(board, depth + 1, true)
          board[i][j] = ''
          bestScore = min(score, bestScore)
          
        }
      }
    }
    return bestScore
  }
  
}

function callResult() {
  let result = checkWinner();
  //console.log(result)
  if (result != null) {
    
    //console.log("stop play")
    if (result == 'tie') {
      resultP.html("Tie!")
    } else {
      //console.log("there's a winner")
      resultP.html(`${result} wins!`);
    }

    return 1
    //noLoopVariable = false
  } else {
    
    resultP.style('font-size', '32pt');
    resultP.html(`${currentPlayer} Turn`)
    return 0
  }
}

function draw() {
  background(255);
  
  strokeWeight(4);

  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[i][j];
      textSize(32);
      if (spot == players[1]) {
        noFill();
        ellipse(x, y, w / 2);
      } else if (spot == players[0]) {
        let xr = w / 4;
        line(x - xr, y - xr, x + xr, y + xr);
        line(x + xr, y - xr, x - xr, y + xr);
      }

    }
  }

  if (noLoopVariable){
    //console.log("noLoop")
    noLoop()
  }

  
  // } else {
  //   nextTurn();
  // }

}