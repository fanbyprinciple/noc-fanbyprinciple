let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

let contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';

let counter = 0

let userInput

function setup() {
  noCanvas()
  userInput = select('#userinput')
  userInput.changed(startSearch)
  
  
  function startSearch(){
    counter = 0
    goWiki(userInput.value())
  }
  
  function goWiki(term){
    //let term = userInput.value()
    counter = counter + 1
    if (counter < 10){
      let url = searchUrl + term
      loadJSON(url, gotSearch, 'jsonp')
    }
  }
  
  function gotSearch(data){
    
    let len = data[1].length
    let index = floor(random(len))
    //console.log(data[1][index])
    var title = data[1][index]
    title = title.replace(/\s+/g,'_')
    createDiv(title)
    console.log("Querying: " + title)
    let url = contentUrl + title
    loadJSON(url, gotContent, 'jsonp')
  }
  
  function gotContent(data){
    pageId = Object.keys(data.query.pages)[0]
    page = data.query.pages
    // console.log(pageId)
    let content = page[pageId].revisions[0]['*']
    //console.log(content)
    
    let wordRegex = /\b\w{4,}\b/g
    var words = content.match(wordRegex)
    var word = random(words)
    goWiki(word)
    
  }
}

function draw() {
  background(220);
}