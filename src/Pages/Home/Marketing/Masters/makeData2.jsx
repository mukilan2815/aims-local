const generateData = (length, prefix) =>
  Array(length)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      Sno: `${prefix}${index + 1}`,
      Unit: `UPNo${prefix}${index + 1}`,
      unitdescription: `PLNo${prefix}${index + 1}`,
      decimal: `decimal${prefix}${index + 1}`,
    }));

export const makeData = generateData(60, "");
