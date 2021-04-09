var expect = require('chai').expect
const EmployeePayRollSystem = require('./EmployeePayRollSystem')
const employeePayRollSystem = new EmployeePayRollSystem();
const EmployeeBuilder = require('./Employee')


describe("Testin Employee Pay Roll System", () => {

    it("Test check Attendence", () => {
        const result = employeePayRollSystem.checkPresentOrNot();
        expect(result).to.be.a('boolean')
    })

    it("Test calculate daily wage method", () => {
        const pay = employeePayRollSystem.calculateDailyWageFullTime();
        expect(pay).to.be.a('number')
        expect(pay).to.be.equal(160)
    })

    it("To check is system is able to differntiate between full time and part time employees ", () => {
        const partTimeEmployee = new EmployeeBuilder("Shravan", 123).setEmployeeType("Part").build();
        expect(partTimeEmployee.type).to.be.equal("Part");
        const fullTimeEmployee = new EmployeeBuilder("Shravan", 123).setEmployeeType("Full").build();
        expect(fullTimeEmployee.type).to.be.equal("Full");
    })


    it("To calculate employe daily wage according to type", () => {
        const emp = new EmployeeBuilder("Shravan", 123).setEmployeeType("Full").build();
        const pay = employeePayRollSystem.calculateWageOFEmployee(emp)
        expect(pay).to.be.equal(160)
        const emp1 = new EmployeeBuilder("Mark", 124).setEmployeeType("Part").build();
        const payPart = employeePayRollSystem.calculateWageOFEmployee(emp1)
        expect(payPart).to.be.equal(32)
    })


    it("Test to calculate montly wage of employee based on type", () => {
        const emp = new EmployeeBuilder("Shravan", 123).setEmployeeType("Full").build();
        const emp1 = new EmployeeBuilder("Mark", 124).setEmployeeType("Part").build();
        const payFull = employeePayRollSystem.calculateMonthlyWage(emp);
        const payPart = employeePayRollSystem.calculateMonthlyWage(emp1)
        expect(payFull).to.be.above(1000)
        expect(payPart).to.be.below(1000)

    })
});