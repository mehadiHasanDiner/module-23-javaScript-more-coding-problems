const country = "Bangladesh";
const age = 45;
const isIndependent = true;
const students = { id: 121, class: 12, name: "Agun" };
const friends = [13, 12, 23, 14, 53, 43, 56];
function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof students);
console.log(typeof friends);
//  [typeof দিয়ে সব চেক করা যায়, কিন্তু Array চেক করা যায় না Array জন্য Array.isArray()]

console.log(typeof add);

// array এর মধ্যে কোনো একটা ইলিমেন্ট আছে কি’না সেটা দেখতে এটা ব্যবহার হয়
console.log(Array.isArray(friends));

// কোনো একটা জিনিস array এর মধ্যে আছে কি’না সেটা বুঝার সহজ উপায় হচ্ছে array.includes() ব্যবহার করা। এই পদ্ধতি এখন অনেক বেশি ইউজ হয়
console.log(friends.includes(20));

// array.includes() ছাড়া অন্য আরেকটা পদ্ধতি হচ্ছে array.indexOf() ব্যবহার করা। এই পদ্ধতি এখন আগে বেশি ইউজ হত।
if (friends.indexOf(252) !== -1) {
}

// concat:
const allFriendAge = [12, 13, 14, 15, 16, 17, 18, 19, 20];
const allFriend = allFriendAge.concat(friends);
console.log(allFriend);
