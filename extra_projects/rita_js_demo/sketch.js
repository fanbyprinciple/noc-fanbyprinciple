var input
var button

var lexicon

function setup(){
    noCanvas()
    createP('Type anything to see nouns change. Rita.js.')
    lexicon = new RiLexicon()
    console.log("Lexicon initialised. Here is a random word, how about a ", lexicon.randomWord(5))
    input = createInput("It was a dark and stormy night.")
    button = createButton('submit')
    input.changed(processRita)
    button.mousePressed(processRita)
    input.size(200)
}

function processRita(){
    var s = input.value()
    var rs = new RiString(s)
    var words = rs.words()
    var pos = rs.pos()


    var output = ''
    for (var i=0; i<words.length; ++i){
        if(/nn.*/.test(pos[i])){
            output += " " +lexicon.randomWord(pos[i])
        } else {
            output += " " + words[i]    
        }
        
    }
    console.log(output)
    createP(output)
}