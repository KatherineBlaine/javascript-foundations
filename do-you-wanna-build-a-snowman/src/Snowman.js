class Snowman {
    constructor(snowmanDetails){
        this.carrots = snowmanDetails.carrots
        this.coal = snowmanDetails.coal
        this.buttons = snowmanDetails.buttons
        this.snowballs = snowmanDetails.snowballs
        this.magicHat = false;
        this.hat = 0
        this.isWearingHat = false
    }

    canWearMagicHat(){
    this.hat += 1
    if (this.hat === 1){
        this.magicHat = true 
        this.isWearingHat = true
    }
    }

}



module.exports = Snowman;