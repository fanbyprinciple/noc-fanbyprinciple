const url = 'http://localhost:8000/query'

let myCanvas, video, button

function setup(){
    myCanvas = createCanvas(320,240)
    createInstruction()
    createBtn()

    video = createCapture()
    video.size(320,240)
    video.hide()
}

function draw(){
    image (video,0,0)
}

function createInstruction(){
    createElement('h1', 'Runway im2txt(image to text)')
    createElement('p', 'RUNWAY SHOULD BE FREE')
}

function createBtn(){
    button = createButton('Image 2 txt')
    button.mousePressed(image2Txt)
    createElement('br')
}

function image2Txt(){
    if (myCanvas && myCanvas.elt){
        const canvasElt = myCanvas.elt
        const imageData = canvasElt.toDataURL('image/jpeg', 1.0)
        console.log(imageData)
        const postData = {
            "image": imageData
        }

        httpPost(url, 'json', postData, (output)=>{
            console.log(output)
            if(output){
                
                createElement('h2', output.caption)

                image2Txt()
            }
        })
    }
}