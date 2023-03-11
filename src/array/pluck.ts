type Iterable = Record<string | number | symbol, any>[];

export const pluck = (
  items: Iterable,
  keys: string | string[]
): string[] | string[][] => {
  let result = [];

  if (Array.isArray(keys)) {
    for (const item of items) {
      let values = [];

      for (const key of keys) values.push(item[key]);

      result.push(values);
    }
  } else for (const item of items) result.push(item[keys]);

  return result;
};
