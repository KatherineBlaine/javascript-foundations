class Dragon {
    constructor(dragonName, dragonRider) {
    this.name = dragonName
    this.rider = dragonRider
    this.hungry = true
    this.eaten = []
    }
greet() {
    return `Hi, ${this.rider}!`
}

eat() {
    this.eaten.push('✅!')
    console.log(this.eaten)
    if (this.eaten.length < 3) {
        this.hungry = true;
    } else {
        this.hungry = false;
    }
}
}

module.exports = Dragon
