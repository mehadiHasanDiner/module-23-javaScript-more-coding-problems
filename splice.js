// Array Splice()
const friends = [12, 34, 45, 65, 67, 76, 23, 54, 69];

// Removes elements from an array
// and, if necessary, inserts new elements in their place
// returning the deleted elements.
// will change the original array

const partial = friends.splice(2, 5, 56, 67, 666, 787);
// splice - এ মূল array কে চেঞ্জ করে এবং 56, 67, 666, 787 -এ সংখ্যাগুলো ইনজেক্ট করে যে অংশ কাটা হয় সেখানে।
console.log(partial);
console.log(friends);
