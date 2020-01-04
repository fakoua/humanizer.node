export const convert = function(nb: number, nbString: string): string {
    let nMod100 = nb % 100;

    if (nMod100 >= 11 && nMod100 <= 13)
    {
        return nbString + "th";
    }

    switch (nb % 10)
    {
        case 1:
            return nbString + "st";

        case 2:
            return nbString + "nd";

        case 3:
            return nbString + "rd";

        default:
            return nbString + "th";
    } 
}