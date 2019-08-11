function countUniqValues(arr) { // counts values that only occur once
  let ans = 0;
  let len = arr.length
  let i = 0;
  for (let j = 1; j < len; j++) {
    if (arr[i] !== arr[j]) {
      if (i === j-1 || j === len - 1) ans++;
      i = j
    }
  }
  return ans
}

console.log(countUniqValues([1,1,4,5,7,7]));    //2
console.log(countUniqValues([1,1,4,5,7,8,8,9]));  //4
console.log(countUniqValues([1,1,4,5,7,8,8,9,9])); //3

function countDifferentValues(arr) {
  let ans = 0;
  let i = 0, j = 1;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

console.log(countDifferentValues([1,1,4,5,7,7])); //4
console.log(countDifferentValues([1,1,4,5,7,7,10,15])); //6
