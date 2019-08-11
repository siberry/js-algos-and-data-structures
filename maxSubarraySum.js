function maxSubarraySumNested(arr, subLen) {
  let max = -Infinity
  for (let i = 0; i < arr.length - subLen; i++) { // with nested for loops
    let temp = 0
    for (let j = 0; j < subLen; j++) {
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max;
}

function maxSubarraySum(arr, subLen) {
  let max = 0
  for (let i = 0; i < subLen; i++) {
    max += arr[i]
  }
  let temp = max;
  for (let i = subLen; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(temp, max)
  }
  return max
}
