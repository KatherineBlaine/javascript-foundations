class Stark {
    constructor(starkName) {
        this.name = starkName.name
        this.safe = false;
        if (starkName.area === undefined) {
            this.location = 'Winterfell'
        } else {
            this.location = starkName.area
        }
    }

    sayHouseWords() {
        if (this.safe === true) {
            return 'The North Remembers';
        } else {
            return 'Winter is Coming'
        }
    }
}

module.exports = Stark;