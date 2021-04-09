console.log("Welcome to Employee Pay Roll System ")
const constants = require('./Constants')
const EmployeeBuilder = require('./Employee')
class EmployeePayRollSystem {

    constructor() {
        let map = new Map();
    }
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
        return [noOfDaysPersent, noOfDaysAbsent, noOfDaysPersent * 8, noOfDaysPersent * 4]
    }

    checkSalaryEligibilty(obj) {
        let result = this.simulateTwentyDaysAttandence();
        let type = obj.type
        if (type == "Full") {
            if (result[0] > 10 || result[2] > 80) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (type == "Part") {
            if (result[0] > 10 || result[2] > 80) {
                return true;
            }
            else {
                return false;
            }
        }

    }

    storeDailyWageAndDailyWage(name, dailyWage, TotalWage) {
        let empSalary = new Map();
        empSalary.set('name', name);
        empSalary.set('dailyWage', dailyWage)
        empSalary.set('TotalWage', TotalWage)
        return empSalary
    }

    calculateMonthlyWage(obj) {
        let payEligibilty = this.checkSalaryEligibilty(obj);
        let map;
        if (payEligibilty == true) {
            let result = this.simulateTwentyDaysAttandence()
            let dailyWage = this.calculateWageOFEmployee(obj)
            let result1 = dailyWage * result[0];
            map = this.storeDailyWageAndDailyWage(obj.name, dailyWage, result1)
            return [result1, map];
        }
        else {
            console.log("Employee has not met condition to get salary this month")
            return [0, map];
        }
    }
}

module.exports = EmployeePayRollSystem;