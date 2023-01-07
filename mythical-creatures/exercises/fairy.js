class Fairy {
    constructor(fairyName) {
        this.name = fairyName;
        this.dust = 10;
        this.clothes = {
            dresses: ['Iris']
        }
    }

receiveBelief() {
    this.dust += 1
}

believe() {
    this.dust += 10
}

makeDresses(flowers) {
    this.clothes.dresses.concat(flowers)
}

}

module.exports = Fairy;