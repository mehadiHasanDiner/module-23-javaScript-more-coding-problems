function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please provide a number";
  }
  return num1 + num2;
}

const result = add(false, 22);
console.log(result);

let sum = 0;
for (let i = 0; i <= 3; i++) {
  sum = sum + i;
  console.log(sum);
}
