// any type
var item1:any = { id: 1, name: "item 1"};
item1 = { id: 2}

// explicit casting
var item1 = <any>{ id: 1, name: "item1" }
item1 = { id: 1 };

var item2 = { id: 2, name: "item2" } as any;
item2 = { id: 2 };

// the let keyword
var index: number = 0;
if (index == 0) {
  var index: number = 2;
  console.log(`index = ${index}`);
}
console.log(`index = ${index}`);