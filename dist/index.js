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
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordinalize = exports.byteSize = exports.vocabularies = exports.toQuantity = exports.romanNumeral = exports.numberToWords = void 0;
const numberToWords = __importStar(require("./numberToWords"));
exports.numberToWords = numberToWords;
const romanNumeral = __importStar(require("./romanNumeral"));
exports.romanNumeral = romanNumeral;
const toQuantity = __importStar(require("./toQuantity"));
exports.toQuantity = toQuantity;
const vocabularies = __importStar(require("./vocabularies"));
exports.vocabularies = vocabularies;
const byteSize = __importStar(require("./byteSize"));
exports.byteSize = byteSize;
const ordinalize = __importStar(require("./ordinalize"));
exports.ordinalize = ordinalize;
//# sourceMappingURL=index.js.map