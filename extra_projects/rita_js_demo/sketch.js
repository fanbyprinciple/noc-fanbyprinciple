var input
var button
var dutton

var lexicon
var ptext = ''

function setup(){
    noCanvas()
    resetSketch()
    }

function resetSketch(){
    removeElements()
    createP('Type anything to see nouns change with rhymes. Rita.js.')
    lexicon = new RiLexicon()
    console.log("Lexicon initialised. Here is a random word, how about a ", lexicon.randomWord(5))
    input = createInput(ptext)
    button = createButton('submit')
    dutton = createButton('reset')
    input.changed(processRita)
    button.mousePressed(processRita)
    dutton.mousePressed(deleteText)
    input.size(200)

}

function deleteText(){
    SelectText = selectAll('.text')
    console.log(SelectText)
    resetSketch()
}

function processRita(){
    var s = input.value()
    var rs = new RiString(s)
    var words = rs.words()
    var pos = rs.pos()


    var output = ''
    for (var i=0; i<words.length; ++i){
        if(/nn.*/.test(pos[i])){
            output += " " +lexicon.rhymes(words[i])[random(lexicon.rhymes(words[i])).length]
        } else {
            output += " " + words[i]    
        }
        
    }
    console.log(output)
    ptext = output
    let mydiv = createP(ptext).addClass('text')
}