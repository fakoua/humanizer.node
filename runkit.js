require('humanizer.node').toQuantity
require('humanizer.node').numberToWords
require('humanizer.node').byteSize
require('humanizer.node').vocabularies
require('humanizer.node').romanNumeral
require('humanizer.node').ordinalize

let result = (10).megabytes().toString()
console.log(result) // -> 10 MB

let fileSize = (10).kilobytes()
console.log(fileSize.bits)          // -> 81920
console.log(fileSize.bytes)         // -> 10240
console.log(fileSize.kilobytes)     // -> 10
console.log(fileSize.megabytes)     // -> 0.009765625
console.log(fileSize.gigabytes)     // -> 0.0000095367431640625
console.log(fileSize.terabytes)     // -> 9.313225746154785e-9

//-------------------------

console.log("Man".pluralize())       // -> Men
console.log("string".pluralize())    // -> "strings"

console.log("Men".singularize())     //-> "Man"
console.log("strings".singularize()) //-> "string"
//-------------------------

console.log((1).ordinalize()) // => "1st"
console.log((5).ordinalize()) // => "5th"

//---------------------------------

console.log("case".toQuantity(0)) // => "0 cases"
console.log("case".toQuantity(1)) // => "1 case"
console.log("case".toQuantity(5)) // => "5 cases"

console.log("case".toQuantity(5, 2)) // => "five cases" -ShowQuantityAs.Words = 2

//-------------------------------

console.log((11).toWords()) // => "eleven"
console.log((8).toOrdinalWords()) // => "eighth"