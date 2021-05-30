//算法（排序）

//冒泡排序
//时间复杂度：O(n2)
//空间复杂度:O(1)
{
  let arr = [5,2,4,7,9,1];
  function bubbleSort(arr){
    for (let i = 0; i < arr.length - 1; i++) {
      for(let j = 0; j<arr.length - 1 - i; j++){
        if (arr[j] > arr[j+1]) {  // 相邻元素两两对比
          let temp = arr[j+1];
          arr[j+1] = arr[j]  //比后一位大，就把前一位换到后一位
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  let res = bubbleSort(arr);
  console.log(res);
}

//二分查找
