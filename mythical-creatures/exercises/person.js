class Person {
    constructor(personName) {
        this.name = personName
        this.mood = 'frightened'
    }
}

module.exports = Person;

// new Person('Robbie') -
// { name: robbie, mood: frightened }