import { withinMaxSafeInteger } from "@lib/number/withinMaxSafeInteger";

type unitOfTime = "min" | "s" | "ms";

export const delay = (time: number, unit: unitOfTime = "ms"): Promise<void> => {
  switch (unit) {
    case "min":
      return new Promise((res) =>
        setTimeout(res, withinMaxSafeInteger(time * 60000))
      );
    case "s":
      return new Promise((res) =>
        setTimeout(res, withinMaxSafeInteger(time * 100))
      );
    default:
      return new Promise((res) => setTimeout(res, withinMaxSafeInteger(time)));
  }
};
