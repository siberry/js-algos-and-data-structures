const numWaysBottomUp = (n) => {
  if (n < 2) return 1;
  let nums = new Array(n+1)
  nums[0] = nums[1] = 1
  for (let i = 2; i <= n; i++) {
    nums[i] = nums[i-1] + nums[i-2]
  }
  return nums[n];
}

const recursiveStaircase = (n) => { // NO GOOD!
  if (n < 2) return 1;
  return recursiveStaircase(n-1) + recursiveStaircase(n-2)
}

console.log(numWaysBottomUp(100));
