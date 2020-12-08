const fs = require('fs')

const ndjson = require('ndjson')

let pigs = []
let bowties = []

fs.createReadStream('pig.ndjson')
    .pipe(ndjson.parse())
    .on('data', function(obj){
        //console.log(obj)
        pigs.push(obj)
    })

fs.createReadStream('bowtie.ndjson')
    .pipe(ndjson.parse())
    .on('data', function(obj){
        bowties.push(obj)
    })

const express = require('express')
const { response } = require('express')
const app = express()
const port = 3000

app.listen(port, ()=>{
    console.log('listening on port 3000')
})

app.get('/pig', (req,res)=>{
    const r= Math.floor(Math.random() * pigs.length)
    res.send(pigs[r])
    // res.send('You have reached the pig !')

}) 

app.get('/bowtie', (req,res)=>{
    const r2= Math.floor(Math.random()* bowties.length)
    res.send(bowties[r2])
})

//serving static files in express
app.use(express.static('public'))