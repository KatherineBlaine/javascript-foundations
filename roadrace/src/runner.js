class Runner {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.milesRun = 0;
        this.fitness = 25;
        this.completedRaces = [];
    }

    runSomeMiles(miles) {
        this.fitness += miles;
        this.milesRun += miles;
    }

    stretch() {
        this.fitness += .5;
    }

    runRace(raceName, raceMiles) {
        this.completedRaces.push(raceName);
        this.runSomeMiles(raceMiles);
    }
}

module.exports = Runner;
