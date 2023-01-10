var Skier = require('./Skier');

class Lift {
  constructor(liftLimit) {
    this.inService = true;
    this.limit = liftLimit;
    this.skiers = [];
    this.safetyBar = 'up'
}

admitSkier(skierName, liftTicket) {
    if (this.skiers.length < this.limit && liftTicket) {
        var newSkier = new Skier
    (skierName, liftTicket)
    this.skiers.push(newSkier)
    } else if(this.skiers.length >= this.limit && liftTicket){
        return `Sorry, ${skierName}. Please wait for the next lift!`
    } else {
        return `Sorry, ${skierName}. You need a lift ticket!`
    }
}

startLift() {
    if (this.skiers.length === this.limit) {
        this.safetyBar = 'down';
    } else {
        var liftSpace = this.limit - this.skiers.length
        if (liftSpace > 1) {
            var plural = 's'
        } else {
            var plural = ''
        }
        return `We still need ${liftSpace} more skier${plural}!`
    }
}


}

module.exports = Lift;