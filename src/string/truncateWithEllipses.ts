export const truncateWithEllipses = (text: string, max: number): string => {
  if (text.length <= max) return text;
  else return text.substring(0, max).trimEnd().concat("&hellip;");
};
