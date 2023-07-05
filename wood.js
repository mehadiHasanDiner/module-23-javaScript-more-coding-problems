function totalWood(table, chair, bed) {
  const unitOfTableWood = 4;
  const unitOfChairWood = 2;
  const unitOfBedWood = 10;

  const tableTotalWood = table * unitOfTableWood;
  const chairTotalWood = chair * unitOfChairWood;
  const bedTotalWood = bed * unitOfBedWood;

  const totalWood = tableTotalWood + chairTotalWood + bedTotalWood;

  return totalWood;
}

const totalAmountOfWood = totalWood(8, 0, 0);

console.log(totalAmountOfWood);
