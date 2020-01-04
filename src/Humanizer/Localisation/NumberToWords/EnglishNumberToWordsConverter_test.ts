import { test, assertEquals } from "../../../../test_deps.ts";
import  * as N2W  from "./EnglishNumberToWordsConverter.ts";

test(function test_englishNumber2Words() {
    assertEquals(N2W.EnglishNumberToWordsConverter.convert(1), "one")
    assertEquals(N2W.EnglishNumberToWordsConverter.convert(10), "ten")
    assertEquals(N2W.EnglishNumberToWordsConverter.convert(11), "eleven")
    assertEquals(N2W.EnglishNumberToWordsConverter.convert(122), "one hundred and twenty-two")
    assertEquals(N2W.EnglishNumberToWordsConverter.convert(3501), "three thousand five hundred and one")
    assertEquals(N2W.EnglishNumberToWordsConverter.convert(100000000), "one hundred million")
    assertEquals(N2W.EnglishNumberToWordsConverter.convert(111), "one hundred and eleven")
    assertEquals(N2W.EnglishNumberToWordsConverter.convert(111111111), "one hundred and eleven million one hundred and eleven thousand one hundred and eleven")
    assertEquals(N2W.EnglishNumberToWordsConverter.convert(123), "one hundred and twenty-three")
    assertEquals(N2W.EnglishNumberToWordsConverter.convert(12345), "twelve thousand three hundred and forty-five")
    assertEquals(N2W.EnglishNumberToWordsConverter.convert(1234567), "one million two hundred and thirty-four thousand five hundred and sixty-seven")
    assertEquals(N2W.EnglishNumberToWordsConverter.convert(123456789), "one hundred and twenty-three million four hundred and fifty-six thousand seven hundred and eighty-nine")
    assertEquals(N2W.EnglishNumberToWordsConverter.convert(1234567890), "one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety")
})

test(function test_englishNumber2Words_ordinal() {
    assertEquals(N2W.EnglishNumberToWordsConverter.convertToOrdinal(1), "first")
    assertEquals(N2W.EnglishNumberToWordsConverter.convertToOrdinal(10), "tenth")
    assertEquals(N2W.EnglishNumberToWordsConverter.convertToOrdinal(11), "eleventh")
    assertEquals(N2W.EnglishNumberToWordsConverter.convertToOrdinal(17), "seventeenth")
    assertEquals(N2W.EnglishNumberToWordsConverter.convertToOrdinal(22), "twenty-second")
    assertEquals(N2W.EnglishNumberToWordsConverter.convertToOrdinal(40), "fortieth")
    assertEquals(N2W.EnglishNumberToWordsConverter.convertToOrdinal(70), "seventieth")
    assertEquals(N2W.EnglishNumberToWordsConverter.convertToOrdinal(96), "ninety-sixth")
    assertEquals(N2W.EnglishNumberToWordsConverter.convertToOrdinal(100), "hundredth")
    assertEquals(N2W.EnglishNumberToWordsConverter.convertToOrdinal(112), "hundred and twelfth")
    assertEquals(N2W.EnglishNumberToWordsConverter.convertToOrdinal(120), "hundred and twentieth")
    assertEquals(N2W.EnglishNumberToWordsConverter.convertToOrdinal(10121), "ten thousand one hundred and twenty-first")
    assertEquals(N2W.EnglishNumberToWordsConverter.convertToOrdinal(100000), "hundred thousandth")
})