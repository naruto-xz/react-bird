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
  // stack.push('1')
  // console.log(stack.print());
}

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

//练习一：定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
//如数据[3,4,2,7,9,0]依次入栈，出栈的对应的栈为[0,2,2,2,3,3]
/**
 *  利用辅助栈存储栈中对应元素的最小值，使得辅助栈的栈顶永远是最小值
 *
 *  1.定义两个栈，一个栈用于存储数据，另一个栈用于存储每次数据进栈时栈的最小值.
 *  2.每次数据进栈时，将此数据和最小值栈的栈顶元素比较，将二者比较的较小值再次存入最小值栈.
 *  3.数据栈出栈，最小值栈也出栈。
 *  4.这样最小值栈的栈顶永远是当前栈的最小值。
 */
{
  function MinStack(){
    let arr = [];
    let minArr = [];
    this.push = function (element) {
      arr.push(element);
      if (minArr.length === 0 || element < this.min()) {
        minArr.push(element);
      } else {
        minArr.push(this.min());
      }
    }
    this.pop = function () {
      minArr.pop();
      return arr.pop();
    }
    this.peek = function (){
      if (arr.length) {
        return arr[arr.length - 1];
      }
    }
    this.min = function () {
      if (minArr.length) {
        return minArr[minArr.length - 1];
      }
    }
  }
  let stack = new MinStack();
  stack.push(3);
  stack.push(4);
  stack.push(2);
  console.log(stack.min()); //2
  stack.pop();
  console.log(stack.min()); //3
  stack.pop();
  console.log(stack.min()); //3
}

//练习二：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
/**
 * 利用栈后进先出的原理
 * 新建一个栈，遇到左括号入栈，遇到右括号时将对应栈顶左括号出栈，中途遇到类型不匹配的则直接判定为不合法，
 * 遍历完所有括号后栈为空，则说明是闭合的。
 *
 * 1.后遇到的左括号要先闭合，因此我们可以将这个左括号放入栈顶
 * 2.当我们遇到一个右括号时，我们需要将一个相同类型的左括号闭合，此时，我们可以取出栈顶的左括号并判断它们是否是相同类型的括号。
 * 3.我们可以使用哈希表存储每一种括号。哈希表的键为右括号，值为相同类型的左括号。
 *
 * 时间复杂度为o(n)
 * 空间复杂度为o(n)
 */
{
  let s = '()[]{}';
  function isValid(s){
    if (s.length % 2 === 1) {
      return false;
    }
    let pairs = new Map([
      [')','('],
      [']','['],
      ['}','{'],
    ])
    let stack = [];
    for(let v of s){
      if (pairs.has(v)) {
        if (!stack.length || stack[stack.length - 1] !== pairs.get(v)) {
          return false;
        }
        stack.pop();
      } else {
        stack.push(v);
      }
    }
    return !stack.length;
  }
  let res = isValid(s);
  // console.log(res); //true
}

