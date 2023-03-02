import { haveEqualNumericValues } from "../../src/array/haveEqualNumericValues";

describe("haveEqualNumericValues = (number[], number[]) => boolean", () => {
  const array = [1, 9, 5, 21, 455];

  it("returns true if arrays have the same values regardless of order", () => {
    expect(haveEqualNumericValues(array, [1, 5, 455, 21, 9])).toEqual(true);
  });

  it("returns false if arrays have different lengths", () => {
    expect(haveEqualNumericValues(array, [1, 2, 3])).toEqual(false);
  });
});
