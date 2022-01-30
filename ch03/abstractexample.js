"use strict";
class EmployeeBase {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class OfficeWorker extends EmployeeBase {
    doWork() {
        console.log(`${this.name}: doing work`);
    }
}
class OfficeManager extends OfficeWorker {
    constructor() {
        super(...arguments);
        this.employees = [];
    }
    manageEmployees() {
        super.doWork();
        for (let employee of this.employees) {
            employee.doWork();
        }
    }
}
let anil = new OfficeWorker(1, 'Anil');
let sunil = new OfficeWorker(2, 'Sunil');
let manager = new OfficeManager(3, 'Harimanager');
console.log(anil);
console.log(sunil);
console.log(manager);
anil.doWork();
manager.employees.push(anil);
manager.employees.push(sunil);
manager.manageEmployees();
class BaseInterfaceClass {
    constructor() {
        this.id = 0;
    }
    print() {
        console.log(`this.id = ${this.id}`);
    }
}
class ImplementsExt extends BaseInterfaceClass {
    setId(id) {
        this.id = id;
    }
}
//# sourceMappingURL=abstractexample.js.map