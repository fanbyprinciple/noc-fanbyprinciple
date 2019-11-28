var values

function setup(){
    createCanvas(800,500)

    values = new Array(width)

    for(  i = 0; i < values.length; i++){
        values[i] = random(height)
    }

    //values = sort(values)

    for (i =0; i< values.length ; ++i){
        for (j =0; j < values.length -i; ++j){
            if(values[j+ 1] < values[j]){
                temp = values[j+1]
                values[j+1] = values[j]
                values[j] = temp
            }
        }
    }

}

function draw(){
    background(0)

    for (i=0; i < values.length; i++){
        stroke(255)
        line (i, height, i , height - values[i])
    }

}

