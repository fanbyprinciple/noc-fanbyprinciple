var txt = "Ashish may take a hashish but he ramains Ashish and does not become a hashashin."
var order = 4
var ngram = {}
var button

function setup(){
    noCanvas()

    for(var i=0 ; i < txt.length - order+1; ++i){
        var gram = txt.substring(i,i+order)

        if(!ngram[gram]){
            ngram[gram] = []
        }
        
        ngram[gram].push(txt.charAt(i+order))
        
        


    }

    button = createButton("generate")
    button.mousePressed(markovIt)

    
}

function markovIt(){

    var currentGram = txt.substring(0,order)
    let next
    let possibilities
    let result = currentGram

    for (var i = 0; i <10 ; i ++){
        
        possibilities = ngram[currentGram]

        if(!possibilities){
            break
        }

        next = random(possibilities)
        
        result += next
        currentGram = result.substring(result.length-order, result.length)

    }

    createP (result)

}

