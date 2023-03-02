import { sliceEach } from "../../src/array/sliceEach";

describe("sliceEach = (Record<string | number | symbol, any>[], string | string[]) => Record<string | number | symbol, any>[]", () => {
  const objects = [
    { foo: 1, bar: 2, baz: 3 },
    { foo: 4, bar: 5, qux: 6 },
  ];

  it("takes an array and a string and returns array of subhashes containing the string as key", () => {
    expect(sliceEach(objects, "baz")).toEqual([{ baz: 3 }, {}]);
  });

  it("takes an array and an array of strings and returns array of subhashes containing the string as key", () => {
    expect(sliceEach(objects, ["foo", "baz"])).toEqual([
      { foo: 1, baz: 3 },
      { foo: 4 },
    ]);
  });
});
