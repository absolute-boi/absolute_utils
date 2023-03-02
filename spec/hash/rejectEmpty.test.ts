import { rejectEmpty } from "../../src/hash/rejectEmpty";

describe("rejectEmpty = (Record<string | number | symbol, T>) => { [key: string]: T }", () => {
  const objects = { foo: 1, bar: null, baz: 3 };

  it("takes an array and a string and returns array of subhashes containing the string as key", () => {
    expect(rejectEmpty(objects)).toEqual({ foo: 1, baz: 3 });
  });
});
