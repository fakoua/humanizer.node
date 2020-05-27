"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowQuantityAs = void 0;
// @ts-ignore
const Vocabularies_1 = require("./src/Humanizer/Inflections/Vocabularies");
require("./numberToWords");
/**
 * Enumerates the ways of displaying a quantity value when converting
 */
var ShowQuantityAs;
(function (ShowQuantityAs) {
    /** Indicates that no quantity will be included in the formatted string. */
    ShowQuantityAs[ShowQuantityAs["None"] = 0] = "None";
    /**
     * Indicates that the quantity will be included in the output, formatted
     * as its numeric value (e.g. "1").
     */
    ShowQuantityAs[ShowQuantityAs["Numeric"] = 1] = "Numeric";
    /**
     * Incidates that the quantity will be included in the output, formatted as
     * words (e.g. 123 => "one hundred and twenty three").
     */
    ShowQuantityAs[ShowQuantityAs["Words"] = 2] = "Words";
})(ShowQuantityAs = exports.ShowQuantityAs || (exports.ShowQuantityAs = {}));
/**
 * Prefixes the provided word with the number and accordingly pluralizes or singularizes the word
 * @param {number} quantity - The quantity of the word
 * @param {ShowQuantityAs} showQuantityAs - How to show the quantity. Numeric by default
 * @returns {string} - The converted value
 */
String.prototype.toQuantity = function (quantity, showQuantityAs = ShowQuantityAs.Numeric) {
    let transformedInput = quantity == 1
        ? Vocabularies_1.Vocabularies.Default().singularize(this, false)
        : Vocabularies_1.Vocabularies.Default().pluralize(this, false);
    if (showQuantityAs == ShowQuantityAs.None) {
        return transformedInput;
    }
    if (showQuantityAs == ShowQuantityAs.Numeric) {
        return `${quantity} ${transformedInput}`;
    }
    return `${quantity.toWords()} ${transformedInput}`;
};
//# sourceMappingURL=toQuantity.js.map