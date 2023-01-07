class Roadrace {
    constructor(race) {
        this.name = race.title;
        this.location = race.city;
        this.participants = [];
    }

    setDistance(raceLength) {
        this.distance = raceLength;
        return `The ${this.name} in ${this.location} is a ${raceLength} mile race.`
    }

    registerParticipants(runner) {
        this.participants.push(runner);
    }

    completeRace() {
        for (var i = 0; i < this.participants.length; i ++) {
            this.participants[i].completedRaces.push(this.name);
            this.participants[i].milesRun += this.distance;
        }
    }
}

module.exports = Roadrace;
