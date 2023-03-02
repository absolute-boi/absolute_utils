type Iterable = Record<string | number | symbol, any>[];

export const sliceEach = (
  items: Iterable,
  keys: string | string[]
): Iterable => {
  let result: Iterable = [];

  if (Array.isArray(keys)) {
    for (const item of items) {
      result[result.length] = Object.fromEntries(
        Object.entries(item).filter((entry) => keys.includes(entry[0]))
      );
    }
  } else {
    for (const item of items) {
      result[result.length] = Object.fromEntries([[keys, item[String(keys)]]]);
    }
  }

  return result;
};
