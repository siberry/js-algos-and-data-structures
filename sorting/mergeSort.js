function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left,right)
}

function merge(sortedA, sortedB) {
  let a = 0;
  let b = 0;
  let merged = []
  while (a < sortedA.length && b < sortedB.length) {
    if (sortedA[a] < sortedB[b]) {
      merged.push(sortedA[a])
      a++
    } else {
      merged.push(sortedB[b])
      b++
    }
  }
  while (a < sortedA.length) {
    merged.push(sortedA[a])
    a++
  }
  while (b < sortedB.length) {
    merged.push(sortedB[b])
    b++
  }
  return merged
}

// function merge(sortedA, sortedB) { RUNTIME PROBLEM
//   let a = b = 0;
//   let merged = [];
//   let [short,long] = [sortedA, sortedB].sort((a, b) => (a.length > b.length) ? 1 : -1)
//
//   while (a < short.length ) {
//     if (short[a] < long[b]) {
//       merged.push(short[a])
//       a++
//     } else {
//       merged.push(long[b])
//       b++
//     }
//   }
//
//   while (b < long.length) {
//     merged.push(long[b])
//     b++
//   }
//   return merged
// }


console.log(merge([1,3,5],[2,4,6,10]))

console.log(mergeSort([1,0,3,10,2,3,6,11,5]))
