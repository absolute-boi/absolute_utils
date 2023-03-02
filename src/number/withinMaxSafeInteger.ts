export const withinMaxSafeInteger = (number: number): number => {
  return number > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : number;
};
