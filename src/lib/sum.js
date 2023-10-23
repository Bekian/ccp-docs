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

function aNumber(number) {
  return number
}

function addOne(number, stop) {
  console.log(number)
  if (number == stop) {
    return 0
  }
  number += 1
  return addOne(number, stop)
}

//addOne(1,3)



function newSum(arr, n) {
  if(n = 0){
    return 0
  }
  let newN = n - 1
  return sum(arr, newN) + arr[newN];
}

let array1 = [1, 2, 3]

console.log(newSum(array1, 2))