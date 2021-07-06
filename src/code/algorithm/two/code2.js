//冒泡排序
/**
 * 1.内部相邻两个元素两两比较，大的后移,每一轮确定一个最大的
 * 2.循环进行多轮
 */
{
  let arr = [2,5,3,8,1];
  function bubbleSort(arr){
    for(let i = 0; i<arr.length; i++){
      for(let j = 0; j<arr.length - 1 - i; j++){
        if(arr[j] > arr[j+1]){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  }
  let res = bubbleSort(arr);
  // console.log(res); //[1,2,3,5,8]
}

//快速排序
/**
 * 1.以第一个为基准，循环和其比较，分成两个数组，小的放在左边数组，大的放在右边数组
 * 2.每次递归直接返回left、target、right拼接后的数组。
 * 3.然后重复上面的步骤继续进行递归循环，当拆分数组的长度小于2时,则放回最终的结果。
 * 4.串联起来就是最终的排序结果。
 */
{
  let arr = [2,5,3,8,1];
  function quickSort(arr){
    if(arr.length < 2){
      return arr;
    }
    let target = arr[0];
    let left = [];
    let right = [];
    for(let i = 1; i<arr.length; i++){
      if(arr[i] < target){
        left.push(arr[i]);
      }else {
        right.push(arr[i])
      }
    }
    return quickSort(left).concat([target], quickSort(right));
  }
  let res = quickSort(arr);
  console.log(res); //[1,2,3,5,8]
}
