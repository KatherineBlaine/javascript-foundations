class Pirate {
    constructor(pirateName, pirateJob) {
        this.name = pirateName
        this.cursed = false
        this.booty = 0
        if (pirateJob === undefined) {
        this.job = 'scallywag'
        } else {
            this.job = pirateJob
        }
    }

    robShip() {
        if (this.booty >= 500) {
            this.cursed = true
            return 'ARG! I\'ve been cursed!'
        } else this.booty += 100
        return 'YAARRR!'
    }
    
    liftCurse() {
        if (this.cursed === true) {
            this.booty -= 300
            this.cursed = false
            return 'Your curse has been lifted!'
        } else {
            return 'You don\'t need to lift a curse!'
        }
    }
}

module.exports = Pirate

// If statements in classes do not use 'this' they use params
// always need to use the variable names that the test file uses!
// lines 86 - 90? What does the timeTravel function do???

// For loop, but what is it looping on?