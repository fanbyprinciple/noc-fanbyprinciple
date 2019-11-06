function setup(){
    createCanvas(600,600)
    background(0)

    len = 60
    a = PI/6

    translate(width/2, height)

    for ( i=1; i < 10000; i++){
        resetMatrix()
        n = i
        steps = 0
        do {
            console.log("step ",steps, " : ",n)
            n = collatz(n)
            if(n%2 == 0) rotate (a) 
            else rotate(-a)
            steps += 1 
            stroke(255)
            line (0,0,0,-len)
            translate(0, -len)

        
        } while (n != 1)

    }

    console.log("Finished")
    

}

function draw(){}


function collatz(n){
    if(n%2 ==0){
        return n/2
    } else {
        return 3 * n + 1
    }
}