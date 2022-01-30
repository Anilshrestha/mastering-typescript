"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Module1_1 = require("./modules/Module1");
//import { MultipleClass1, MultipleClass2 } from "./modules/MultipleExports";
const MultipleExports = __importStar(require("./modules/MultipleExports"));
const DefaultExport_1 = __importDefault(require("./modules/DefaultExport"));
let mod1 = new Module1_1.Module1();
mod1.print();
let mc1 = new MultipleExports.MultipleClass1();
let mc2 = new MultipleExports.MultipleClass2();
let modeDefault = DefaultExport_1.default(1, 2);
console.log(modeDefault);
//# sourceMappingURL=modules_main.js.map