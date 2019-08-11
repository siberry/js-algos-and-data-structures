function radixSort(arr) {
  let maxDigits = mostDigits(arr)
  for (let place = 0; place < maxDigits; place++) {
    let buckets = Array.from({length: 10}, () => [])
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], place)
      buckets[digit].push(arr[i])
    }
    arr = [].concat(...buckets)
  }
  console.log(arr)
  return arr
}

radixSort([123,1,4,598,1000,50,4,29,2,43,500])

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10,place)) % 10;
}

function countDigits(num) {
  num = Math.abs(num)
  if (num < 10) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(arr) {
  let maxDigits = 1;
  for (let i = 0; i < arr.length; i++) {
    let digitCount = countDigits(arr[i]);
    if ( digitCount > maxDigits) maxDigits = digitCount;
  }
  return maxDigits
}


// console.log(getDigit(12345, 4)); // return 4
// console.log(getDigit(-12345, 1));

// console.log(digitCount(-12346));

//recursive helpers



// function countDigits(num) {
//   num = Math.abs(num)
//   if (num < 10) return 1;
//   return 1 + countDigits(Math.floor(num/10))
// }
//
// function getDigit(num, place) {
//   if (place === 0) return num % 10;
//   return getDigit(Math.floor(Math.abs(num)/10), place - 1)
// }
