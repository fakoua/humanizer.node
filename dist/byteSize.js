"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ByteSize_1 = require("./src/Humanizer/Bytes/ByteSize");
Number.prototype.bits = function () {
    return ByteSize_1.ByteSize.fromBits(this);
};
Number.prototype.bytes = function () {
    return ByteSize_1.ByteSize.fromBytes(this);
};
Number.prototype.kilobytes = function () {
    return ByteSize_1.ByteSize.fromKilobytes(this);
};
Number.prototype.megabytes = function () {
    return ByteSize_1.ByteSize.fromMegabytes(this);
};
Number.prototype.gigabytes = function () {
    return ByteSize_1.ByteSize.fromGigabytes(this);
};
Number.prototype.terabytes = function () {
    return ByteSize_1.ByteSize.fromTerabytes(this);
};
//# sourceMappingURL=byteSize.js.map