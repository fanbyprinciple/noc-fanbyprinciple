var values

var i =0
var j =0

function setup(){
    createCanvas(574,526)

    values = new Array(width)

    for(  k = 0; k < values.length; k++){
        values[k] = random(height)
    }

    //values = sort(values)

    // for (i =0; i< values.length ; ++i){
    //     for (j =0; j < values.length -i; ++j){
    //         if(values[j+ 1] < values[j]){
    //             temp = values[j+1]
    //             values[j+1] = values[j]
    //             values[j] = temp
    //         }
    //     }
    // }

}

function draw(){
    background(0)

    
    print(i, values.length)
    if (i < values.length ) {
        for(j =0;j< values.length -i-1; ++j){
            if(values[j+1] < values[j]){
                temp =values[j+1]
                values[j+1] = values[j]
                values[j] = temp
            }
        }
        
  
    } else {
        console.log("Finished")
        noLoop()

    }

    i++

    
    
    for (z=0; z < values.length; z++){
        stroke(255)
        line (z, height, z , height - values[z])
    }

}

