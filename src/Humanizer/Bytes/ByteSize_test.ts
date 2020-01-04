import { test, assertEquals } from "../../../test_deps.ts";
import { ByteSize } from "./ByteSize.ts"

test(function test_bytesize_fromBits() {
    let result = ByteSize.fromBits(8);
    assertEquals(8, result.bits)
    assertEquals(1, result.bytes)
})

test(function test_bytesize_fromBytes() {
    let result = ByteSize.fromBytes(1.5)
    assertEquals(12, result.bits)
    assertEquals(1.5, result.bytes)
})

test(function test_bytesize_fromKilobytes() {
    let result = ByteSize.fromKilobytes(1.5)
    assertEquals(1536, result.bytes)
    assertEquals(1.5, result.kilobytes)
})

test(function test_bytesize_fromMegabytes() {
    let result = ByteSize.fromMegabytes(1.5)
    assertEquals(1572864, result.bytes)
    assertEquals(1.5, result.megabytes)
})

test(function test_bytesize_fromGigabytes() {
    let result = ByteSize.fromGigabytes(1.5)
    assertEquals(1610612736, result.bytes)
    assertEquals(1.5, result.gigabytes)
})

test(function test_bytesize_fromTerabytes() {
    let result = ByteSize.fromTerabytes(1.5)
    assertEquals(1649267441664, result.bytes)
    assertEquals(1.5, result.terabytes)
})

test(function test_bytesize_parseKilo() {
    assertEquals(ByteSize.fromKilobytes(1020), ByteSize.parse("1020KB"))
})

test(function test_bytesize_parseDecimalMegabytes() {
    assertEquals(ByteSize.fromMegabytes(100.5), ByteSize.parse("100.5MB"))
})

test(function test_bytesize_tryParseWorksWithLotsOfSpaces() {
    assertEquals(ByteSize.fromKilobytes(100), ByteSize.parse(" 100 KB "))
})

test(function test_bytesize_parseBits() {
    assertEquals(ByteSize.fromBits(1), ByteSize.parse("1b"))
})

test(function test_bytesize_parseBytes() {
    assertEquals(ByteSize.fromBytes(1), ByteSize.parse("1B"))
})

test(function test_bytesize_parseKilobytes() {
    assertEquals(ByteSize.fromKilobytes(1020), ByteSize.parse("1020KB"))
})

test(function test_bytesize_parseMegabytes() {
    assertEquals(ByteSize.fromMegabytes(1020), ByteSize.parse("1020MB"))
})

test(function test_bytesize_parseGigabytes() {
    assertEquals(ByteSize.fromGigabytes(805), ByteSize.parse("805GB"))
})

test(function test_bytesize_parseTerabytes() {
    assertEquals(ByteSize.fromTerabytes(803), ByteSize.parse("803TB"))
})

test(function test_bytesize_add() {
    let size1 = ByteSize.fromBytes(1)
    let result = size1.add(size1);
    assertEquals(2, result.bytes)
    assertEquals(16, result.bits)
})

test(function test_bytesize_addBits() {
    var size = ByteSize.fromBytes(1).addBits(8);
    assertEquals(2, size.bytes)
    assertEquals(16, size.bits)
})

test(function test_bytesize_addBytes() {
    var size = ByteSize.fromBytes(1).addBytes(1);
    assertEquals(2, size.bytes)
    assertEquals(16, size.bits)
})

test(function test_bytesize_addKilobytes() {
    var size = ByteSize.fromKilobytes(2).addKilobytes(2)
    assertEquals(4 * 1024 * 8, size.bits)
    assertEquals(4 * 1024, size.bytes)
    assertEquals(4, size.kilobytes)
})

test(function test_bytesize_addMegabytes() {
    var size = ByteSize.fromMegabytes(2).addMegabytes(2)
    assertEquals(4 * 1024 * 1024 * 8, size.bits)
    assertEquals(4 * 1024 * 1024, size.bytes)
    assertEquals(4 * 1024, size.kilobytes)
    assertEquals(4, size.megabytes)
})

test(function test_bytesize_addGigabytes() {
    var size = ByteSize.fromGigabytes(2).addGigabytes(2)
    assertEquals(4 * 1024 * 1024 * 1024 * 8, size.bits)
    assertEquals(4 * 1024 * 1024 * 1024, size.bytes)
    assertEquals(4 * 1024 *1024, size.kilobytes)
    assertEquals(4 * 1024, size.megabytes)
    assertEquals(4, size.gigabytes)
})

test(function test_bytesize_addTerabytes() {
    var size = ByteSize.fromTerabytes(2).addTerabytes(2)
    assertEquals(4 * 1024 * 1024 * 1024 * 1024 * 8, size.bits)
    assertEquals(4 * 1024 * 1024 * 1024 *1024, size.bytes)
    assertEquals(4 * 1024 *1024 * 1024, size.kilobytes)
    assertEquals(4 * 1024 * 1024, size.megabytes)
    assertEquals(4 * 1024, size.gigabytes)
    assertEquals(4, size.terabytes)
})

test(function test_bytesize_subtract() {
    var size = ByteSize.fromBytes(4).subtract(ByteSize.fromBytes(2));
    assertEquals(16, size.bits)
    assertEquals(2, size.bytes)
})
