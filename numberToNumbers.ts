
export {};

declare global {
    interface Number {
        tens(): number
        hundreds(): number
        thousands(): number
        millions(): number
        billions(): number
    }
}

/**
 * (5).Tens == 50
 */
Number.prototype.tens = function (): number {
    return this as number * 10;
}

Number.prototype.hundreds = function (): number {
    return this as number * 100;
}

Number.prototype.thousands = function (): number {
    return this as number * 1000;
}

Number.prototype.millions = function (): number {
    return this as number * 1000000;
}

Number.prototype.billions = function (): number {
    return this as number * 1000000000;
}
