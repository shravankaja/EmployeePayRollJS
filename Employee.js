class Employee {
    constructor(name,id) {
        this.name=name;
        this.id=id;   
    }
}

class EmployeeBuilder {
    constructor(name,id) {
        this.Employee = new Employee(name,id)
    }
    
    setAge(age) {
        this.Employee.age=age
        return this
    }

    setPhone(phone) {
        this.Employee.phone=phone
        return this
    }

    setEmployeeType(type) {
        this.Employee.type=type
        return this
    }

    setEmployeeWage(wage) {
        this.Employee.wage=wage
        return this
    }

    build() {
        return this.Employee
    }
}
 module.exports = EmployeeBuilder;