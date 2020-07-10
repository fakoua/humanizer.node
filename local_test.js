require('./dist')

// let fileSize = (10).kilobytes()
// console.log(fileSize.bits)          // -> 81920
// console.log(fileSize.bytes)         // -> 10240
// console.log(fileSize.kilobytes)     // -> 10
// console.log(fileSize.megabytes)     // -> 0.009765625
// console.log(fileSize.gigabytes)     // -> 0.0000095367431640625
// console.log(fileSize.terabytes)     // -> 9.313225746154785e-9

console.log("100m".fromMetric())