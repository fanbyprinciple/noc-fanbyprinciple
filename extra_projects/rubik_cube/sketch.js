
dim = 3
cube = new Array(dim)
len = 50

colors = ['red', 'white', 'green', 'yellow', 'blue', 'orange']

function setup(){
    createCanvas(800,800,WEBGL)

    count = 0
    for (i =0 ;  i < dim ; ++i ){
        cube[i] = new Array(dim)
        for(j =0 ; j < dim ; ++j){
            cube[i][j] = new Array(dim)
            for( k =0 ; k < dim ; ++k){
                offset = (len * dim -1)/2 
                x = len * i - offset
                y = len * j - offset
                z = len * k - offset


                colour = colors[0]
                count = count +1
                if (count <= 9) {
                    cube[i][j][k] = new Box(x,y,z,len, colors[0])  
                } else {
                    cube[i][j][k] = new Box(x,y,z,len,colors[1] )
                }
                print(colour)
                
            }
        }
    }
}

function draw() {
    background(0)
    rx = map (mouseX,0, width,0,6.28319)
    ry = map (mouseY, 0, height, 0 ,6.28319,)

    for (i =0 ; i < dim ; ++i){
        for (j=0 ; j < dim ; ++j){
            for (k =0; k < dim ; ++k){
                cube[i][j][k].show(rx,ry)
            }
        }
    }

}