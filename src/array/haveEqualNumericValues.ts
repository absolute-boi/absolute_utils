import { numericSort } from "./numericSort";

// inspired by Tim Down: http://stackoverflow.com/a/7837725/308645
export const haveEqualNumericValues = (
  array1: number[],
  array2: number[]
): boolean => {
  let i = array1.length;

  if (i != array2.length) return false;

  const sortedArray1 = Object.freeze(numericSort(array1));
  const sortedArray2 = Object.freeze(numericSort(array2));

  while (i--) if (sortedArray1[i] !== sortedArray2[i]) return false;

  return true;
};
