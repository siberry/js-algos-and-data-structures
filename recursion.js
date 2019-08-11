function flatten(oldArr) {
  let newArr = []
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) newArr = newArr.concat(flatten(oldArr[i]));
    else newArr.push(oldArr[i])
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

function someRecursive(arr, cb) {
  if (arr.length === 1) return cb(arr[0]);
  if (cb(arr[0])) return true;
  else return someRecursive(arr.slice(1), cb)
}

const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)); // true
// console.log(someRecursive([4,6,8,9], isOdd)); // true
// console.log(someRecursive([4,6,8], isOdd)); // false
// console.log(someRecursive([4,6,8], val => val > 10));; // false


function reverse(str){
  if (str.length < 2) return str;
  return reverse(str.slice(1)) + str[0];
}

// console.log(reverse('awesome'));
// console.log(reverse('rithmschool'));

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
  else return false;
}

// function isPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }

// console.log(isPalindrome('awesome')); // false
// console.log(isPalindrome('foobar') );// false
// console.log(isPalindrome('tacocat')); // true
// console.log(isPalindrome('amanaplanacanalpanama')); // true
// console.log(isPalindrome('amanaplanacanalpandemonium')); // false
