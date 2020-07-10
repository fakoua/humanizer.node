// @ts-ignor
import * as ord from './src/Humanizer/Inflections/Ordinalize'

declare global {
    interface Number {
        ordinalize(): string
    }

    interface String {
        ordinalize(): string
    }
}

Number.prototype.ordinalize = function (): string {
    return ord.convert(this as number, this.toString())
}

String.prototype.ordinalize = function (): string {
    return ord.convert(Number(this), this as string)
}
