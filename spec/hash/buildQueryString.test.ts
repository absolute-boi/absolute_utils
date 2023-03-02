import { buildQueryString } from "../../src/hash/buildQueryString";

describe("buildQueryString = (Record<string | number | symbol, T>) => string", () => {
  it("returns property value pairs as a search params string", () => {
    const params = { foo: "bar", baz: "qux" };

    expect(buildQueryString(params)).toEqual("?foo=bar&baz=qux");
  });

  it("returns a URI econded string for array values", () => {
    const params = { foo: "bar", baz: ["qux"] };

    expect(buildQueryString(params)).toEqual("?foo=bar&baz%5B%5D=qux");
  });
});
