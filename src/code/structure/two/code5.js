/**
 *  字典
 */

//求交集
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * 时间复杂度为o(m+n)
 * 空间复杂度为o(m)
 */
//求两个数组的交集,输出结果中的每个元素是唯一的
{
  const intersection = (num1, num2)=> {
    const map = new Map();
    num1.forEach(item => {
      map.set(item, true);
    })
    let res = [];
    num2.forEach(item => {
      if (map.get(item)) {
        res.push(item);
        map.delete(item);
      }
    })
    return res;
  }
  const arr1 = [1,2,2,3];
  const arr2 = [3,3,4];
  const res = intersection(arr1, arr2);
  console.log(res, '求交集'); //[3]
}

//求数组中和为目标值的两个正数,并返回它们的数组下标 （nums, target）
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * 时间复杂度为o(n)
 * 空间复杂度为o(n)
 */
{
  const nums = [2,3,7,11,15];
  const target = 9
  const twoSum = (nums, target)=> {
    const map = new Map();
    const arr = [];
    nums.forEach((item, index) => {
      if (map.has(target - item)) {
        arr.push(map.get(target - item), index)
      } else {
        map.set(item, index)
      }
    })
    return arr;
  }
  let res = twoSum(nums, target)
  console.log(res, '数组下标'); //[0, 2]
}

//常用方法 (set get has delete clear for..of)
// {
//   const map = new Map();
// //增
//   map.set('age', 23);
//   console.log(map) //{'age'=>23}
// //获取
//   console.log(map.get('age'));  //23
// //查
//   console.log(map.has('age')) //true
// //改
//   map.set('age',24);
//   console.log(map.get('age'));  //24
// //删
//   map.delete('age');
//   console.log(map) //{}
// //清空
//   map.clear()
// }

{
  // const map = new Map([['age', 23], ['name','zs']]);
  // for(let key of map.keys()){
  //   console.log(key) // 'age','name'
  // }
  // for(let value of map.values()) {
  //   console.log(value) //23,'zs'
  // }
  // for(let item of map.entries()){
  //   console.log(value) //['age', 23],['name','zs']
  // }
}

{
  //求数组中和为目标值的两个正数,并返回它们的数组下标 （nums, target）
  const nums = [2,3,7,11,15];
  const target = 9;
  const twoSum = function (nums, target){
    const map = new Map();
    const arr = [];
    nums.forEach((item, index)=> {
      if(map.has(item)){
        arr.push(map.get(item), index)
      } else {
        map.set(target - item, index);
      }
    })
    return arr;
  }
  let res = twoSum(nums, target)
  console.log(res, '数组下标1'); //[0, 2]
}