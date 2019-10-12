
// Activation function
function sign(n){
    if (n < 0){
        return -1
    } else {
        return 1
    }
}

class Perceptron {
    constructor(){
        this.weights = []
        for (let i=0; i < this.weights.length;i++){
            this.weights[i] =  random(-1,1)

        }

        this.learningRate = 0.1
    }

    guess(input) {
        let sum = 0
        for (let i =0; i < this.weights.length; ++i){
            sum += inputs[i] * this.weights[i]
        }    

        let output = sign(sum)

        return output
    }

    train( inputs, target) {
        guess = this.guess(inputs)
        error = target - guess

        for (let i = 0; i < this.weights.length; ++i){
            this.weights[i] += (error * inputs[i] * this.learningRate)
        }
    }


}