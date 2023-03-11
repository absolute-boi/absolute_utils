import { localeDateStringListFromRange } from "@lib/date/localeDateStringListFromRange";

describe("localeDateStringListFromRange = ({ from: Date, to: Date }) => string[]", () => {
  it("takes a date range and returns inclusive list of dates within range as locale strings", () => {
    const dates = {
      from: new Date(Date.UTC(2013, 4, 5)),
      to: new Date(Date.UTC(2013, 4, 7)),
    };

    expect(localeDateStringListFromRange(dates)).toEqual([
      "2013-05-05",
      "2013-05-06",
      "2013-05-07",
    ]);
  });
});
