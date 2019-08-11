function sumZero(arr) {
  if (Math.min(...arr) > 0) return undefined;
  const len = arr.length
  let left = 0, right = len-1
  while (right > left) {
    if (arr[left] + arr[right] === 0) return [arr[left], arr[right]];
    arr[left] + arr[right] > 0 ? right-- : left++
  }
  return undefined
}

console.log(sumZero([1,2,3]));
console.log(sumZero([-5,-4,3,4]));
console.log(sumZero([-6,-5,-1,1,5,7]));
