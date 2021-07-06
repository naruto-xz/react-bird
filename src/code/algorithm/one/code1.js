// 排序

/**
 * 1.冒泡排序
 *
 * 核心思想：
 * 循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡。
 * 下一次循环继续上面的操作，不循环已经排序好的数。
 *
 * 时间复杂度：O(n2)
 * 空间复杂度:O(1)
 */
{
  let arr = [5,2,4,7,9,1];
  function bubbleSort(arr){
    for (let i = 0; i<arr.length; i++) {
      for(let j = 0; j<arr.length - 1 - i; j++){
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
      }
    }
    return arr;
  }
  let res = bubbleSort(arr);
  // console.log(res, '---bubbleSort')
}

/**
 * 2.快速排序
 *
 * 核心思想：
 * 通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，
 * 再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列
 * 快速排序也利用了分治的思想（将问题分解成一些小问题递归求解）
 *
 * 时间复杂度：平均O(nlogn)，最坏O(n2)，实际上大多数情况下小于O(nlogn)
 * 空间复杂度:O(logn)（递归调用消耗）
 */

/**
 *  单独开辟两个存储空间left和right来存储每次递归比target小和大的序列
 *  每次递归直接返回left、target、right拼接后的数组
 *  然后一直把一边递归为最小的数组然后再返回，最终把一段一段的最终排序数据拼接起来
 *  浪费大量存储空间，写法简单
 */
{

}
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
  // console.log(res, 'quickSort');
}

/**
 * 3.插入排序
 *
 * 核心思想：
 * 将左侧序列看成一个有序序列，每次将一个待排数字插入该有序序列。
 * 插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。
 *
 * 时间复杂度：O(n2)
 * 空间复杂度:O(1)
 */
{
  let arr = []
  function insertSort(arr){
    for (let i = 1; i<arr.length; i++) {
      let target = i;
      for (let j = i - 1; j>=0; j--) {
        if (arr[target] < arr[j]) {
          [arr[target], arr[j]] = [arr[j], arr[target]]
          target = j;
        } else {
          break;
        }
      }
    }
    return arr;
  }
  let res = insertSort(arr)
  // console.log(res, 'insertSort');
}

/**
 * 4.选择排序
 *
 * 每次循环选取一个最小的数字放到前面的有序序列中。
 * 把找到的最小的数字位置和第一位每次两两交换
 */
{
  let arr = [5,2,4,7,9,1];
  function selectionSort(arr){
    for (let i = 0; i<arr.length - 1; i++) {
      let minIndex = i;
      for(let j = i+1; j<arr.length; j++){
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    return arr;
  }
  let res = selectionSort(arr);
  // console.log(res, 'selectionSort')
}

/**
 * 5.归并排序，典型的分治策略
 * 分治法将问题分(divide)成一些小的问题然后递归求解，而治(conquer)的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之)
 *
 * 分割：
 * 将数组从中点进行分割，分为左、右两个数组
 * 递归分割左、右数组，直到数组长度小于2
 *
 * 归并：
 * 如果需要合并，那么左右两数组已经有序了。
 * 创建一个临时存储数组temp，比较两数组第一个元素，将较小的元素加入临时数组
 * 若左右数组有一个为空，那么此时另一个数组一定大于temp中的所有元素，直接将其所有元素加入temp
 */
{
  let arr = [5,2,4,7,9,1];
  function mergeSort(arr){
    if (arr.length < 2) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right))
  }

  function merge(left, right){
    let temp = [];
    while (left.length && right.length) {
      if (left[0] < right[0]){
        temp.push(left.shift())
      } else {
        temp.push(right.shift())
      }
    }
    while (left.length) {
      temp.push(left.shift());
    }
    while (right.length) {
      temp.push(right.shift());
    }
    return temp;
  }

  let res = mergeSort(arr);
  console.log(res);
}

/**
 * 堆排序
 *
 */