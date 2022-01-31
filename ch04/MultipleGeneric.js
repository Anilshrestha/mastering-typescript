"use strict";
function usingTwoTypes(first, second) {
    console.log(first, second);
}
usingTwoTypes(1, "test");
usingTwoTypes(1, "test");
usingTwoTypes(true, false);
usingTwoTypes("first", "second");
class Concatenator {
    concatenateArray(items) {
        let returnString = "";
        for (let i = 0; i < items.length; i++) {
            returnString += i > 0 ? "," : "";
            returnString += items[i].toString();
        }
        return returnString;
    }
}
let concator = new Concatenator();
let concatResult = concator.concatenateArray([
    "first", "second", "third"
]);
console.log(`concatResult = ${concatResult}`);
concatResult = concator.concatenateArray([
    1000, 2000, 3000
]);
console.log(`concatResult = ${concatResult}`);
function useT(item) {
    item.print();
    // item.id = 1;
    // item.name = "test";
}
function printProperty(object, key) {
    let propertyValue = object[key];
    console.log(`object[${key}] = ${propertyValue}`);
}
const obj = {
    id: 1,
    name: 'anil',
    address: 'Gokarna',
    print() { console.log(`${this.id}`); }
};
printProperty(obj, "id");
printProperty(obj, "name");
printProperty(obj, "address");
printProperty(obj, "print");
class LogClass {
    logToConsole(iPrintObj) {
        iPrintObj.print();
    }
}
let printObject = {
    print() { console.log(`printObject.print() called`); }
};
let logClass = new LogClass();
logClass.logToConsole(printObject);
class A {
}
class B {
}
function createClassInstance(arg1) {
    return new arg1();
}
let classAInstance = createClassInstance(ClassA);
//# sourceMappingURL=MultipleGeneric.js.map