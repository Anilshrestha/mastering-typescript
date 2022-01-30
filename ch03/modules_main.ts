import { Module1 as MyMod1 } from "./modules/Module1";
//import { MultipleClass1, MultipleClass2 } from "./modules/MultipleExports";
import * as MultipleExports from './modules/MultipleExports';
import DefaultAdd, { ModuleNonDefaultExport } from "./modules/DefaultExport";


let mod1 = new MyMod1();
mod1.print();

let mc1 = new MultipleExports.MultipleClass1();
let mc2 = new MultipleExports.MultipleClass2();

let modeDefault = DefaultAdd(1, 2);
console.log(modeDefault);