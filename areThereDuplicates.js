function areThereDuplicates() {
  let collection = {}
  for(let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false
}

console.log(areThereDuplicates(2,5));

// function areThereDuplicatesB(...args) {
//   args.sort((a,b) =>)
// }
