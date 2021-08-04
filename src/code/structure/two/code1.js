/**
 * 栈
 */

//应用场景：函数调用
{
  function a(){
    return 'a'+b();
  }
  function b(){
    return 'b'+c();
  }
  function c(){
    return 'c';
  }
  let res = a();
  // console.log(res); //abc
}

//用javascript的方式定义一个栈
{
  function Stack(){
    let arr = [];
    this.push = function (element) {
      arr.push(element)
    }
    this.pop = function () {
      arr.pop();
    }
    this.peek = function () {
      if (arr.length) {
        return arr[arr.length - 1];
      }
    }
    this.isEmpty = function () {
      return arr.length === 0;
    }
    this.size = function () {
      return arr.length;
    }
    this.clear = function (){
      arr = [];
    }
    this.print = function (){
      return arr;
    }
  }
  let stack = new Stack();
  stack.push('1')
  stack.push('2')
  // console.log(stack.print());
  // console.log(stack.peek());
}

//练习：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
{
  function valid(str){
    if (str.length % 2 === 1) {
      return false;
    }
    const map = new Map([
      [')', '('],
      ['}', '{'],
      [']', '['],
    ])
    const stack = [];
    for (let key of str) {
      if (map.has(key)) {
        if (!stack.length || stack[stack.length - 1] !== map.get(key)) {
          return false;
        }
        stack.pop();
      } else {
        stack.push(key);
      }
    }
    return !stack.length;
  }
  const str = '()[{}';
  let res = valid(str);
  console.log(res);
}

{
  //练习：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
  function valid(str){
    if(str.length%2 === 1){
      return false;
    }
    const stack = [];
    const map = new Map([[
      ')', '(',
      '}', '{',
      ']', '['
    ]])
    for(let key of str){
      if(map.has(key)){
        if(!stack.length || map.get(key) !== stack[stack.length - 1]){
          return false;
        }
        stack.pop();
      }else {
        stack.push(key);
      }
    }
    return !stack.length;
  }
  const str = '()[{}';
  let res = valid(str);
  console.log(res);
}