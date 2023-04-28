import { pluck } from "../../src/array/pluck";

describe("pluck = (Record<string | number | symbol, any>[], string | string[]) => string[] | string[][]", () => {
  const objects = [
    { foo: 1, bar: 2, baz: 3 },
    { foo: 4, bar: 5, qux: 6 },
  ];

  it("takes an array and a set of keys and returns array of strings or arrays of string arrays derived from the keys", () => {
    expect(pluck(objects, "baz")).toEqual([3, undefined]);
  });

  it("takes an array and an array of strings and returns array of subhashes containing the string as key", () => {
    expect(pluck(objects, ["foo", "baz"])).toEqual([
      [1, 3],
      [4, undefined],
    ]);
  });
});
