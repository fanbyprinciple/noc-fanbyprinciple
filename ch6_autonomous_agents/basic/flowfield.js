// from https://github.com/nature-of-code/noc-examples-p5.js/blob/master/chp06_agents/NOC_6_04_FlowField/flowfield.js#L28
class FlowField {
    constructor(r){
        
        this.resolution = r
        this.cols =  width/this.resolution
        this.rows = height/this.resolution

        this.field = this.make2Darray(this.cols)
        this.init()
    }

    make2Darray(n){
        let array = []
        for(let i=0; i<n; i++){
            array[i] = []
        }
        return array
    }

    init() {
        // Reseed noise so we get a new flow field every time
        // Need to get noise working
        noiseSeed(Math.floor(random(10000)));
        let xoff = 0;
        for (let i = 0; i < this.cols; i++) {
          let yoff = 0;
          for (let j = 0; j < this.rows; j++) {
            let theta = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
            //let theta = map(sin(xoff)+cos(yoff),-2,2,0,TWO_PI);
            // Polar to cartesian coordinate transformation to get x and y components of the vector
            this.field[i][j] = createVector(cos(theta), sin(theta));
            yoff += 0.1;
          }
          xoff += 0.1;
        }
      }

    mouseinit(){
        noiseSeed(Math.floor(random(10000)))
        let xoff = 0
        for(let i=0; i<this.cols; i++){
            for(let j=0; j <this.rows; j++){
                let currentVector = createVector(i*this.resolution,j*this.resolution)
                let centerVector = createVector(mouseX, mouseY)
                let steerVector = p5.Vector.sub(currentVector,centerVector)
                this.field[i][j] = steerVector
            }

        }
    }

    lookup(lookup) {
        let column = Math.floor(constrain(lookup.x / this.resolution, 0, this.cols - 1));
        let row = Math.floor(constrain(lookup.y / this.resolution, 0, this.rows - 1));
        //println(lookup.x);
        return this.field[column][row].copy();
      }

    display(){
        for(let i=0; i<this.cols; i++){
            for (let j=0; j<this.rows; j++){
                this.drawVector(this.field[i][j], i * this.resolution, j * this.resolution, this.resolution - 2);
            }
        }
    }

    drawVector(v,x,y,scay1){
        push()
        let arrowsize=4
        translate(x,y)
        stroke(200,100)
        rotate(v.heading())
        let len= v.mag()*scay1
        line(0,0,len,0)
        pop()
    }
}