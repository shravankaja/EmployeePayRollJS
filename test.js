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
        const pay = employeePayRollSystem.calculateDailyWage();
        expect(pay).to.be.a('number')
        expect(pay).to.be.equal(160)
    })

    it("To check is system is able to differntiate between full time and part time employees ", () => {

        const partTimeEmployee = new EmployeeBuilder("Shravan", 123).setEmployeeType("Part").build();
        expect(partTimeEmployee.type).to.be.equal("Part");
        const fullTimeEmployee = new EmployeeBuilder("Shravan", 123).setEmployeeType("Full").build();
        expect(fullTimeEmployee.type).to.be.equal("Full");
    })
});