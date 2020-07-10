export abstract class MetricNumerals {
        private static readonly BigLimit = 1E+27;
        private static readonly SmallLimit = 1E-27;


        /// <summary>
        /// Symbols is a list of every symbols for the Metric system.
        /// </summary>
        private static readonly Symbols =
                [
                    [ "k", "M", "G", "T", "P", "E", "Z", "Y" ],
                    [ "m", "μ", "n", "p", "f", "a", "z", "y" ]
                ];

        /// <summary>
        /// Names link a Metric symbol (as key) to its name (as value).
        /// </summary>
        /// <remarks>
        /// We dont support :
        /// {'h', "hecto"},
        /// {'da', "deca" }, // !string
        /// {'d', "deci" },
        /// {'c', "centi"},
        /// </remarks>
        private static readonly Names = 
        [
            {key: "Y", value: "yotta" },
            {key: "Z", value: "zetta" },
            {key: "E", value: "exa" },
            {key: "P", value: "peta" },
            {key: "T", value: "tera" },
            {key: "G", value: "giga" },
            {key: "M", value: "mega" },
            {key: "k", value: "kilo" },
            {key: "m", value: "milli" },
            {key: "μ", value: "micro" },
            {key: "n", value: "nano" },
            {key: "p", value: "pico" },
            {key: "f", value: "femto" },
            {key: "a", value: "atto" },
            {key: "z", value: "zepto" },
            {key: "y", value: "yocto" }
   ];

        /// <summary>
        /// Converts a Metric representation into a number.
        /// </summary>
        /// <remarks>
        /// We don't support input in the format {number}{name} nor {number} {name}.
        /// We only provide a solution for {number}{symbol} and {number} {symbol}.
        /// </remarks>
        /// <param name="input">Metric representation to convert to a number</param>
        /// <example>
        /// <code>
        /// "1k".FromMetric() => 1000d
        /// "123".FromMetric() => 123d
        /// "100m".FromMetric() => 1E-1
        /// </code>
        /// </example>
        /// <returns>A number after a conversion from a Metric representation.</returns>
        public static fromMetric(input: string): number {
            input = MetricNumerals.cleanRepresentation(input);
            return MetricNumerals.buildNumber(input, input[input.length - 1]);
        }

        /// <summary>
        /// Converts a number into a valid and Human-readable Metric representation.
        /// </summary>
        /// <remarks>
        /// Inspired by a snippet from Thom Smith.
        /// See <a href="http://stackoverflow.com/questions/12181024/formatting-a-number-with-a-metric-prefix">this link</a> for more.
        /// </remarks>
        /// <param name="input">Number to convert to a Metric representation.</param>
        /// <param name="hasSpace">True will split the number and the symbol with a whitespace.</param>
        /// <param name="useSymbol">True will use symbol instead of name</param>
        /// <param name="decimals">If not null it is the numbers of decimals to round the number to</param>
        /// <example>
        /// <code>
        /// 1000d.ToMetric() => "1k"
        /// 123d.ToMetric() => "123"
        /// 1E-1.ToMetric() => "100m"
        /// </code>
        /// </example>
        /// <returns>A valid Metric representation</returns>
        public static toMetric(input: number, hasSpace: boolean = false, useSymbol: boolean = true, decimals?: number): string {
            if (input === 0) {
                return input.toString();
            }

            if (MetricNumerals.isOutOfRange(input)) {
                throw new Error("ArgumentOutOfRangeException")
            }

            return MetricNumerals.buildRepresentation(input, hasSpace, useSymbol, decimals);
        }

        /// <summary>
        /// Clean or handle any wrong input
        /// </summary>
        /// <param name="input">Metric representation to clean</param>
        /// <returns>A cleaned representation</returns>
        private static cleanRepresentation(input: string): string {
            if (input == null) {
                throw new Error("ArgumentNullException")
            }

            input = input.trim();
            input = MetricNumerals.replaceNameBySymbol(input);
            
            if (input.length === 0 || MetricNumerals.isInvalidMetricNumeral(input)) {
                throw new Error("Empty or invalid Metric string")
            }

            return input.replace(" ", "");
        }

        /// <summary>
        /// Build a number from a metric representation or from a number
        /// </summary>
        /// <param name="input">A Metric representation to parse to a number</param>
        /// <param name="last">The last character of input</param>
        /// <returns>A number build from a Metric representation</returns>
        private static buildNumber(input: string, last: string): number {
            return MetricNumerals.isLetter(last)
                ? MetricNumerals.buildMetricNumber(input, last)
                : Number(input);
        }

        private static isLetter(char: string): boolean {
            return char.length === 1 && (/[a-z]/i).test(char)
        }

        /// <summary>
        /// Build a number from a metric representation
        /// </summary>
        /// <param name="input">A Metric representation to parse to a number</param>
        /// <param name="last">The last character of input</param>
        /// <returns>A number build from a Metric representation</returns>
        private static buildMetricNumber(input: string, last: string): number {
            const num = Number(input.substring(0, input.length - 1))
            const expo = MetricNumerals.Symbols[0].indexOf(last) >= 0 ? 
                        MetricNumerals.getExponent(MetricNumerals.Symbols[0], last) :
                        -MetricNumerals.getExponent(MetricNumerals.Symbols[1], last);

            return num *  Math.pow(10, expo)
        }

        private static getExponent(symbols: Array<string>, last: string): number {
            return (symbols.indexOf(last) + 1) * 3;
        }

        /// <summary>
        /// Replace every symbol's name by its symbol representation.
        /// </summary>
        /// <param name="input">Metric representation with a name or a symbol</param>
        /// <returns>A metric representation with a symbol</returns>
        private static replaceNameBySymbol(input: string): string {
            MetricNumerals.Names.map((item, index) => {
                input = input.replace(item.value, item.key)
            })
            return input;
        }

        /// <summary>
        /// Build a Metric representation of the number.
        /// </summary>
        /// <param name="input">Number to convert to a Metric representation.</param>
        /// <param name="hasSpace">True will split the number and the symbol with a whitespace.</param>
        /// <param name="useSymbol">True will use symbol instead of name</param>
        /// <param name="decimals">If not null it is the numbers of decimals to round the number to</param>
        /// <returns>A number in a Metric representation</returns>
        private static buildRepresentation(input: number, hasSpace: boolean, useSymbol: boolean, decimals?: number): string {
            const exponent = Math.floor(Math.log10(Math.abs(input)) / 3);

            if (exponent !== 0) { return MetricNumerals.buildMetricRepresentation(input, exponent, hasSpace, useSymbol, decimals); }
            let representation = decimals ? Math.round(input).toString() : input.toString();
            if (hasSpace) {
                representation += " ";
            }
            return representation;
        }

        /// <summary>
        /// Build a Metric representation of the number.
        /// </summary>
        /// <param name="input">Number to convert to a Metric representation.</param>
        /// <param name="exponent">Exponent of the number in a scientific notation</param>
        /// <param name="hasSpace">True will split the number and the symbol with a whitespace.</param>
        /// <param name="useSymbol">True will use symbol instead of name</param>
        /// <param name="decimals">If not null it is the numbers of decimals to round the number to</param>
        /// <returns>A number in a Metric representation</returns>
        private static buildMetricRepresentation(input: number,
            exponent: number, hasSpace: boolean, useSymbol: boolean, decimals?: number): string {
            let number = input * Math.pow(1000, -exponent);
            if (decimals) {
                number = Math.round(number);
            }

            const symbol = Math.sign(exponent) === 1
                ? MetricNumerals.Symbols[0][exponent - 1]
                : MetricNumerals.Symbols[1][-exponent - 1];
            return number
                + (hasSpace ? " " : "")
                + MetricNumerals.getUnit(symbol, useSymbol);
        }

        /// <summary>
        /// Get the unit from a symbol of from the symbol's name.
        /// </summary>
        /// <param name="symbol">The symbol linked to the unit</param>
        /// <param name="useSymbol">True will use symbol instead of name</param>
        /// <returns>A symbol or a symbol's name</returns>
        private static getUnit(symbol: string, useSymbol: boolean): number {
            // @ts-ignore
            return useSymbol ? symbol.toString() : MetricNumerals.Names[symbol];
        }

        /// <summary>
        /// Check if a Metric representation is out of the valid range.
        /// </summary>
        /// <param name="input">A Metric representation who might be out of the valid range.</param>
        /// <returns>True if input is out of the valid range.</returns>
        private static isOutOfRange(input: number): boolean {
            // bool outside(double min, double max) => !(max > input && input > min);

            // return (Math.Sign(input) == 1 && outside(SmallLimit, BigLimit))
            //        || (Math.Sign(input) == -1 && outside(-BigLimit, -SmallLimit));
            return false;
        }

        /// <summary>
        /// Check if a string is not a valid Metric representation.
        /// A valid representation is in the format "{0}{1}" or "{0} {1}"
        /// where {0} is a number and {1} is an allowed symbol.
        /// </summary>
        /// <remarks>
        /// ToDo: Performance: Use (string input, out number) to escape the double use of Parse()
        /// </remarks>
        /// <param name="input">A string who might contain a invalid Metric representation.</param>
        /// <returns>True if input is not a valid Metric representation.</returns>
        private static isInvalidMetricNumeral(input: string): boolean {
            const index = input.length - 1;
            const last = input[index]
            const isSymbol = MetricNumerals.Symbols[0].indexOf(last) >= 0 || MetricNumerals.Symbols[1].indexOf(last) >= 0;
            if (!isSymbol) {
                return true;
            }
            input = input.replace(last, "")
            return isNaN(Number(input))
        }
    }
