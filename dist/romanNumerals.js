"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RomanNumerals_1 = require("./src/Humanizer/Numbers/RomanNumerals");
Number.prototype.toRoman = function () {
    return RomanNumerals_1.RomanNumerals.toRoman(this);
};
String.prototype.fromRoman = function () {
    return RomanNumerals_1.RomanNumerals.fromRoman(this);
};
//# sourceMappingURL=romanNumerals.js.map