"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignor
const ord = __importStar(require("./src/Humanizer/Inflections/Ordinalize"));
Number.prototype.ordinalize = function () {
    return ord.convert(this, this.toString());
};
String.prototype.ordinalize = function () {
    return ord.convert(Number(this), this);
};
//# sourceMappingURL=ordinalize.js.map