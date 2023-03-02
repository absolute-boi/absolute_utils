import { truncateWithEllipses } from "../../src/string/truncateWithEllipses";

describe("truncateWithEllipses = (string, number) => string", () => {
  const string = "The human torch was denied a bank loan.";

  it("appends an ellipsis html entity after the nth character minus trailing spaces", () => {
    expect(truncateWithEllipses(string, 15)).toEqual("The human torch&hellip;");
  });

  describe("with true as the second argument", () => {
    it("shows the full string if length is less than max", () => {
      expect(truncateWithEllipses(string, 100)).toEqual(
        "The human torch was denied a bank loan."
      );
    });
  });
});
