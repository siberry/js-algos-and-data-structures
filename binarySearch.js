function binarySearch(arr, element) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let middle = Math.floor((left+right)/2)
        if (arr[middle] === element) return middle;
        if (element > arr[middle]) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return -1
}

console.log(binarySearch([1,2],2));
