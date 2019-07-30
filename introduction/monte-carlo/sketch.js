function montecarlo() {
    while(true){
        r1 =random(1)
        probability = r1
        r2 = random(1)
        if(r2 <probability){
            return r1
        }
    }
}

function setup() {
    createCanvas(640,400)
    

    t =3
}

function draw() {
    n = noise(t)
    //console.log(n)
    m = noise(t+100)
    
    x = map(n,0,1,0,width)
    y = map(m,0,1,0,height)
    ellipse(x,y,16,16)

    t = t+0.01

}
