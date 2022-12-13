var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(medusaName){
        this.name = medusaName
        this.statues = []
    }
    gazeAtVictim(person) {
        if (this.statues.length < 3) {
            this.statues.push(new Statue(person.name))
        } else {
            this.statues.push(new Statue (person.name))
            var personAgain = new Person(this.statues[0].name)
            this.statues.shift()
            personAgain.mood = 'relieved'
            return personAgain
        }
       
    }

}

module.exports = Medusa;