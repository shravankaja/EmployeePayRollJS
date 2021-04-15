const constants = require('./Constants')
const Random = require('./Randomization')
const random = new Random();
class Compute {
    computeWage(parameterOne,parameterTwo) {
        return parameterOne*parameterTwo;
    }

    calculateWageOFEmployee(obj) {
        let type1 = random.getBoolean();
        switch (type1) {
            case true:
                return this.computeWage(constants.fullTimeEmployeeHours,
                    constants.fullTimeEmployeePay);

            case false:
                return this.computeWage(constants.partTimeEmployeeHours,
                    constants.partTimeEmployeePay)
            default:
                return 0;
        }
    }
}

module.exports = Compute