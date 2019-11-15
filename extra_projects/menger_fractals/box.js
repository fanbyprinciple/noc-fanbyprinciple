class Box {
    constructor(x,y,z,size){
        this.pos = createVector(x,y,z)
        this.r = size
    }

    show (){
        push()
        translate(this.pos.x, this.pos.y, this.pos.z)
        box(this.r)
        pop()

    }

    generate(){

        let boxes = []
        for(let x= -1; x < 2; x++){
            for(let y=-1; y < 2; y++){
                for (let z = -1; z< 2 ; z++){
                    let sym = abs(x) + abz(y0 + abs(Z))
                    let newR = this.r/3
                    let newB = new Box(this.pos.x + x*newR,this.pos.y + y*newR, this.pos.z + z*newR, newR)
                    boxes.push(newB)
                }
            }
        }

        return boxes
    }
}