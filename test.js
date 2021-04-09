var expect = require('chai').expect
const EmployeePayRollSystem = require('./EmployeePayRollSystem')
const employeePayRollSystem = new EmployeePayRollSystem();


describe("Testin Employee Pay Roll System",() => {
    
    it("Test check Attendence",()=> {
        const result = employeePayRollSystem.checkAttandence();
        expect(result).to.be.true;
    })
});