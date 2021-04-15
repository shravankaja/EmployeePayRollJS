class Randomization {
    getBoolean() {
        let randomNumber = Math.round(Math.random())
        if (randomNumber == 1) return true;
        else if (randomNumber == 0) return false;
    }
}

module.exports = Randomization;