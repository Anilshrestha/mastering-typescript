"use strict";
// any type
var item1 = { id: 1, name: "item 1" };
item1 = { id: 2 };
// explicit casting
var item1 = { id: 1, name: "item1" };
item1 = { id: 1 };
var item2 = { id: 2, name: "item2" };
item2 = { id: 2 };
// the let keyword
var index = 0;
if (index == 0) {
    var index = 2;
    console.log(`index = ${index}`);
}
console.log(`index = ${index}`);
//# sourceMappingURL=anyType.js.map