"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const EnglishNumberToWordsConverter_1 = require("./src/Humanizer/Localisation/NumberToWords/EnglishNumberToWordsConverter");
/**
 * Number to be turned to words
 * (3501).toWords() -> "three thousand five hundred and one"
 */
Number.prototype.toWords = function () {
    return EnglishNumberToWordsConverter_1.EnglishNumberToWordsConverter.convert(this);
};
/**
 * Number to be turned to ordinal words
 * (1).toOrdinalWords() -> "first"
 */
Number.prototype.toOrdinalWords = function () {
    return EnglishNumberToWordsConverter_1.EnglishNumberToWordsConverter.convert(this, true);
};
//# sourceMappingURL=numberToWords.js.map