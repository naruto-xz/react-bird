/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 * 时间复杂度o(n)
 * 空间复杂度为o(n)
 *
 * 解题思想
 * 1.定义一个栈，依次往栈里面添加左括号。
 * 2.定义一个集合用来判断是否为右括号。
 * 3.当为右括号时，判断当前栈栈顶的元素是否与其相等，pop栈顶，然后继续看有下次循环。
 * 4.最后判断栈是否为空，为空则代表是闭合的。
 */
{
  function isValid(str){
    if(str%2 === 1){
      return false;
    }
    let map = new Map([
      [')','('],
      ['}','{'],
      [']','['],
    ]);
    let stack = [];
    for(let val of str){
      if(map.has(val)){
        if(!stack.length || stack[stack.length - 1] !== map.get(val)){
          return false;
        }
        stack.pop();
      } else {
        stack.push(val);
      }
    }
    return !stack.length;
  }
  let str = '(){}'
  let res = isValid(str);
  console.log(res);
}

/**
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * 如数据[3,4,2,7,9,0]依次入栈，出栈的对应的栈为[0,2,2,2,3,3]
 *
 * 时间复杂度为o(1)
 * 空间复杂度为o(n)
 *
 * 解题思想
 * 1.定义两个栈，一个栈用于存储数据，另一个栈用于存储每次数据进栈时栈的最小值.
 * 2.每次数据进栈时，将此数据和最小值栈的栈顶元素比较，将二者比较的较小值再次存入最小值栈.
 * 3.数据栈出栈，最小值栈也出栈。
 * 4.这样最小值栈的栈顶永远是当前栈的最小值。
 */
{
  function MinStack(){
    this.stack = [];
    this.minStack = [Infinity];
  }
  MinStack.prototype.push = function (val){
    this.stack.push(val);
    this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
  }
  MinStack.prototype.pop = function (){
    this.stack.pop();
    this.minStack.pop();
  }
  MinStack.prototype.top = function (){
    return this.stack[this.stack.length - 1];
  }
  MinStack.prototype.getMin = function (){
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * 请判断一个链表是否为回文链表。
 * 输入 1->2->2->1
 * 输出 true
 *
 * 时间复杂度为o(n);
 * 空间复杂度为o(n)；
 *
 * 解题思想
 * 1.先把链表转换为数组的形式，当链表的末尾节点为null时则代表转换完成
 * 2.利用数组双指针的思想，分别从两边开始向中间对比，有不一样的则为false
 */
{
  function isPalindrome(head){
    let stack = [];
    while (head !== null){
      stack.push(head.val);
      head = head.next;
    }
    for(let i = 0, j = stack.length - 1; i < j; i++, j--){
      if(stack[i] !== stack[j]){
        return false;
      }
    }
    return true;
  }
}