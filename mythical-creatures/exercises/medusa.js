var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(medusaName){
        this.name = medusaName
        this.statues = []
    }
    gazeAtVictim(person) {
        var newStatue = new Statue(person.name)
        this.statues.push(newStatue)
    }
}

module.exports = Medusa;