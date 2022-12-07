class Vampire {
    constructor(vampireName, vampirePet) {
    this.name = vampireName
    this.thirsty = true
    this.ouncesDrank = 0
    if (vampirePet === undefined) {
        this.pet = 'bat'
    } else {
        this.pet = vampirePet
    }
    }

drink() {
    if (this.ouncesDrank < 50) {
        this.ouncesDrank += 10
        this.thirsty = false
    } else { 
        return 'I\'m too full to drink anymore!'
    }
}

}

module.exports = Vampire