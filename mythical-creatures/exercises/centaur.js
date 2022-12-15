class Centaur {
    constructor(centaurName) {
        this.name = centaurName.name;
        this.breed = centaurName.type;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
        this.energyLevel = 0;
    }

    shootBow() {
        this.energyLevel += 1;
        if (this.energyLevel < 3 && this.layingDown === false) {
            return 'Twang!!!';
        } else {
            this.cranky = true;
            return 'NO!'
        }
    }

    run() {
        this.energyLevel += 1;
        if (this.energyLevel < 3 && this.layingDown === false) {
            return'Clop clop clop clop!!!';
        } else {
            this.cranky = true;
            return 'NO!'
        }
    }

    sleep() {
        if (this.layingDown === true) {
            this.cranky = false;
            this.energyLevel = 0;
            return 'ZZZZ'
        } else {
            return 'NO!'
        }
    }

    layDown() {
        this.standing = false;
        this.layingDown = true;
    }

    standUp() {
        this.standing = true;
        this.layingDown = false;
    }

    drinkPotion() {
        if (this.layingDown === false) {
            this.cranky = false;
        } else {
            return 'Not while I\'m laying down!'
        }
    }
}

module.exports = Centaur;