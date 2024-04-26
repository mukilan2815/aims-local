const generateData = (length, prefix) =>
  Array(length)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      Sno: `${prefix}${index + 1}`,
      dep: `department name${prefix}${index + 1}`,
    }));

export const makeData = generateData(60, "");
