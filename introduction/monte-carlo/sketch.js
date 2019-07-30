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
    x = random(0,width)
    ellipse(x,180,16,16)

    t =3
}

function draw() {
    n = noise(t)
    //console.log(n)
    t = t+0.01

}
