var expect = require('chai').expect
const EmployeePayRollSystem = require('./EmployeePayRollSystem')
const employeePayRollSystem = new EmployeePayRollSystem();


describe("Testin Employee Pay Roll System",() => {
    
    it("Test check Attendence",()=> {
        const result = employeePayRollSystem.checkPresentOrNot();
        expect(result).to.be.a('boolean')
    })

    it("Test calculate daily wage method", () => {
        const pay = employeePayRollSystem.calculateDailyWage();
        expect(pay).to.be.a('number')
        expect(pay).to.be.equal(160)
    })
});