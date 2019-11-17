var txt = "Ashish is a funny boy"
var order = 3
var ngram = []

function setup(){
    noCanvas()

    for(var i=0 ; i < txt.length - order+1; ++i){
        var gram = txt.substring(i,i+3)
        ngram.push(gram)


    }

    console.log(ngram)
}

