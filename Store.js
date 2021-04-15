class Store {
    storeDailyWageAndDailyWage(name1, dailyWage, TotalWage, map) {
        let empSalary = new Map();
        empSalary.set('name', name1);
        empSalary.set('TotalWage', TotalWage)
        empSalary.set('DayWiseWage', map)
        return empSalary
    }
}

module.exports = Store