interface IBase {
  id: number;
}

interface IDerivedFromBase extends IBase {
  name:string;
}

class IdNameClass implements IDerivedFromBase {
  id: number = 0;
  name: string = "nameString";
}

interface IBaseStringOrNumber {
  id: string | number;
}

interface IDerivedFromBaseNumber extends IBaseStringOrNumber {
  id:number;
}

interface IMultiple extends
  IDerivedFromBase,
  IDerivedFromBaseNumber
{
  description: string;
}

let multipleObject: IMultiple = {
  id:1,
  name: "myName",
  description: "myDescription"
}

console.log(multipleObject);


// Class inheritance
class BaseClass implements IBase {
  id: number = 0;
}

class DerivedFromBaseClass 
  extends BaseClass
  implements IDerivedFromBase
{
  name: string = "nameString";
} 


interface IFirstInterface {
  id: number;
}
interface ISecondInterface {
  name: string;
}

class MultipleInterfaces implements 
  IFirstInterface,
  ISecondInterface
{
  id: number = 0;
  name: string = "nameString";
}

// The super functioin

class BaseClassWithCtor {
  id: number
  constructor(id: number) {
    this.id = id;
  }
}

class DeriveClassWithCtor extends BaseClassWithCtor {
  private name: string
  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }
}

class BaseClassWithFn {
  print(text: string) {
    console.log(`BaseClassWithFn.print() = ${text}`);
  }
}

class DerivedClassWithFn extends
  BaseClassWithFn {
    print(text: string) {
      console.log(`DerivedClassWithFn.print() = ${text}`);
    }
  }

  let deriveClassWithFn = new DerivedClassWithFn();
  deriveClassWithFn.print('anil');

class DerivedClassFnCallThrough extends
  BaseClassWithFn {
    print(text: string) {
      super.print(`from DerivedClassFnCallThrough= ${text}`);
    }
  }

let derivedClassFnCallThrough = new DerivedClassFnCallThrough();
derivedClassFnCallThrough.print('sunil');

class BaseClassProtected {
  protected id: number;
  private name: string = "";
  constructor(id: number) {
    this.id = id;
  }
}

class AccessProtected extends BaseClassProtected {
  constructor(id: number) {
    super(id);
    console.log(`base.id= ${this.id}`);
    // console.log(`base.name= ${this.name}`);
  }
}

let accessProtected = new AccessProtected(1);
// accessProtected.id = 1;
// accessProtected.name = 'anil'; 



