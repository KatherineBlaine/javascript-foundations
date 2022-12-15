class Direwolf {
    constructor(direwolfName, direwolfHome, direwolfSize) {
        this.name = direwolfName;
        this.starksToProtect = [];
        this.huntsWhiteWalkers = true;
        if (direwolfHome === undefined) {
            this.home = 'Beyond the Wall';
        } else {
            this.home = direwolfHome;
        }
        if (direwolfSize === undefined) {
            this.size = 'Massive';
        } else {
            this.size = direwolfSize;
        }
    }

    protect(stark) {
        if (stark.location === this.home && this.starksToProtect.length <= 1) {
            stark.safe = true;
            this.huntsWhiteWalkers = false;
            return this.starksToProtect.push(stark)
        }
    }

    leave(stark) {
        this.starksToProtect.splice(this.starksToProtect.indexOf(stark), 1)
        stark.safe = false;
    }
}

module.exports = Direwolf;