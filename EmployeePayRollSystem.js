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
        let type1 = obj.type;
        switch (type1) {
            case "Full":
                return this.calculateDailyWageFullTime();

            case "Part":
                return this.calculateDailyWagePartTime();

            default:
                return 0;
        }
    }

    simulateTwentyDaysAttandence(obj) {
        let map = new Map()
        let noOfDaysPersent = 0;
        let noOfDaysAbsent = 0;
        let day;
        for (let i = 0; i <= 20; i++) {
            let result = this.checkPresentOrNot();
            if (result == true) {
                noOfDaysPersent += 1
                day = "day" + i;
                map.set(day, this.calculateWageOFEmployee(obj))
            }
            else if (result == false) {
                noOfDaysAbsent += 1
                day = "day" + i;
                map.set(day, 0)
            }
        }
        return [noOfDaysPersent, noOfDaysAbsent, noOfDaysPersent * 8, noOfDaysPersent * 4, map]
    }

    checkSalaryEligibilty(obj) {
        let result = this.simulateTwentyDaysAttandence(obj);
        let type = obj.type
        if (type == "Full") {
            if (result[0] > 1 || result[2] > 10) {
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

    storeDailyWageAndDailyWage(name1, dailyWage, TotalWage, map) {
        let empSalary = new Map();
        empSalary.set('name', name1);
        empSalary.set('dailyWage', dailyWage)
        empSalary.set('TotalWage', TotalWage)
        empSalary.set('DayWiseWage', map)
        return empSalary
    }

    calculateMonthlyWage(obj) {
        let payEligibilty = this.checkSalaryEligibilty(obj);
        let map;
        if (payEligibilty == true) {
            let result = this.simulateTwentyDaysAttandence(obj)
            let dailyWage = this.calculateWageOFEmployee(obj)
            let result1 = dailyWage * result[0];
            map = this.storeDailyWageAndDailyWage(obj.name, dailyWage, result1, result[4])
            console.log(map)
            return [result1, map];
        }
        else {
            console.log("Employee has not met condition to get salary this month")
            return [0, map];
        }
    }
}

module.exports = EmployeePayRollSystem;