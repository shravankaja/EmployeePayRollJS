console.log("Welcome to Employee Pay Roll System ")
const constants = require('./Constants')
const EmployeeBuilder = require('./Employee')
class EmployeePayRollSystem {

    checkPresentOrNot() {
        let randomNumber = Math.round(Math.random())
        if (randomNumber == 1) {
            return true;
        }
        else if (randomNumber == 0) {
            return false;
        }
    };

    calculateDailyWageFullTime() {
        return constants.fullTimeEmployeeHours * constants.fullTimeEmployeePay;
    }

    calculateDailyWagePartTime() {
        return constants.partTimeEmployeeHours * constants.partTimeEmployeePay;
    }

    calculateWageOFEmployee(obj) {
        const type = obj.type;
        switch (type) {
            case "Full":
                return this.calculateDailyWageFullTime();

            case "Part":
                return this.calculateDailyWagePartTime();

            default:
                return 0;
        }
    }

}

module.exports = EmployeePayRollSystem;