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

    simulateTwentyDaysAttandence() {
        let noOfDaysPersent = 0;
        let noOfDaysAbsent = 0;
        for (let i = 0; i <= 20; i++) {
            let result = this.checkPresentOrNot();
            if (result == true) {
                noOfDaysPersent += 1
            }
            else if (result == false) {
                noOfDaysAbsent += 1
            }
        }
        return [noOfDaysPersent, noOfDaysAbsent]
    }

    calculateMonthlyWage(obj) {
        let result = this.simulateTwentyDaysAttandence();
        let noOfDaysPersent = result[0];
        let dailyWage = this.calculateWageOFEmployee(obj)
        return dailyWage * noOfDaysPersent;
    }

}


module.exports = EmployeePayRollSystem;