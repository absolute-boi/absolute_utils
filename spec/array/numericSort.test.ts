import { numericSort } from "../../src/array/numericSort";

describe("numericSort = (number[], boolean) => number[]", () => {
  const array = [1, 9, 5, 21, 45532114];

  it("sorts the items in ascending order", () => {
    expect(numericSort(array)).toEqual([1, 5, 9, 21, 45532114]);
  });

  describe("with true as the second argument", () => {
    it("sorts the items in descending order", () => {
      expect(numericSort(array, { reverse: true })).toEqual([
        45532114, 21, 9, 5, 1,
      ]);
    });
  });
});
