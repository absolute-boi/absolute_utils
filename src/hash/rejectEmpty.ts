export const rejectEmpty = <T>(
  object: Record<string | number | symbol, T>
): { [key: string]: T } => {
  return Object.fromEntries(
    Object.entries(object).filter(([_key, value]) => (!!value || value === false))
  );
};
