//The MIT License (MIT)

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

export class ByteSize {

    public static readonly MinValue: ByteSize = ByteSize.fromBits(Number.MIN_VALUE);
    public static readonly MaxValue: ByteSize = ByteSize.fromBits(Number.MAX_VALUE);

    public static readonly BitsInByte: number = 8;
    public static readonly BytesInKilobyte: number = 1024;
    public static readonly BytesInMegabyte: number = 1048576;
    public static readonly BytesInGigabyte: number = 1073741824;
    public static readonly BytesInTerabyte: number = 1099511627776;

    public static readonly BitSymbol: string = "b";
    public static readonly Bit: string = "bit";
    public static readonly ByteSymbol: string = "B";
    public static readonly Byte: string = "byte";
    public static readonly KilobyteSymbol: string = "KB";
    public static readonly Kilobyte: string = "kilobyte";
    public static readonly MegabyteSymbol: string = "MB";
    public static readonly Megabyte: string = "megabyte";
    public static readonly GigabyteSymbol: string = "GB";
    public static readonly Gigabyte: string = "gigabyte";
    public static readonly TerabyteSymbol: string = "TB";
    public static readonly Terabyte: string = "terabyte";

    public bits: number
    public bytes: number
    public kilobytes: number
    public megabytes: number
    public gigabytes: number
    public terabytes: number

    public largestWholeNumberSymbol(): string {
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

    public largestWholeNumberFullWord(): string {
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

    public largestWholeNumberValue(): number {

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

    constructor(byteSize: number) {
        // Get ceiling because bis are whole units
        this.bits = Math.ceil(byteSize * ByteSize.BitsInByte);

        this.bytes = byteSize;
        this.kilobytes = byteSize / ByteSize.BytesInKilobyte;
        this.megabytes = byteSize / ByteSize.BytesInMegabyte;
        this.gigabytes = byteSize / ByteSize.BytesInGigabyte;
        this.terabytes = byteSize / ByteSize.BytesInTerabyte;
    }

    public static fromBits(value: number): ByteSize {
        return new ByteSize(value / ByteSize.BitsInByte);
    }

    public static fromBytes(value: number): ByteSize {
        return new ByteSize(value);
    }

    public static fromKilobytes(value: number): ByteSize {
        return new ByteSize(value * ByteSize.BytesInKilobyte);
    }

    public static fromMegabytes(value: number): ByteSize {
        return new ByteSize(value * ByteSize.BytesInMegabyte);
    }

    public static fromGigabytes(value: number): ByteSize {
        return new ByteSize(value * ByteSize.BytesInGigabyte);
    }

    public static fromTerabytes(value: number): ByteSize {
        return new ByteSize(value * ByteSize.BytesInTerabyte);
    }

    /// <summary>
    /// Converts the value of the current ByteSize object to a string.
    /// The metric prefix symbol (bit, byte, kilo, mega, giga, tera) used is
    /// the largest metric prefix such that the corresponding value is greater
    ///  than or equal to one.
    /// </summary>
    public toString(fixePoint: number = 2): string {
        return this.largestWholeNumberValue().toFixed(fixePoint) + " " + this.largestWholeNumberSymbol();
    }


    /// <summary>
    /// Converts the value of the current ByteSize object to a string with 
    /// full words. The metric prefix symbol (bit, byte, kilo, mega, giga, 
    /// tera) used is the largest metric prefix such that the corresponding 
    /// value is greater than or equal to one.
    /// </summary>
    public toFullWords(): string {
        const byteSizeAsFullWords = this.toString()

        // If there is more than one unit, make the word plural
        return this.largestWholeNumberValue() > 1 ? byteSizeAsFullWords + "s" : byteSizeAsFullWords;
    }

    public equals(other: ByteSize): boolean {
        return this.bits === other.bits;
    }

    public compareTo(other: ByteSize): number {
        if (this.bits - other.bits < 0) {
            return -1;
        }
        if (this.bits - other.bits > 0) {
            return 1;
        }
        return 0;
    }

    public add(other: ByteSize): ByteSize {
        return ByteSize.fromBits(this.bits + other.bits)
    }

    public addBits(value: number): ByteSize {
        return ByteSize.fromBits(this.bits + value)
    }

    public addBytes(value: number): ByteSize {
        return ByteSize.fromBytes(this.bytes + value)
    }

    public addKilobytes(value: number): ByteSize {
        return ByteSize.fromKilobytes(this.kilobytes + value)
    }

    public addMegabytes(value: number): ByteSize {
        return ByteSize.fromMegabytes(this.megabytes + value)
    }

    public addGigabytes(value: number): ByteSize {
        return ByteSize.fromGigabytes(this.gigabytes + value)
    }

    public addTerabytes(value: number): ByteSize {
        return ByteSize.fromTerabytes(this.terabytes + value)
    }

    public subtract(other: ByteSize): ByteSize {
        return ByteSize.fromBits(this.bits - other.bits)
    }


    public static parse(s: string): ByteSize {
        // Arg checking
        if (!s) {
            throw new Error("The input is null or empty")
        }

        // Setup the result
        let result = new ByteSize(4);

        // Get the index of the first non-digit character
        s = s.trimStart(); // Protect against leading spaces, https://github.com/microsoft/TypeScript/blob/master/lib/lib.es2019.string.d.ts

        let num: number;
        let found = false;

        // Acquiring culture specific decimal separator

        const decSep = "." // Convert.ToChar(CultureInfo.CurrentCulture.NumberFormat.NumberDecimalSeparator);

        // Pick first non-digit number
        for (num = 0; num < s.length; num++) {
            if (!(!isNaN(Number(s[num])) || s[num] === decSep)) {
                found = true;
                break;
            }
        }

        if (found === false) {
            return new ByteSize(1); // TODO: should raize error
        }

        const lastNumber = num;
        // Cut the input string in half
        const numberPart = s.substring(0, lastNumber).trim()
        const sizePart = s.substring(lastNumber, s.length).trim()
        // Get the numeric part
        if (isNaN(Number(numberPart))) {
            return new ByteSize(2); // TODO: should raize error
        }

        const nb = Number(numberPart)
        // Get the magnitude part
        switch (sizePart.toUpperCase()) {
            case ByteSize.ByteSymbol:
                if (sizePart === ByteSize.BitSymbol) { // Bits
                    if (nb % 1 !== 0) {
                        return new ByteSize(3); // TODO: should raize error
                    }

                    result = ByteSize.fromBits(nb);
                } else { // Bytes
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

        return result
    }

}

