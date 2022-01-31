function usingTwoTypes<A, B> (first: A, second: B) {
  console.log(first, second);
}

usingTwoTypes<number, string> (1, "test");
usingTwoTypes(1, "test");
usingTwoTypes<boolean, boolean>(true, false);
usingTwoTypes("first", "second");


class Concatenator< T extends Array<string> | Array<number>> {
  public concatenateArray(items: T) : string {
    let returnString = "";
    for(let i=0; i< items.length; i++) {
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

// concatResult = concator.concatenateArray([
//   true, false, true
// ]);

interface IPrintId {
  id: number;
  print(): void;
}

interface IPrintName {
  name: string;
  print(): void;
}

function useT< T extends IPrintId | IPrintName>(item: T) : void {
  item.print();
  // item.id = 1;
  // item.name = "test";
}

function printProperty<T, K extends keyof T> 
  (object: T, key: K) {
    let propertyValue = object[key];
    console.log(`object[${key}] = ${propertyValue}`);
}


const obj = {
  id: 1,
  name:'anil',
  address:'Gokarna',
  print() { console.log(`${this.id}`) }
};

printProperty(obj, "id");
printProperty(obj, "name");
printProperty(obj, "address");
printProperty(obj, "print");

interface IPrint {
  print(): void;
}

interface ILogInterface<T extends IPrint> {
  logToConsole(iPrintObj: T): void;
}

class LogClass<T extends IPrint>
  implements ILogInterface<T>
{
  logToConsole(iPrintObj: T): void {
    iPrintObj.print();
  }
}

let printObject: IPrint = {
  print() { console.log(`printObject.print() called`)}
}

let logClass = new LogClass();
logClass.logToConsole(printObject);

class A {}
class B {}

function createClassInstance<T>
  (arg1: { new(): T }): T {
    return new arg1();
}
let classAInstance = createClassInstance(ClassA);






