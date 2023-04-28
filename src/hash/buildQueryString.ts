export const buildQueryString = <T>(
  params: Record<string | number | symbol, T>
): string => {
  let queryString = "";

  Object.entries(params).forEach(([key, value]) => {
    !!queryString ? (queryString += "&") : (queryString += "?");

    if (!Array.isArray(value))
      queryString += new URLSearchParams({ [key]: String(value) }).toString();
    else
      value.forEach((record, i) => {
        if (i > 0) queryString += "&";

        queryString += `${encodeURIComponent(`${key}[]`)}=${encodeURIComponent(
          record
        )}`;
      });
  });

  return queryString;
};
