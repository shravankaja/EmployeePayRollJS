console.log("Welcome to Employee Pay Roll System ")
const constants = require('./Constants')
const EmployeeBuilder = require('./Employee')
const Randomization = require('./Randomization')
const Compute = require('./Compute')
const Simulate = require('./Simulate')
const Store = require('./Store')
const store = new Store();
const simulate = new Simulate();
const compute = new Compute();
const random = new Randomization();
class EmployeePayRollSystem {
    
    checkSalaryEligibilty(obj) {
        let result = simulate.simulateDays(20,obj)
        let type = obj.type
        if (result[0]!=0) {
            if (result[0] > 13 || result[2] > 95) return true;
            else return false;
        }
        else if (result[0]!=0) {
            if (result[0] > 13 || result[2] > 45) return true;
             else return false;
        }
    }
    
    selectFullTimeOrPartTime(name,id) {
        let result = random.getBoolean();
        let emp;
        if(result == true ) return  emp = new EmployeeBuilder(name,id).build();
        else if(result == false )  return  emp = new EmployeeBuilder(name,id).build();
    }
    
    calculateMonthlyWage(obj) {
        let payEligibilty = this.checkSalaryEligibilty(obj);
        let map;
        if (payEligibilty == true) {
            let result = simulate.simulateDays(20,obj)
            let dailyWage = compute.calculateWageOFEmployee(obj)
            let result1 = dailyWage * result[0];
            map = store.storeDailyWageAndDailyWage(obj.name, dailyWage, result[5], result[4])
           // console.log(map)
            return [result1, map];
        }
        else {
            console.log("Employee has not met condition to get salary this month")
            return [0, map];
        }
    }
}

let employeePayRollSystem = new  EmployeePayRollSystem();
let emp = employeePayRollSystem.selectFullTimeOrPartTime("Shravna",1123);
console.log(emp)
const result = employeePayRollSystem.calculateMonthlyWage(emp);
console.log(result)

module.exports = EmployeePayRollSystem;