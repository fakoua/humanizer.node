"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = function (nb, nbString) {
    const nMod100 = nb % 100;
    if (nMod100 >= 11 && nMod100 <= 13) {
        return nbString + "th";
    }
    switch (nb % 10) {
        case 1:
            return nbString + "st";
        case 2:
            return nbString + "nd";
        case 3:
            return nbString + "rd";
        default:
            return nbString + "th";
    }
};
//# sourceMappingURL=Ordinalize.js.map