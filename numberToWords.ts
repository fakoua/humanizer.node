// @ts-ignore
import { EnglishNumberToWordsConverter } from './src/Humanizer/Localisation/NumberToWords/EnglishNumberToWordsConverter'

declare global {
    interface Number {
        toWords(): string
        toOrdinalWords(): string
    }
}

/**
 * Number to be turned to words
 * (3501).toWords() -> "three thousand five hundred and one"
 */
Number.prototype.toWords = function (): string {
   return EnglishNumberToWordsConverter.convert(this as number)
}

/**
 * Number to be turned to ordinal words
 * (1).toOrdinalWords() -> "first"
 */
Number.prototype.toOrdinalWords = function (): string {
    return EnglishNumberToWordsConverter.convert(this as number, true)
}

