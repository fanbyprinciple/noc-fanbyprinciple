x= 100
y =100
xspeed =1
yspeed =3.3

function setup() {
    createCanvas (200,200)
    smooth ()
    background(0)

}

function draw() {

    
    background(0)
    x=x + xspeed
    y=y + yspeed

    console.log(xspeed,yspeed)

    if((x>width)|| (x<0)){
        xspeed = xspeed * -1
        console.log("bounce x")

    }
    if ((y>height) || y<0){
        yspeed = yspeed * -1
        console.log("bounce y")
    }
    stroke (0)
    fill (175)
    ellipse (x,y,16,16)
}