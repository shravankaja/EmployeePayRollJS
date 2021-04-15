const Randomization = require('./Randomization');
const random = new Randomization()
const Compute = require('./Compute')
const compute = new Compute();

class Simulate {
    simulateDays(days,obj) {
        let totalWage = 0;
        let map = new Map()
        let noOfDaysPersent = 0;
        let noOfDaysAbsent = 0;
        let day;
        for (let i = 0; i <= days; i++) {
            let result = random.getBoolean();
            if (result == true) {
                noOfDaysPersent += 1
               // day = "day" + i;
               let temp = compute.calculateWageOFEmployee(obj)
                map.set(i, temp)
                totalWage += temp;
            }
            else if (result == false) {
                noOfDaysAbsent += 1
                day = "day" + i;
                map.set(i, 0)
            }
        }
        return [noOfDaysPersent, noOfDaysAbsent, noOfDaysPersent * 8, noOfDaysPersent * 4, map,totalWage]
    }
}

module.exports = Simulate