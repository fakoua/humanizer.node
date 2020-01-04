import { test, assertEquals } from "../../test_deps.ts"
import "../../numberToWords.ts"

test(function test_toWords() {
    assertEquals((1).toWords(), "one")
})

test(function test_toOrdinalWords() {
    assertEquals((15).toOrdinalWords(), "fifteenth")
})