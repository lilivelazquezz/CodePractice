function getIndexToIns(arr, num) {
  let holdValue = 0;
  //manual sort*
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        holdValue = arr[i];
        arr[i] = arr[j];
        arr[j] = holdValue;
      }
    }
  }
  //console.log(arr);
  //console.log(arr.length);
  if (arr[arr.length - 1] < num) {
   // console.log("this is length  " + arr.length);
    return arr.length;
  } else if (arr.length === 0) {
    console.log(0);
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    //console.log(num)
    if (arr[i] > num) {
     // console.log("this is " + i);
      return i;
    } else if (arr[i] === num) {
    // console.log("this is " + i);
      return i;
    }
  }
}

getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 20, 10], 19);
getIndexToIns([40, 60], 50);
getIndexToIns([2, 5, 10], 15);
getIndexToIns([], 1);
getIndexToIns([10, 20, 30, 40, 50], 30);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);
