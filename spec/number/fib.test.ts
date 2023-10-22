import { fib } from "@lib/number/fib";

describe("fib = (number) => number", () => {
  const fibbonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

  fibbonacciSequence.forEach((term: number, index: number) => {
    it("returns the fibbonacci term by index", () => {
      expect(fib(index)).toEqual(term);
    });
  });
});
