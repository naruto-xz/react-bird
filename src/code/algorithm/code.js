// 排序
// 排序

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
  // console.log(res);
}

//快速排序
/**
 * 核心思想：
 * 通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，
 * 再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列
 *
 * 快速排序也利用了分治的思想（将问题分解成一些小问题递归求解）
 * 时间复杂度：平均O(nlogn)，最坏O(n2)，实际上大多数情况下小于O(nlogn)
 * 空间复杂度:O(logn)（递归调用消耗）
 #
 */

/**
 *  单独开辟两个存储空间left和right来存储每次递归比target小和大的序列
 *  每次递归直接返回left、target、right拼接后的数组
 *  然后一直把一边递归为最小的数组然后再返回，最终把一段一段的最终排序数据拼接起来
 *  浪费大量存储空间，写法简单
 */
{
  let arr = [6,2,1,7,9,3,4,5,10,8]
  function quickSort(arr){
    if (arr.length < 2) {
      return arr;
    }
    let target = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i<arr.length; i++) {
      if (arr[i] < target) {
        left.push(arr[i]);
      } else {
        right.push(arr[i])
      }
    }
    return quickSort(left).concat([target], quickSort(right));
  }
  let res = quickSort(arr);
  console.log(res);
}

