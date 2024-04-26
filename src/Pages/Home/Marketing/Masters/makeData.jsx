const generateData = (length, prefix) =>
  Array(length)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      oldPLNo: `OldPLNo${prefix}${index + 1}`,
      upNo: `UPNo${prefix}${index + 1}`,
      plNo: `PLNo${prefix}${index + 1}`,
      Productname: `product names${prefix}${index + 1}`,
      No: `No ${prefix}${index + 1}`,
      detailedDescription: `DetailedDescription${prefix}${index + 1}`,
      rate: `Rate${prefix}${index + 1}`,
      shop: `Shop${prefix}${index + 1}`,
      closingShop: `ClosingShop${prefix}${index + 1}`,
      availabilityStock: `AvailabilityStock${prefix}${index + 1}`,
      unit: `Unit${prefix}${index + 1}`,
    }));

export const makeData = generateData(60, "");
