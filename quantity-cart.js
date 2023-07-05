const shoppingCart = [
  { name: "shirt", price: 1000, quantity: 4 },
  { name: "pant", price: 1200, quantity: 4 },
  { name: "shoe", price: 3500, quantity: 3 },
  { name: "belt", price: 450, quantity: 2 },
];

function createCart(cart) {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const productTotal = cartItem.price * cartItem.quantity;
    sum = sum + productTotal;
  }
  return sum;
}

const totalShopping = createCart(shoppingCart);
console.log("total shopping: ", totalShopping);
