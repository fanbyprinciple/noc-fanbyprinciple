function setup(){
    createCanvas(600,600)
    background(0)

    len = 30
    a = PI/6

    for (i =1 ; i <1000; ++i){
    
        s = new Array()
        
        m = i
        do {
            s.push(m)
            m=collatz(m)
        } while(m!= 1)
        s.push(1)
        s.reverse()


    

        resetMatrix()
        translate(width/3, height/2)

        for (j =0 ; j < s.length ; j++){
            value = s[j]
            if(value%2 == 0) rotate (a) 
            else rotate(-a)

            strokeWeight(4)
            stroke(130,0,140,50)
            line (0,0,0,-len)
            translate(0, -len)

        }

    }

    console.log("Finished")
    

}

function draw(){}


function collatz(n){
    if(n%2 ==0){
        return n/2
    } else {
        return (3 * n + 1)/2
    }
}