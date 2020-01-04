"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const Vocabularies_1 = require("./src/Humanizer/Inflections/Vocabularies");
String.prototype.pluralize = function () {
    return Vocabularies_1.Vocabularies.Default().pluralize(this);
};
String.prototype.singularize = function () {
    return Vocabularies_1.Vocabularies.Default().singularize(this);
};
//# sourceMappingURL=vocabularies.js.map