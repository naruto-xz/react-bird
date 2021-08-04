{
  let arr = [5,2,4,7,9,1];
  function bubbleSort(arr){
    for(let i = 0; i<arr.length; i++){
      for(let j = 0; j<arr.length - 1 - i; j++){
        if(arr[j] > arr[j+1]){
          let temp = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  let res = bubbleSort(arr);
  console.log(res);
}

{
  let arr = [5,2,4,7,9,1];
  function quickSort(arr){
    if(arr.length < 2){
      return arr
    }
    let target = arr[0];
    let left = [];
    let right = [];
    for(let i = 1; i<arr.length; i++){
      if(arr[i] < target){
        left.push(arr[i])
      }else {
        right.push(arr[i])
      }
    }
    return quickSort(left).concat([target], quickSort(right));
  }
  let res = quickSort(arr);
  console.log(res);
}