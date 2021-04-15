var expect = require('chai').expect
const EmployeeBuilder = require('./Employee')
const Randomization = require('./Randomization')
const Compute = require('./Compute')
const Simulate = require('./Simulate')
const Store = require('./Store')
const store = new Store();
const simulate = new Simulate();
const compute = new Compute();
const random = new Randomization();
const EmployeePayRollSystem = require('./EmployeePayRollSystem')
const employeePayRollSystem = new EmployeePayRollSystem();
const constants = require('./Constants')


describe("Testin Employee Pay Roll System", () => {

    it("Test check Attendence", () => {
        const result = random.getBoolean();
        expect(result).to.be.a('boolean')
    })

    it("Test calculate daily wage method", () => {
        const pay = compute.computeWage(constants.fullTimeEmployeeHours,
            constants.fullTimeEmployeePay);
        expect(pay).to.be.a('number')
        expect(pay).to.be.equal(160)
    })


    it("Test to calculate montly wage of employee based on type", () => {
        let emp = employeePayRollSystem.selectFullTimeOrPartTime("Shravna",1123);
        const result = employeePayRollSystem.calculateMonthlyWage(emp)
        expect(result[0]).to.be.within(0,3000)
    })

    it("Test if employee has meet ellgibilty critria to get salary", () => {
        let emp = employeePayRollSystem.selectFullTimeOrPartTime("Shravna",1123);
        const result = employeePayRollSystem.checkSalaryEligibilty(emp)
        expect(result).to.be.oneOf([true,false])
    })
    

    it("Test if correct total wage is stored by summing up ", () => {
        let emp = employeePayRollSystem.selectFullTimeOrPartTime("Shravna",1123);
        const result = employeePayRollSystem.calculateMonthlyWage(emp)
        let map1 = result[1];
        let map2 = map1.get('DayWiseWage')
        let sum = 0;
        for (let i = 0; i <= 20; i++) {
            str =  i;
            sum += map2.get(str);
        }
        expect(map1.get('TotalWage')).to.be.equal(sum);
    })
    
});

