var Human = require('./human')

class Ogre {
    constructor(ogreData){
        this.name = ogreData.name;
        this.swings = 0;
        if (ogreData.abode === undefined){
            this.home = 'Swamp';
        } else {
            this.home = ogreData.abode;
        }
    }

    swingAt(human) {
        this.swings += 1;
    }

    encounter(human) {
        if (human.notices === false) {
            return human.encounterCounter += 1
        } else {
            this.swingAt()
            return human.encounterCounter += 1
        }
    }
    
}

module.exports = Ogre;