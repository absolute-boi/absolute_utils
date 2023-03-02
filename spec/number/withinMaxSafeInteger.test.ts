import { withinMaxSafeInteger } from "../../src/number/withinMaxSafeInteger";

describe("withinMaxSafeInteger = (string, number) => string", () => {
  it("appends an ellipsis html entity after the nth character minus trailing spaces", () => {
    expect(withinMaxSafeInteger(15)).toEqual(15);
  });

  describe("with true as the second argument", () => {
    it("shows the full string if length is less than max", () => {
      expect(withinMaxSafeInteger(Number.MAX_SAFE_INTEGER + 1000)).toEqual(
        Number.MAX_SAFE_INTEGER
      );
    });
  });
});
