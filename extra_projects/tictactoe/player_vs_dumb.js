let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  
  let players = ['X', 'O'];
  let human = players[0]
  let ai = players[1]  
  let currentPlayer
  let available;
  
  let w;
  let h
  
  let noLoopVariable = false
  let resultP
  
  function setup() {
    createCanvas(400, 400);
    w = width / 3;
    h = height / 3;
    frameRate(30);
    //currentPlayer = floor(random(players.length));
    currentPlayer = human
    available = 0
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        available += 1;
      }
    }
  
    resultP = createP('');
    resultP.style('font-size', '32pt');
  
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
  
    if (winner == null && available == 0) {
      //console.log("tie")
      return 'tie'
    } else if(winner != null) {
      return winner
    } else {
      return 
    }
  
  }
  
  //   function nextTurn() {
  //     let index = floor(random(available.length));
  //     let spot = available.splice(index, 1)[0];
  //     let i = spot[0];
  //     let j = spot[1];
  //     board[i][j] = ai;
  //     currentPlayer = human
  //   }
  
  function dumbNextTurn() {
    // AI to make its turn
    let avail = []
    for (let i=0; i < 3; i++){
        for (let j=0;j <3; j++){
            avail.push({i, j})
        }
    }
  
    let move = random(avail)
    while (board[move.i][move.j] != ''){
      move = random(avail)
    }
    board[move.i][move.j] = ai
    currentPlayer = human
    available -= 1
    if (callResult()) {
      noLoopVariable = true
    }
  }
  
  function bestMove() {
    // AI to make its turn
    for (let i = 0; i< 3; i++){
      for (let j=0; j<3; j++){
        // is the spot available ?
        if (board[i][j] == ''){
          board[i][j] = ai
        }
      }
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
            available -= 1
  
            //console.log("callResult")
            if(!callResult()) {
              dumbNextTurn()
            } else {
              noLoopVariable = true
            }
            
        }
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
      resultP.html(`${currentPlayer}'s turn`)
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