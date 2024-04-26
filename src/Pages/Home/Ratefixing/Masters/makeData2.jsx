export const makeData2 = () => {
  const newData = [];
  const numberOfItems = 100;

  for (let i = 0; i < numberOfItems; i++) {
    newData.push({
      sno: i + 1,
      rfInitial: `RF${i + 1}`,
      woNo: `WO${i + 1}`,
      jcNo: `JC${i + 1}`,
      jcType: `JCTYPE${i + 1}`,
      item: `ITEM${i + 1}`,
      shop: `SHOP${i + 1}`,
      subassy: `SUBASSY${i + 1}`,
      remarks: `Remarks ${i + 1}`,
      refNo: `REF${i + 1}`,
      jcQty: i + 10,
      qps: `QPS${i + 1}`,
      unit: `UNIT${i + 1}`,
      batchNo: `BATCH${i + 1}`,
      batchQty: i + 20,
      allocatedTo: `ALLOCATED${i + 1}`,
      started: `STARTED${i + 1}`,
      completed: `COMPLETED${i + 1}`,
      preparedTime: `PREPARED TIME${i + 1}`,
      allowedTime: `ALLOWED TIME${i + 1}`,
      totalTime: `TOTAL TIME${i + 1}`,
      timeTaken: `TIME TAKEN${i + 1}`,
      abnormality: `ABNORMALITY${i + 1}`,
      passed: i % 2 === 0,
      rejected: i % 2 !== 0,
      export: `EXPORT${i + 1}`,
      createdOn: new Date().toLocaleDateString(),
      print: `PRINT${i + 1}`,
      status: `STATUS${i + 1}`,
    });
  }

  return newData;
};
