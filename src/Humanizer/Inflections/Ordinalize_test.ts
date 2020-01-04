import { test, assertEquals } from "../../../test_deps.ts";
import * as ord from './Ordinalize.ts'

test(function test_ordinalize_string() {
    assertEquals(ord.convert(0, "0"), "0th")
    assertEquals(ord.convert(1, "1"), "1st")
    assertEquals(ord.convert(2, "2"), "2nd")
    assertEquals(ord.convert(3, "3"), "3rd")
    assertEquals(ord.convert(100, "100"), "100th")
    assertEquals(ord.convert(1001, "1001"), "1001st")
})