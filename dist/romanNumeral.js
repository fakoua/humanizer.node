"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RomanNumeralExtensions = void 0;
/// <summary>
/// Contains extension methods for changing a number to Roman representation (ToRoman) and from Roman representation back to the number (FromRoman)
/// </summary>
let RomanNumeralExtensions = /** @class */ (() => {
    class RomanNumeralExtensions {
        /// <summary>
        /// Converts Roman numbers into integer
        /// </summary>
        /// <param name="input">Roman number</param>
        /// <returns>Human-readable number</returns>
        static fromRoman(input) {
            if (input == null) {
                throw new Error("input can't be null");
            }
            input = input.trim().toUpperCase();
            let length = input.length;
            if ((length == 0) || RomanNumeralExtensions.isInvalidRomanNumeral(input)) {
                throw new Error("Empty or invalid Roman numeral string.");
            }
            let total = 0;
            let i = length;
            while (i > 0) {
                let digit = RomanNumeralExtensions.romanToDigit(input[--i].toString());
                if (i > 0) {
                    let previousDigit = RomanNumeralExtensions.romanToDigit(input[i - 1].toString());
                    if (previousDigit < digit) {
                        digit -= previousDigit;
                        i--;
                    }
                }
                total += digit;
            }
            return total;
        }
        static romanToDigit(char) {
            let rtnVal = 0;
            RomanNumeralExtensions.RomanNumerals.forEach(pair => {
                if (pair.key == char) {
                    rtnVal = pair.value;
                }
            });
            return rtnVal;
        }
        /// <summary>
        /// Converts the input to Roman number
        /// </summary>
        /// <param name="input">Integer input</param>
        /// <returns>Roman number</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the input is smaller than 1 or larger than 3999</exception>
        static toRoman(input) {
            const minValue = 1;
            const maxValue = 3999;
            if ((input < minValue) || (input > maxValue)) {
                throw new Error("ArgumentOutOfRangeException");
            }
            let sb = "";
            RomanNumeralExtensions.RomanNumerals.forEach(pair => {
                while (Math.floor(input / pair.value) > 0) {
                    sb += pair.key;
                    input -= pair.value;
                }
            });
            return sb;
        }
        static isInvalidRomanNumeral(input) {
            return !RomanNumeralExtensions.ValidRomanNumeral.test(input);
        }
    }
    RomanNumeralExtensions.RomanNumerals = [
        { key: "M", value: 1000 },
        { key: "CM", value: 900 },
        { key: "D", value: 500 },
        { key: "CD", value: 400 },
        { key: "C", value: 100 },
        { key: "XC", value: 90 },
        { key: "L", value: 50 },
        { key: "XL", value: 40 },
        { key: "X", value: 10 },
        { key: "IX", value: 9 },
        { key: "V", value: 5 },
        { key: "IV", value: 4 },
        { key: "I", value: 1 }
    ];
    RomanNumeralExtensions.ValidRomanNumeral = /^(?:(?=[MDCLXVI])((M{0,3})((C[DM])|(D?C{0,3}))?((X[LC])|(L?XX{0,2})|L)?((I[VX])|(V?(II{0,2}))|V)?))$/i;
    return RomanNumeralExtensions;
})();
exports.RomanNumeralExtensions = RomanNumeralExtensions;
//# sourceMappingURL=romanNumeral.js.map