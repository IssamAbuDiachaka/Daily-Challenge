function secondLargest(arr) {
  let uniqueArr = new Set(arr);
//   console.log(uniqueArr)

  let newArr = [...uniqueArr]
  //   console.log(newArr)

  let sortedArr = newArr.sort((a,b) => (a-b));
//   console.log(sortedArr)
//   console.log(sortedArr.length -2)

  let secondLargestNum = sortedArr[sortedArr.length-2]

  return secondLargestNum;
    
}


