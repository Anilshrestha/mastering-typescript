"use strict";
// type PersonPropertyLiteral = "id" | "name"; // equivalent to this
function getProperty(key, value) {
    console.log(`${key} = ${value[key]}`);
}
getProperty("id", { id: 1, name: "firstName" });
getProperty("name", { id: 2, name: "secondName" });
// getProperty("telephone",
//   { id: 3, name: "thirdName" }
// );
class SimpleClass {
    print() {
        console.log(`SimpleClass.id = ${this.id}`);
    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();
class ClassA {
    print() {
        console.log(`ClassA.print() called.`);
    }
    ;
}
class ClassB {
    print() {
        console.log(`ClassB.print() called.`);
    }
}
function printClass(a) {
    a.print();
}
let classA = new ClassA();
let classB = new ClassB();
printClass(classA);
printClass(classB);
class ClassC {
    print() {
        console.log(`ClassC.print() called.`);
    }
    ;
}
let classC = new ClassC();
printClass(classC);
class ClassWithConstructor {
    constructor(_id) {
        this.id = _id;
    }
}
let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = 
  ${JSON.stringify(classWithConstructor)}
 `);
class ClassWithPublicProperty {
}
let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
class ClassWithPrivateProperty {
    constructor(id) {
        this.id = id;
    }
}
let privateAccess = new ClassWithPrivateProperty(10);
// privateAccess.id = 20;
class ClassWithCtorMods {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let myClassMod = new ClassWithCtorMods(1, "test");
console.log(`myClassMod.id = ${myClassMod.id}`);
// console.log(`myClassMod.name = ${myClassMod.name}`);
class ClassWithReadonly {
    constructor(_name) {
        this.name = _name;
    }
    setNameValue(_name) {
        // this.name = _name; // readonly is assignable only from constructor
    }
}
class ClassWithAccessors {
    constructor() {
        this._id = 0;
        this._name = 'anil';
    }
    get id() {
        console.log(`get id property`);
        return this._id;
    }
    set id(value) {
        console.log(`set id property`);
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(_name) {
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
    updateCount() {
        StaticProperty.count++;
    }
}
StaticProperty.count = 0;
let firstInstance = new StaticProperty();
let secondInstance = new StaticProperty();
firstInstance.updateCount();
console.log(`StaticPropery.count = ${StaticProperty.count}`);
secondInstance.updateCount();
console.log(`StaticPropery.count = ${StaticProperty.count}`);
var FirstNameSpace;
(function (FirstNameSpace) {
    class NameSpaceClass {
    }
    FirstNameSpace.NameSpaceClass = NameSpaceClass;
    class NotExported {
    }
})(FirstNameSpace || (FirstNameSpace = {}));
let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
// let notExported = new FirstNameSpace.NotExported();
//# sourceMappingURL=keyof.js.map