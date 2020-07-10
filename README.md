# Humanizer.node

Humanizer meets all your NodeJs needs for manipulating and displaying strings, dates, times, timespans, numbers and quantities.

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/fakoua/humanizer.node/Node_CI) ![npm](https://img.shields.io/npm/v/humanizer.node) ![GitHub top language](https://img.shields.io/github/languages/top/fakoua/humanizer.node) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/humanizer.node) ![GitHub](https://img.shields.io/github/license/fakoua/humanizer.node)

```bash
npm i humanizer.node
```
### Table of contents

- [Humanizer.node](#humanizernode)
    - [Table of contents](#table-of-contents)
  - [Implemented](#implemented)
  - [Usage](#usage)
  - [Examples](#examples)
  - [ByteSize](#bytesize)
  - [Vocabularies](#vocabularies)
    - [Pluralize](#pluralize)
    - [Singularize](#singularize)
  - [Ordinalize](#ordinalize)
  - [ToQuantity](#toquantity)
  - [Number to words](#number-to-words)
  - [Number to ordinal words](#number-to-ordinal-words)
  - [Roman Numerals](#roman-numerals)
  - [Metric numerals](#metric-numerals)

## Implemented

- ByteSize
- Ordinalize
- ToQuantity
- Vocabularies
- ...In Progress

## Usage

Import the Extensions:

```js
require('humanizer.node')
```

## Examples

```js
//Your imports here

let result = (10).megabytes().toString()
console.log(result) // -> 10.00 MB
```

## ByteSize

Humanizer includes a port of the brilliant [ByteSize](https://github.com/omar/ByteSize) library.
Quite a few changes and additions are made on `ByteSize` to make the interaction with `ByteSize` easier and more consistent with the Humanizer API.
Here is a few examples of how you can convert from numbers to byte sizes and between size magnitudes:

```js
require('humanizer.node')

let fileSize = (10).kilobytes()
console.log(fileSize.bits)          // -> 81920
console.log(fileSize.bytes)         // -> 10240
console.log(fileSize.kilobytes)     // -> 10
console.log(fileSize.megabytes)     // -> 0.009765625
console.log(fileSize.gigabytes)     // -> 0.0000095367431640625
console.log(fileSize.terabytes)     // -> 9.313225746154785e-9
```

There are a few extension methods that allow you to turn a number into a ByteSize instance:

```js
(3).bits();
(5).bytes();
(10.5).kilobytes();
(2.5).megabytes();
(10.2).gigabytes();
(4.7).terabytes();
```

You can also add/subtract the values

```js
let f = (4).gigabytes().add((22).megabytes()).subtract((980).kilobytes()).addGigabytes(1)
console.log(f.toString()) // -> 5.020549774169922 GB
```

## Vocabularies

### Pluralize

`Pluralize` pluralizes the provided input while taking irregular and uncountable words into consideration:

```js
require('humanizer.node')

"Man".pluralize()       // -> Men
"string".pluralize()    // -> "strings"

```

### Singularize

`Singularize` singularizes the provided input while taking irregular and uncountable words into consideration:

```js
"Men".singularize()     //-> "Man"
"strings".singularize() //-> "string"
```

## Ordinalize

```js
require('humanizer.node')

(1).ordinalize() => "1st"
(5).ordinalize() => "5th"
```

## ToQuantity

```js
require('humanizer.node')

"case".toQuantity(0) => "0 cases"
"case".toQuantity(1) => "1 case"
"case".toQuantity(5) => "5 cases"
"man".toQuantity(0) => "0 men"
"man".toQuantity(1) => "1 man"
"man".toQuantity(2) => "2 men"
```

ToQuantity can figure out whether the input word is singular or plural and will singularize or pluralize as necessary:

```js
"men".toQuantity(2) => "2 men"
"process".toQuantity(2) => "2 processes"
"process".toQuantity(1) => "1 process"
"processes".toQuantity(2) => "2 processes"
"processes".toQuantity(1) => "1 process"
```

You can also pass a second argument, `ShowQuantityAs`, to `toQuantity` to specify how you want the provided quantity to be outputted. The default value is `ShowQuantityAs.Numeric` which is what we saw above. The other two values are `ShowQuantityAs.Words` and `ShowQuantityAs.None`.

```js
"case".toQuantity(5, ShowQuantityAs.Words) => "five cases"
"case".toQuantity(5, ShowQuantityAs.None) => "cases"
```

## Number to words

Humanizer can change numbers to words using the `toWords` extension:

```js
require('humanizer.node')

(1).toWords() => "one"
(10).toWords() => "ten"
(11).toWords() => "eleven"
(122).toWords() => "one hundred and twenty-two"
(3501).toWords() => "three thousand five hundred and one"
```

## Number to ordinal words

```js
require('humanizer.node')

(0).toOrdinalWords() => "zeroth"
(1).toOrdinalWords() => "first"
(2).toOrdinalWords() => "second"
(8).toOrdinalWords() => "eighth"
(10).toOrdinalWords() => "tenth"
(11).toOrdinalWords() => "eleventh"
(12).toOrdinalWords() => "twelfth"
(20).toOrdinalWords() => "twentieth"
(21).toOrdinalWords() => "twenty first"
(121).toOrdinalWords() => "hundred and twenty-first"
```

## Roman Numerals

Humanizer can change numbers to Roman numerals using the `toRoman` extension. The numbers 1 to 10 can be expressed in Roman numerals as follows:

```ts
(1).toRoman() => "I"
(2).toRoman() => "II"
(3).toRoman() => "III"
(4).toRoman() => "IV"
(5).toRoman() => "V"
(6).toRoman() => "VI"
(7).toRoman() => "VII"
(8).toRoman() => "VIII"
(9).toRoman() => "IX"
(10).toRoman() => "X"
```

Also the reverse operation using the `fromRoman` extension.

```ts
"I".fromRoman() => 1
"II".fromRoman() => 2
"III".fromRoman() => 3
"IV".fromRoman() => 4
"V".fromRoman() => 5
```

## Metric numerals

Humanizer can change numbers to Metric numerals using the `toMetric` extension. The numbers 1, 1230 and 0.1 can be expressed in Metric numerals as follows:

```js
(1).toMetric() => "1"
(1230).toMetric() => "1.23k"
(0.1).toMetric() => "100m"
```

Also the reverse operation using the `fromMetric` extension.

```js
"1".fromMetric() => 1
"1.23k".fromMetric() => 1230
"100m".fromMetric() => 0.1
```