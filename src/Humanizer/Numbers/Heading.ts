/// <summary>
    /// Style for the cardinal direction humanization
    /// </summary>
    export enum HeadingStyle {
        /// <summary>
        /// Returns an abbreviated format
        /// </summary>
        Abbreviated,

        /// <summary>
        /// Returns the full format
        /// </summary>
        Full
    }

    /// <summary>
    /// Contains extensions to transform a number indicating a heading into the 
    /// textual representation of the heading.
    /// </summary>
    export abstract class Heading {
        static readonly headings = [ 
            { short: "N",  full: "north"},
            { short: "NNE" , full: "north-northeast"},
            { short: "NE" , full: "northeast"},
            { short: "ENE" , full: "east-northeast"},
            { short: "E",  full: "east"},
            { short: "ESE" , full: "east-southeast"},
            { short: "SE" , full: "southeast"},
            { short: "SSE" , full: "south-southeast"},
            { short: "S",  full: "south"},
            { short: "SSW" , full: "south-southwest"},
            { short: "SW" , full: "southwest"},
            { short: "WSW" , full: "west-southwest"},
            { short: "W",  full: "west"},
            { short: "WNW" , full: "west-northwest"},
            { short: "NW" , full: "northwest"},
            { short: "NNW" , full: "north-northwest"}
         ];
       
        static readonly headingArrows = [ "↑", "↗", "→", "↘", "↓", "↙", "←", "↖" ];

        // https://stackoverflow.com/a/7490772/1720761
        /// <summary>
        /// Returns a textual representation of the heading.
        /// 
        /// This representation has a maximum deviation of 11.25 degrees.
        /// </summary>
        /// <returns>A textual representation of the heading</returns>
        /// <param name="culture">The culture to return the textual representation in</param>
        /// <param name="style">Whether to return a short result or not. <see cref="HeadingStyle"/></param>
        public static toHeading(heading: number, style: HeadingStyle = HeadingStyle.Abbreviated): string {
            const val = Math.floor((heading / 22.5) + .5);

            const result = Heading.headings[val % 16];

            if (style === HeadingStyle.Abbreviated) {
                return result.short;
            }
            return result.full;
        }

        /// <summary>
        /// Returns a char arrow indicating the heading.
        /// 
        /// This representation has a maximum deviation of 22.5 degrees.
        /// </summary>
        /// <returns>The heading arrow.</returns>
        public static toHeadingArrow(heading: number): string {
            const val = Math.floor((heading / 45) + .5);

            return Heading.headingArrows[val % 8];
        }

        /// <summary>
        /// Returns a heading based on the short textual representation of the heading.
        /// </summary>
        /// <returns>The heading. -1 if the heading could not be parsed.</returns>
        public static fromAbbreviatedHeading(heading: string): number {

            const index = Heading.headings.findIndex((element) => {
                            return element.short.toUpperCase() === heading;
                        })

            if (index === -1) {
                return -1;
            }

            return (index * 22.5);
        }
    }
