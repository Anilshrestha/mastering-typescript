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


// Class inheritance



