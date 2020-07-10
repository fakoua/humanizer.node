"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * (5).Tens == 50
 */
Number.prototype.tens = function () {
    return this * 10;
};
Number.prototype.hundreds = function () {
    return this * 100;
};
Number.prototype.thousands = function () {
    return this * 1000;
};
Number.prototype.millions = function () {
    return this * 1000000;
};
Number.prototype.billions = function () {
    return this * 1000000000;
};
//# sourceMappingURL=numberToNumbers.js.map