/**
 * 集合
 */

//去重
const arr = [1,2,2,3];
const arr1 = [...new Set(arr)];
console.log(arr1, '数组去重');

//判断元素是否在集合中
const set = new Set(arr);
const has = set.has(1);
console.log(has, '判断元素是否在集合中')

//求交集
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * 时间复杂度为o(n2)或o(m*n)
 * 空间复杂度为o(n)
 */
//求两个数组的交集,输出结果中的每个元素是唯一的
{
  const intersection = function(nums1, nums2) {
    return [...new Set(nums1)].filter(item => new Set(nums2).has(item));
    // return [...new Set(nums1)].filter(item => nums2.includes(item));
  };
  const arr2 = [1,2,2,3];
  const arr3 = [3,3,4];
  const res = intersection(arr2, arr3);
  console.log(res, '求交集'); //[3]
}

//求差集
{
  const difference = function(nums1, nums2) {
    return [...new Set(nums1)].filter(item => !new Set(nums2).has(item));
    // return [...new Set(nums1)].filter(item => !nums2.includes(item));
  };
  const arr2 = [1,2,2,3];
  const arr3 = [3,4];
  const res = difference(arr2, arr3);
  console.log(res, '求差集'); //[1,2]
}

//常用方法 (new add delete has size for..of)
{
  const set = new Set();
  set.add(1);
  set.add('str');
  let o = {name: 'zs'};
  set.add(o);
  console.log(set.has(o));  //true
  console.log(set.size);  //3
  set.delete(1);
  console.log(set.size) //2

  for(let val of set){
    console.log(val, '循环输出值');
  }
}

