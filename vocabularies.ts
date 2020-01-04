
// @ts-ignore
import { Vocabularies } from './src/Humanizer/Inflections/Vocabularies.ts'

declare global {
    interface String {
        pluralize(): string
        singularize(): string
    }
}

String.prototype.pluralize = function (): string {
    return Vocabularies.Default().pluralize(this)
}

String.prototype.singularize = function (): string {
    return Vocabularies.Default().singularize(this)
}


