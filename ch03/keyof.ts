interface IPerson {
  id: number;
  name: string;
}
type PersonPropertyName = keyof IPerson;
 // type PersonPropertyLiteral = "id" | "name"; // equivalent to this

function getProperty(key: PersonPropertyName, value: IPerson) {
   console.log(`${key} = ${value[key]}`);
}

getProperty("id",
  { id: 1, name: "firstName" }
);

getProperty("name",
  { id: 2, name: "secondName" }
);

// getProperty("telephone",
//   { id: 3, name: "thirdName" }
// );

class SimpleClass {
  id: number | undefined;
  print(): void {
    console.log(`SimpleClass.id = ${this.id}`);
  }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();

class ClassA implements IPrint {
  print(): void {
    console.log(`ClassA.print() called.`)
  };
}

class ClassB implements IPrint {
  print(): void {
    console.log(`ClassB.print() called.`)
  }
}

interface IPrint {
  print(): void;
}

function printClass(a: IPrint) {
  a.print();
}

let classA = new ClassA();
let classB = new ClassB();
printClass(classA);
printClass(classB);

class ClassC {
  print(): void {
    console.log(`ClassC.print() called.`)
  };
}
let classC = new ClassC();
printClass(classC);


class ClassWithConstructor {
  id: number;
  constructor(_id: number) {
    this.id = _id;
  }
}

 let classWithConstructor = new ClassWithConstructor(10);
 console.log(`classWithConstructor = 
  ${JSON.stringify(classWithConstructor)}
 `);

 class ClassWithPublicProperty {
   public id: number | undefined;
 }

 let publicAccess = new ClassWithPublicProperty();
 publicAccess.id = 10;

class ClassWithPrivateProperty {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}
let privateAccess = new ClassWithPrivateProperty(10);
// privateAccess.id = 20;

class ClassWithCtorMods {
   constructor(public id: number, private name: string) {

   }
}
let myClassMod = new ClassWithCtorMods(1, "test");
console.log(`myClassMod.id = ${myClassMod.id}`);
// console.log(`myClassMod.name = ${myClassMod.name}`);

class ClassWithReadonly {
  readonly name: string;
  constructor(_name: string) {
    this.name = _name;
  }
  setNameValue(_name: string) {
    // this.name = _name; // readonly is assignable only from constructor
  }
}

class ClassWithAccessors {
  private _id: number = 0;
  private _name: string = 'anil';
  get id(): number {
    console.log(`get id property`);
    return this._id;
  }
  set id(value: number) {
    console.log(`set id property`);
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(_name: string) {
    this._name = 'Sunil';
  }
}

let classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);

classWithAccessors.name = 'hari';
console.log(`classWithAccessors.name = ${classWithAccessors.name}`);

class StaticFunction {
  static printTwo() {
    console.log(`2`);
  }
}
StaticFunction.printTwo();

class StaticProperty {
  static count = 0;
  updateCount() {
    StaticProperty.count++;
  }
}

let firstInstance = new StaticProperty();
let secondInstance = new StaticProperty();
firstInstance.updateCount();
console.log(`StaticPropery.count = ${StaticProperty.count}`);
secondInstance.updateCount();
console.log(`StaticPropery.count = ${StaticProperty.count}`);

namespace FirstNameSpace {
  export class NameSpaceClass {}
  class NotExported {}
}

let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
// let notExported = new FirstNameSpace.NotExported();