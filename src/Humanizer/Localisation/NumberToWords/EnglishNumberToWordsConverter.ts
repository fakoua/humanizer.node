export class EnglishNumberToWordsConverter
{
    private static readonly UnitsMap = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
    private static readonly TensMap = [ "zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];

    private static readonly OrdinalExceptions = 
    [
        [1, "first"],
        [2, "second"],
        [3, "third"],
        [4, "fourth"],
        [5, "fifth"],
        [8, "eighth"],
        [9, "ninth"],
        [12, "twelfth"],
    ];

    static convertToOrdinal(number: number): string
    {
        return EnglishNumberToWordsConverter.convert(number, true);
    }

    static convert(number: number, isOrdinal: boolean = false): string
    {
        number = Math.floor(number)
        if (number == 0)
        {
            return EnglishNumberToWordsConverter.getUnitValue(0, isOrdinal);
        }

        if (number < 0)
        {
            return `minus ${EnglishNumberToWordsConverter.convert(-number)}`
        }

        var parts = new Array<string>();

        if (Math.floor(number / 1000000000000000000) > 0)
        {
            parts.push(`${EnglishNumberToWordsConverter.convert(number / 1000000000000000000)} quintillion`)
            number %= 1000000000000000000;
        }

        if (Math.floor(number / 1000000000000000) > 0)
        {
            parts.push(`${EnglishNumberToWordsConverter.convert(number / 1000000000000000)} quadrillion`);
            number %= 1000000000000000;
        }

        if (Math.floor(number / 1000000000000) > 0)
        {
            parts.push(`${EnglishNumberToWordsConverter.convert(number / 1000000000000)} trillion`)
            number %= 1000000000000;
        }

        if (Math.floor(number / 1000000000) > 0)
        {
            parts.push(`${EnglishNumberToWordsConverter.convert(number / 1000000000)} billion`);
            number %= 1000000000;
        }

        if (Math.floor(number / 1000000) > 0)
        {
            parts.push(`${EnglishNumberToWordsConverter.convert(number / 1000000)} million`);
            number %= 1000000;
        }

        if (Math.floor(number / 1000) > 0)
        {
            parts.push(`${EnglishNumberToWordsConverter.convert(number / 1000)} thousand`);
            number %= 1000;
        }

        if (Math.floor(number / 100) > 0)
        {
            parts.push(`${EnglishNumberToWordsConverter.convert(number / 100)} hundred`);
            number %= 100;
        }

        if (Math.floor(number) > 0)
        {
            if (parts.length != 0)
            {
                parts.push("and");
            }

            if (number < 20)
            {
                parts.push(EnglishNumberToWordsConverter.getUnitValue(number, isOrdinal));
            }
            else
            {  
                var lastPart = EnglishNumberToWordsConverter.TensMap[Math.floor(number / 10)];
                if ((number % 10) > 0)
                {
                    lastPart += `-${EnglishNumberToWordsConverter.getUnitValue(number % 10, isOrdinal)}`;
                }
                else if (isOrdinal)
                {
                    let trimmed = lastPart.replace(/\y+$/g, ''); //lastPart.trimEnd('y')
                    lastPart = trimmed + "ieth";
                }

                parts.push(lastPart);
            }
        }
        else if (isOrdinal)
        {
            parts[parts.length - 1] += "th";
        }

        var toWords = parts.join(" ");

        if (isOrdinal)
        {
            toWords = EnglishNumberToWordsConverter.removeOnePrefix(toWords);
        }

        return toWords;
    }

    private static getUnitValue(number: number, isOrdinal: boolean): string
    {
        if (isOrdinal)
        {
            let exceptionString = EnglishNumberToWordsConverter.exceptionNumbersToWords(number)
            if (exceptionString != "NOTFOUND")
            {
                return exceptionString;
            }
            else
            {
                return EnglishNumberToWordsConverter.UnitsMap[number] + "th";
            }
        }
        else
        {
            return EnglishNumberToWordsConverter.UnitsMap[number];
        }
    }

    private static removeOnePrefix(toWords: string): string
    {
        // one hundred => hundredth
        if (toWords.indexOf("one") == 0)
        {
            toWords = toWords.substring(4); //toWords.remove(0, 4);
        }

        return toWords;
    }

    private static exceptionNumbersToWords(number: number): string
    {
        let rtnVal = "NOTFOUND";
        EnglishNumberToWordsConverter.OrdinalExceptions.forEach(element => {
            if (element[0] == number) {
                rtnVal = element[1].toString()
            }
        });
        return rtnVal;
    }
}