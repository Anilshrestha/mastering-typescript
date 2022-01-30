"use strict";
class IdNameClass {
    constructor() {
        this.id = 0;
        this.name = "nameString";
    }
}
let multipleObject = {
    id: 1,
    name: "myName",
    description: "myDescription"
};
console.log(multipleObject);
// Class inheritance
class BaseClass {
    constructor() {
        this.id = 0;
    }
}
class DerivedFromBaseClass extends BaseClass {
    constructor() {
        super(...arguments);
        this.name = "nameString";
    }
}
class MultipleInterfaces {
    constructor() {
        this.id = 0;
        this.name = "nameString";
    }
}
// The super functioin
class BaseClassWithCtor {
    constructor(id) {
        this.id = id;
    }
}
class DeriveClassWithCtor extends BaseClassWithCtor {
    constructor(id, name) {
        super(id);
        this.name = name;
    }
}
class BaseClassWithFn {
    print(text) {
        console.log(`BaseClassWithFn.print() = ${text}`);
    }
}
class DerivedClassWithFn extends BaseClassWithFn {
    print(text) {
        console.log(`DerivedClassWithFn.print() = ${text}`);
    }
}
let deriveClassWithFn = new DerivedClassWithFn();
deriveClassWithFn.print('anil');
class DerivedClassFnCallThrough extends BaseClassWithFn {
    print(text) {
        super.print(`from DerivedClassFnCallThrough= ${text}`);
    }
}
let derivedClassFnCallThrough = new DerivedClassFnCallThrough();
derivedClassFnCallThrough.print('sunil');
class BaseClassProtected {
    constructor(id) {
        this.name = "";
        this.id = id;
    }
}
class AccessProtected extends BaseClassProtected {
    constructor(id) {
        super(id);
        console.log(`base.id= ${this.id}`);
        // console.log(`base.name= ${this.name}`);
    }
}
let accessProtected = new AccessProtected(1);
// accessProtected.id = 1;
// accessProtected.name = 'anil'; 
//# sourceMappingURL=inheritance.js.map