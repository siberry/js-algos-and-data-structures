const numWaysX = (n , sizes = [1,3,5]) => { // BAD
  if (n === 0) return 1;
  let total = 0
  sizes.forEach(size => {   // if step sizes of 1, 3, 5 allowed
    if (n - size >= 0) total += numWaysX(n - 1)
  })
  return total
}


const numWaysXBottomUp = (n, sizes = [1,3,5]) => {
  if (n === 0) return 1;
  let nums = new Array(n+1)
  nums[0] = 1
  let total
  for (let i = 1; i <= n ; i++) {
    total = 0
    sizes.forEach(size => {   // if step sizes of 1, 3, 5 allowed
      if (i - size >= 0) total += nums[i-size]
    })
    nums[i] = total
  }
  return nums[n]
}

console.log(numWaysXBottomUp(100));
// console.log(numWaysX(100)); long runtime
