const generateData = (length, prefix) =>
  Array(length)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      componentType: `ComponentType${prefix}${index + 1}`,
      oldPLNo: `OldPLNo${prefix}${index + 1}`,
      upNo: `UPNo${prefix}${index + 1}`,
      plNo: `PLNo${prefix}${index + 1}`,
      briefDescription: `BriefDescription${prefix}${index + 1}`,
      detailedDescription: `DetailedDescription${prefix}${index + 1}`,
      selectUnit: `SelectUnit${prefix}${index + 1}`,
      componentRate: `ComponentRate${prefix}${index + 1}`,
      availabilityStock: `AvailabilityStock${prefix}${index + 1}`,
      previousPurchaseValue: `PreviousPurchaseValue${prefix}${index + 1}`,
      closingShop: `ClosingShop${prefix}${index + 1}`,
      shopFlow: `ShopFlow${prefix}${index + 1}`,
      category: `Category${prefix}${index + 1}`,
      requiredFor: `RequiredFor${prefix}${index + 1}`,
    }));

export const makeData = generateData(60, "");
