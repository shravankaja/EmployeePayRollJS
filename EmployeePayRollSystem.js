console.log("Welcome to Employee Pay Roll System ")
const constants = require('./Constants')
class EmployeePayRollSystem {

    checkPresentOrNot () {
        let randomNumber = Math.round(Math.random())
        if(randomNumber == 1) {
            return true;
        }
        else if(randomNumber == 0) {
            return false;
        }
    };

    calculateDailyWage () {
        return constants.fullTimeEmployeeHours*constants.fullTimeEmployeePay;

    }
}

module.exports = EmployeePayRollSystem;