export const numericSort = (
  array: number[],
  options: { reverse: boolean } = { reverse: false }
): number[] => {
  return array.sort((a, b) => {
    if (options.reverse) return b - a;
    else return a - b;
  });
};
