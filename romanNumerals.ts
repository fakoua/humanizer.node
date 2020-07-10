
    import { RomanNumerals } from "./src/Humanizer/Numbers/RomanNumerals"

    declare global {
        interface Number {
            toRoman(): string
        }
    
        interface String {
            fromRoman(): number
        }
    }

    Number.prototype.toRoman = function (): string {
        return RomanNumerals.toRoman(this as number)
    }
    
    String.prototype.fromRoman = function (): number {
        return RomanNumerals.fromRoman(this as string)
    }
    
