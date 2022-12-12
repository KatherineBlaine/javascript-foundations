class Dragon {
    constructor(dragonName, dragonRider) {
    this.name = dragonName
    this.rider = dragonRider
    this.hungry = true
    this.eaten = 0;
    }
greet() {
    return `Hi, ${this.rider}!`
}

eat() {
    this.eaten += 1
    console.log(this.eaten)
    if (this.eaten < 3) {
        this.hungry = true;
    } else {
        this.hungry = false;
    }
}
}

module.exports = Dragon
