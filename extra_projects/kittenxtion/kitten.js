console.log("kittens of the world unite please! (why don't you guys ever listen!)")

let filenames = [
            "./img/geronimo-giqueaux-Wr9va-ELHvQ-unsplash.jpg",
            "./img/nadezhda-nikolaenko-UONij8U_oVc-unsplash.jpg",
            "./img/the-lucky-neko-rplhB9mYF48-unsplash.jpg",
            "./img/timur-m-SAKLELG-pO8-unsplash.jpg",
            "./img/zoritsa-valova-O0FLjjTSku4-unsplash.jpg"
]

let imgs = document.getElementsByTagName('img')

for (img of imgs){
    let r = Math.floor(Math.random() * filenames.length)
    let s = filenames[r]
    let url = chrome.extension.getURL(s)
    img.src = url
    console.log(img.src)
}