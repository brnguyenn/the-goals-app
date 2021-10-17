import { transformToPaddedNumber } from "./image";

describe("transformToPaddedNumber", () => {
  it.each`
    imageNumber | expectedNumber
    ${0}        | ${"00"}
    ${5}        | ${"05"}
    ${10}       | ${"10"}
    ${46}       | ${"46"}
    ${100}      | ${"100"}
  `(
    "returns $expectedNumber when image number is $imageNumber",
    ({ imageNumber, expectedNumber }) => {
      expect(transformToPaddedNumber(imageNumber)).toEqual(expectedNumber);
    }
  );
});
