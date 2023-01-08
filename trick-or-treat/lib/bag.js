class Bag {
    constructor() {
        this.empty = true;
        this.candies = [];
        this.count = 0;
    }

    fill(candy) {
        this.candies.push(candy)
        this.count += 1;
    }

    contains(candy) {
        for ( var i = 0; i < this.candies.length; i ++) {
            if (this.candies[i].type === candy) {
                return true;
            } else {
                return false;
            }
        }
    }
}

module.exports = Bag;