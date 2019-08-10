// n -represents total number of pegs
// s -represents source peg 
// a -represents auxillary peg 
// d -represents destination peg 

function tower(n,s,a,d) {
    if(n==1){
        console.log(s,"->",d)
        return
    }

    tower(n-1,s,d,a)
    console.log(s,"->",d)

    tower(n-1,a,s,d)
    return

}

function setup() {
    createCanvas(200,200)
    background(0)
    tower(3,"s","a","d")

}

function draw() {


}