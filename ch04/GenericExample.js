"use strict";
function printGeneric(value) {
    console.log(`typeof T is: ${typeof value}`);
    console.log(`value is ${value}`);
}
printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1 });
//# sourceMappingURL=GenericExample.js.map