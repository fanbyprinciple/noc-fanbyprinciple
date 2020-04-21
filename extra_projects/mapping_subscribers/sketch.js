var subscriberData
const mappa = new Mappa('Leaflet')
let myMap
let canvas 

let data = []

const options = {
    lat: 0,
    lng: 0,
    zoom: 1.5,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload(){
    subscriberData = loadTable('./extra_projects/mapping_subscribers/subs_geo.csv', 'header')
    countries = loadJSON('./extra_projects/mapping_subscribers/countries.json')
}


function setup(){
    canvas = createCanvas(800,600)
    
    myMap = mappa.tileMap(options)

    myMap.overlay(canvas)

    let maxSubs = 0
    let minSubs = Infinity 

    for (let row of subscriberData.rows){
        let country = row.get('country_id').toLowerCase()
        let latlon = countries[country]
        if(latlon){
            let lat = latlon[0]
            let lon = latlon[1]

            let count = Number(row.get('subscribers'))
            data.push({
                lat,
                lon,
                count
            })

            if(count>maxSubs){
                maxSubs = count
            }
    
            if (count < minSubs){
                minSubs = count
            }
        }    
   }

   let minD = sqrt(minSubs)
   let maxD = sqrt(maxSubs)

   for (let country of data){
       country.diameter = map(sqrt(country.count), minD, maxD,1,20)
   }

}

function draw(){
    clear ()
    for (let country of data){
        const pix = myMap.latLngToPixel(country.lat,country.lon)
        fill(frameCount %255,0,200,100)
        const zoom = myMap.zoom()
        const scl = pow(2,zoom)
        ellipse(pix.x,pix.y,country.diameter *scl)
    }
    
}