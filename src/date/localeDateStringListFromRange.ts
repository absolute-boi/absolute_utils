type DateRange = { from: Date; to: Date };

type LocaleDateStringListFromRangeOptions = {
  range: DateRange;
  locales: Intl.LocalesArgument;
  options: Intl.DateTimeFormatOptions;
};

const defaultOptions: Omit<LocaleDateStringListFromRangeOptions, "range"> = {
  locales: "fr-ca",
  options: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  },
};

export const localeDateStringListFromRange = (
  range: DateRange,
  locales = defaultOptions.locales,
  options = defaultOptions.options
): string[] => {
  let result: string[] = [];

  while (range.from <= range.to) {
    result.push(range.from.toLocaleDateString(locales, options));
    range.from = new Date(range.from.setDate(range.from.getDate() + 1));
  }

  return result;
};
