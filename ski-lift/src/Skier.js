class Skier {
    constructor(skierName, liftTicket) {
        this.name = skierName;
        this.hasLiftTicket = liftTicket;
        this.skillLevel = 1;
        this.nextSlope = 'green circle';
    }

    takeLesson() {
        this.skillLevel += 1;
    }

    pickSlope() {
        if (this.skillLevel === 3 && this.skillLevel < 5) {
            this.nextSlope = 'blue square'
        } else if (this.skillLevel >= 5) {
            this.nextSlope = 'black diamond'
        }
    }
}

module.exports = Skier;