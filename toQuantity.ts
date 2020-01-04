
// @ts-ignore
import { Vocabularies } from './src/Humanizer/Inflections/Vocabularies.ts'
import './numberToWords.ts'

declare global {
    interface String {
        toQuantity(quantity: number, showQuantityAs: ShowQuantityAs): string
    }
}

/**
 * Enumerates the ways of displaying a quantity value when converting
 */
export enum ShowQuantityAs {
    /** Indicates that no quantity will be included in the formatted string. */
    None,
    /** 
     * Indicates that the quantity will be included in the output, formatted
     * as its numeric value (e.g. "1").
     */
    Numeric,
    /**
     * Incidates that the quantity will be included in the output, formatted as
     * words (e.g. 123 => "one hundred and twenty three").
     */
    Words
}

/**
 * Prefixes the provided word with the number and accordingly pluralizes or singularizes the word
 * @param {number} quantity - The quantity of the word
 * @param {ShowQuantityAs} showQuantityAs - How to show the quantity. Numeric by default
 * @returns {string} - The converted value
 */
String.prototype.toQuantity = function (quantity: number, showQuantityAs: ShowQuantityAs = ShowQuantityAs.Numeric): string {
    let transformedInput = quantity == 1
    ? Vocabularies.Default().singularize(this, false)
    : Vocabularies.Default().pluralize(this, false)

    if (showQuantityAs == ShowQuantityAs.None) {
        return transformedInput;
    }

    if (showQuantityAs == ShowQuantityAs.Numeric) {
        return `${quantity} ${transformedInput}`
    }
    return `${quantity.toWords()} ${transformedInput}`
}

