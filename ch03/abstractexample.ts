abstract class EmployeeBase {
  public id: number;
  public name: string;
  
  abstract doWork(): void;

  constructor(id: number, name: string) {
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
  public employees: OfficeWorker[] = [];

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
  id: number = 0;
  print() {
    console.log(`this.id = ${this.id}`);
  }
}

interface IBaseInterfaceClassExt
  extends BaseInterfaceClass {
    setId(id: number): void;
  }

class ImplementsExt extends BaseInterfaceClass
  implements IBaseInterfaceClassExt {
    setId(id: number): void {
        this.id = id;
    }
  }

