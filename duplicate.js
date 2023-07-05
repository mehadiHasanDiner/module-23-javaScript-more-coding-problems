const dupNames = [
  "abul",
  "babul",
  "dabul",
  "Kabul",
  "cabul",
  "abul",
  "dabul",
  "Kabul",
  "cabul",
  "dabul",
  "Kabul",
  "cabul",
  "dabul",
  "Kabul",
];

function removeDuplicates(names) {
  let uniqueNames = [];
  for (let i = 0; i < names.length; i++) {
    const allNames = names[i];
    if (uniqueNames.includes(allNames) === false) {
      uniqueNames.push(allNames);
    }
  }
  return uniqueNames;
}

const uniques = removeDuplicates(dupNames);
console.log(uniques);
