"use strict";
//The MIT License (MIT)
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByteSize = void 0;
//Copyright (c) 2013-2014 Omar Khudeira (http://omar.io)
//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:
//The above copyright notice and this permission notice shall be included in
//all copies or substantial portions of the Software.
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//THE SOFTWARE.
let ByteSize = /** @class */ (() => {
    class ByteSize {
        constructor(byteSize) {
            // Get ceiling because bis are whole units
            this.bits = Math.ceil(byteSize * ByteSize.BitsInByte);
            this.bytes = byteSize;
            this.kilobytes = byteSize / ByteSize.BytesInKilobyte;
            this.megabytes = byteSize / ByteSize.BytesInMegabyte;
            this.gigabytes = byteSize / ByteSize.BytesInGigabyte;
            this.terabytes = byteSize / ByteSize.BytesInTerabyte;
        }
        largestWholeNumberSymbol() {
            // Absolute value is used to deal with negative values
            if (Math.abs(this.terabytes) >= 1) {
                return ByteSize.TerabyteSymbol;
            }
            if (Math.abs(this.gigabytes) >= 1) {
                return ByteSize.GigabyteSymbol;
            }
            if (Math.abs(this.megabytes) >= 1) {
                return ByteSize.MegabyteSymbol;
            }
            if (Math.abs(this.kilobytes) >= 1) {
                return ByteSize.KilobyteSymbol;
            }
            if (Math.abs(this.bytes) >= 1) {
                return ByteSize.ByteSymbol;
            }
            return ByteSize.BitSymbol;
        }
        largestWholeNumberFullWord() {
            // Absolute value is used to deal with negative values
            if (Math.abs(this.terabytes) >= 1) {
                return ByteSize.Terabyte;
            }
            if (Math.abs(this.gigabytes) >= 1) {
                return ByteSize.Gigabyte;
            }
            if (Math.abs(this.megabytes) >= 1) {
                return ByteSize.Megabyte;
            }
            if (Math.abs(this.kilobytes) >= 1) {
                return ByteSize.Kilobyte;
            }
            if (Math.abs(this.bytes) >= 1) {
                return ByteSize.Byte;
            }
            return ByteSize.Bit;
        }
        largestWholeNumberValue() {
            // Absolute value is used to deal with negative values
            if (Math.abs(this.terabytes) >= 1) {
                return this.terabytes;
            }
            if (Math.abs(this.gigabytes) >= 1) {
                return this.gigabytes;
            }
            if (Math.abs(this.megabytes) >= 1) {
                return this.megabytes;
            }
            if (Math.abs(this.kilobytes) >= 1) {
                return this.kilobytes;
            }
            if (Math.abs(this.bytes) >= 1) {
                return this.bytes;
            }
            return this.bits;
        }
        static fromBits(value) {
            return new ByteSize(value / ByteSize.BitsInByte);
        }
        static fromBytes(value) {
            return new ByteSize(value);
        }
        static fromKilobytes(value) {
            return new ByteSize(value * ByteSize.BytesInKilobyte);
        }
        static fromMegabytes(value) {
            return new ByteSize(value * ByteSize.BytesInMegabyte);
        }
        static fromGigabytes(value) {
            return new ByteSize(value * ByteSize.BytesInGigabyte);
        }
        static fromTerabytes(value) {
            return new ByteSize(value * ByteSize.BytesInTerabyte);
        }
        /// <summary>
        /// Converts the value of the current ByteSize object to a string.
        /// The metric prefix symbol (bit, byte, kilo, mega, giga, tera) used is
        /// the largest metric prefix such that the corresponding value is greater
        ///  than or equal to one.
        /// </summary>
        toString() {
            return this.largestWholeNumberValue() + " " + this.largestWholeNumberSymbol();
        }
        /// <summary>
        /// Converts the value of the current ByteSize object to a string with 
        /// full words. The metric prefix symbol (bit, byte, kilo, mega, giga, 
        /// tera) used is the largest metric prefix such that the corresponding 
        /// value is greater than or equal to one.
        /// </summary>
        toFullWords() {
            var byteSizeAsFullWords = this.toString();
            // If there is more than one unit, make the word plural
            return this.largestWholeNumberValue() > 1 ? byteSizeAsFullWords + "s" : byteSizeAsFullWords;
        }
        equals(other) {
            return this.bits === other.bits;
        }
        compareTo(other) {
            if (this.bits - other.bits < 0) {
                return -1;
            }
            if (this.bits - other.bits > 0) {
                return 1;
            }
            return 0;
        }
        add(other) {
            return ByteSize.fromBits(this.bits + other.bits);
        }
        addBits(value) {
            return ByteSize.fromBits(this.bits + value);
        }
        addBytes(value) {
            return ByteSize.fromBytes(this.bytes + value);
        }
        addKilobytes(value) {
            return ByteSize.fromKilobytes(this.kilobytes + value);
        }
        addMegabytes(value) {
            return ByteSize.fromMegabytes(this.megabytes + value);
        }
        addGigabytes(value) {
            return ByteSize.fromGigabytes(this.gigabytes + value);
        }
        addTerabytes(value) {
            return ByteSize.fromTerabytes(this.terabytes + value);
        }
        subtract(other) {
            return ByteSize.fromBits(this.bits - other.bits);
        }
        static parse(s) {
            // Arg checking
            if (!s) {
                throw new Error("The input is null or empty");
            }
            // Setup the result
            let result = new ByteSize(4);
            // Get the index of the first non-digit character
            s = s.trimStart(); // Protect against leading spaces, https://github.com/microsoft/TypeScript/blob/master/lib/lib.es2019.string.d.ts
            let num;
            let found = false;
            // Acquiring culture specific decimal separator
            let decSep = "."; //Convert.ToChar(CultureInfo.CurrentCulture.NumberFormat.NumberDecimalSeparator);
            // Pick first non-digit number
            for (num = 0; num < s.length; num++) {
                if (!(!isNaN(Number(s[num])) || s[num] == decSep)) {
                    found = true;
                    break;
                }
            }
            if (found == false) {
                return new ByteSize(1); //TODO: should raize error
            }
            let lastNumber = num;
            // Cut the input string in half
            var numberPart = s.substring(0, lastNumber).trim();
            var sizePart = s.substring(lastNumber, s.length).trim();
            // Get the numeric part
            if (isNaN(Number(numberPart))) {
                return new ByteSize(2); //TODO: should raize error
            }
            let nb = Number(numberPart);
            // Get the magnitude part
            switch (sizePart.toUpperCase()) {
                case ByteSize.ByteSymbol:
                    if (sizePart == ByteSize.BitSymbol) { // Bits
                        if (nb % 1 != 0) // Can't have partial bits
                         {
                            return new ByteSize(3); //TODO: should raize error
                        }
                        result = ByteSize.fromBits(nb);
                    }
                    else { // Bytes
                        result = ByteSize.fromBytes(nb);
                    }
                    break;
                case ByteSize.KilobyteSymbol:
                    result = ByteSize.fromKilobytes(nb);
                    break;
                case ByteSize.MegabyteSymbol:
                    result = ByteSize.fromMegabytes(nb);
                    break;
                case ByteSize.GigabyteSymbol:
                    result = ByteSize.fromGigabytes(nb);
                    break;
                case ByteSize.TerabyteSymbol:
                    result = ByteSize.fromTerabytes(nb);
                    break;
            }
            return result;
        }
    }
    ByteSize.MinValue = ByteSize.fromBits(Number.MIN_VALUE);
    ByteSize.MaxValue = ByteSize.fromBits(Number.MAX_VALUE);
    ByteSize.BitsInByte = 8;
    ByteSize.BytesInKilobyte = 1024;
    ByteSize.BytesInMegabyte = 1048576;
    ByteSize.BytesInGigabyte = 1073741824;
    ByteSize.BytesInTerabyte = 1099511627776;
    ByteSize.BitSymbol = "b";
    ByteSize.Bit = "bit";
    ByteSize.ByteSymbol = "B";
    ByteSize.Byte = "byte";
    ByteSize.KilobyteSymbol = "KB";
    ByteSize.Kilobyte = "kilobyte";
    ByteSize.MegabyteSymbol = "MB";
    ByteSize.Megabyte = "megabyte";
    ByteSize.GigabyteSymbol = "GB";
    ByteSize.Gigabyte = "gigabyte";
    ByteSize.TerabyteSymbol = "TB";
    ByteSize.Terabyte = "terabyte";
    return ByteSize;
})();
exports.ByteSize = ByteSize;
//# sourceMappingURL=ByteSize.js.map