const phoneList = [
  {
    name: "Samsung",
    camera: "10MP",
    storage: "12GB",
    price: 44000,
    color: "silver",
  },
  {
    name: "Iphone",
    camera: "10MP",
    storage: "12GB",
    price: 120000,
    color: "silver",
  },
  {
    name: "Oppo",
    camera: "10MP",
    storage: "12GB",
    price: 28000,
    color: "silver",
  },
  {
    name: "Vivo",
    camera: "10MP",
    storage: "12GB",
    price: 21000,
    color: "silver",
  },
  {
    name: "Nokia",
    camera: "10MP",
    storage: "12GB",
    price: 27000,
    color: "silver",
  },
];

function lowestPrice(phones) {
  let lowestPrice = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phonePrice = phones[i];
    if (phonePrice.price < lowestPrice.price) {
      lowestPrice = phonePrice;
    }
  }
  return lowestPrice;
}

const lowestMobilePrice = lowestPrice(phoneList);
console.log(lowestMobilePrice);
