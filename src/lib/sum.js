function sum(arr, n) {
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }





function sum2(arr, n) {
    let sumVal = 0
    while (n > 0) {
        n-- 
        sumVal += arr[n]
    }
    return sumVal
}

const arr = [1, 2, 3]
//console.log(sum2(arr, 2))